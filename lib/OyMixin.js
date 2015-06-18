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

var _componentsOyImgJsx = require('./components/OyImg.jsx');

var _componentsOyImgJsx2 = _interopRequireDefault(_componentsOyImgJsx);

var _componentsOyTableJsx = require('./components/OyTable.jsx');

var _componentsOyTableJsx2 = _interopRequireDefault(_componentsOyTableJsx);

var _componentsOyTDJsx = require('./components/OyTD.jsx');

var _componentsOyTDJsx2 = _interopRequireDefault(_componentsOyTDJsx);

// HTML4 elements with attributes deprecated in HTML5.
// Necessary for now because React does not render custom attributes.
var OY_COMPONENTS = {
  'img': _componentsOyImgJsx2['default'],
  'table': _componentsOyTableJsx2['default'],
  'td': _componentsOyTDJsx2['default']
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