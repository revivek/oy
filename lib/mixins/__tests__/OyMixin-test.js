'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OyMixin = require('../OyMixin');

var _OyMixin2 = _interopRequireDefault(_OyMixin);

describe('OyMixin', function () {
  it('should throw errors on improper component configuration', function () {
    var NoRules = _react2['default'].createClass({
      displayName: 'NoRules',

      mixins: [_OyMixin2['default']],
      element: 'table'
    });
    _assert2['default'].throws(function () {
      return _react2['default'].renderToStaticMarkup(_react2['default'].createElement(NoRules, null));
    }, Error);

    var NoElement = _react2['default'].createClass({
      displayName: 'NoElement',

      mixins: [_OyMixin2['default']],
      rules: []
    });
    _assert2['default'].throws(function () {
      return _react2['default'].renderToStaticMarkup(_react2['default'].createElement(NoRules, null));
    }, Error);

    var RuleNoName = {
      description: 'foo',
      validate: function validate() {
        return true;
      },
      autocorrect: function autocorrect(props) {
        return props;
      }
    };
    var RulesNoName = _react2['default'].createClass({
      displayName: 'RulesNoName',

      mixins: [_OyMixin2['default']],
      rules: [RuleNoName],
      element: 'table'
    });
    _assert2['default'].throws(function () {
      return _react2['default'].renderToStaticMarkup(_react2['default'].createElement(NoRules, null));
    }, Error);

    var RuleNoDescription = {
      name: 'foo',
      validate: function validate() {
        return true;
      },
      autocorrect: function autocorrect(props) {
        return props;
      }
    };
    var RulesNoDescription = _react2['default'].createClass({
      displayName: 'RulesNoDescription',

      mixins: [_OyMixin2['default']],
      rules: [RuleNoDescription],
      element: 'table'
    });
    _assert2['default'].throws(function () {
      return _react2['default'].renderToStaticMarkup(_react2['default'].createElement(NoRules, null));
    }, Error);

    var RuleNoValidate = {
      name: 'foo',
      description: 'bar',
      autocorrect: function autocorrect(props) {
        return props;
      }
    };
    var RulesNoValidate = _react2['default'].createClass({
      displayName: 'RulesNoValidate',

      mixins: [_OyMixin2['default']],
      rules: [RuleNoValidate],
      element: 'table'
    });
    _assert2['default'].throws(function () {
      return _react2['default'].renderToStaticMarkup(_react2['default'].createElement(NoRules, null));
    }, Error);

    var RuleNoAutocorrect = {
      name: 'foo',
      description: 'bar',
      validate: function validate() {
        return false;
      }
    };
    var RulesNoAutocorrect = _react2['default'].createClass({
      displayName: 'RulesNoAutocorrect',

      mixins: [_OyMixin2['default']],
      rules: [RuleNoAutocorrect],
      element: 'table'
    });
    _assert2['default'].throws(function () {
      return _react2['default'].renderToStaticMarkup(_react2['default'].createElement(NoRules, null));
    }, Error);
  });

  it('should run validate then autocorrect', function () {
    var hasValidated = false;
    var correctOrder = false;

    var Rule1 = {
      name: 'Rule1',
      description: 'foo',
      validate: function validate() {
        hasValidated = true;
        return false;
      },
      autocorrect: function autocorrect(props) {
        if (hasValidated) {
          correctOrder = true;
        }
        return props;
      }
    };

    var A = _react2['default'].createClass({
      displayName: 'A',

      mixins: [_OyMixin2['default']],
      element: 'table',
      rules: [Rule1]
    });

    _react2['default'].renderToStaticMarkup(_react2['default'].createElement(A, null));
    _assert2['default'].equal(correctOrder, true);
  });
});