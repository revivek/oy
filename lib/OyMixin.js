/**
 * OyMixin:
 * Runs rules and may autocorrect mistakes.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _componentsOyImg = require('./components/OyImg');

var _componentsOyImg2 = _interopRequireDefault(_componentsOyImg);

var _componentsOyTable = require('./components/OyTable');

var _componentsOyTable2 = _interopRequireDefault(_componentsOyTable);

var _componentsOyTD = require('./components/OyTD');

var _componentsOyTD2 = _interopRequireDefault(_componentsOyTD);

// HTML4 elements with attributes deprecated in HTML5.
// Necessary for now because React does not render custom attributes.
var OY_COMPONENTS = {
  'img': _componentsOyImg2['default'],
  'table': _componentsOyTable2['default'],
  'td': _componentsOyTD2['default']
};

var defaultWarn = function defaultWarn(brokenRule, componentName) {
  console.warn('Validation failed in <' + componentName + ' />: ' + brokenRule.description);
};

exports['default'] = {
  componentWillMount: function componentWillMount() {
    if (!this.element) {
      throw new Error('this.element must be defined to use OyMixin.');
    }

    if (!this.rules) {
      throw new Error('this.rules must be defined on <' + this.constructor.displayName + ' /> to use OyMixin.');
    } else {
      this.rules.forEach(function (rule) {
        ['name', 'description', 'validate', 'autocorrect'].forEach(function (property) {
          if (!rule.hasOwnProperty(property)) {
            throw new Error('' + property + ' must be defined on ' + rule.name + ' rule to use OyMixin.');
          }
        });
      });
    }
  },

  render: function render() {
    var _this = this;

    var newProps = this.rules.filter(function (rule) {
      var ruleIsBroken = rule.validate(_this.props) === false;
      var warn = rule.warn || defaultWarn;
      if (ruleIsBroken) {
        warn(rule, _this.constructor.displayName);
      }
      return ruleIsBroken;
    }).reduce(function (props, brokenRule) {
      return brokenRule.autocorrect(props);
    }, (0, _objectAssign2['default'])({}, this.props));

    var element = OY_COMPONENTS.hasOwnProperty(this.element) ? OY_COMPONENTS[this.element] : this.element;
    return _react2['default'].createElement(element, newProps, this.props.children);
  }
};
module.exports = exports['default'];