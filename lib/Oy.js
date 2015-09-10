/**
 * Oy:
 * Exposes `renderTemplate` functionality, along with `Element`, and `PropTypes`.
 * A base template to build emails with.
 *
 * Based on guidelines here:
 * https://github.com/centralcollegenottingham/HTML-Email-Boilerplate-Redux/blob/master/htmlemail-boilerplate-stable-with-guidelines.html
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsHTML4 = require('./utils/HTML4');

var _utilsHTML42 = _interopRequireDefault(_utilsHTML4);

var _componentsOyElement = require('./components/OyElement');

var _componentsOyElement2 = _interopRequireDefault(_componentsOyElement);

exports['default'] = {
  Element: _componentsOyElement2['default'],

  PropTypes: {
    rules: function rules(ruleNames) {
      return function (props, propName, componentName) {
        return ruleNames.map(function (ruleName) {
          if (typeof ruleName === 'string' || ruleName instanceof String) {
            return require('./rules/' + ruleName)(props, propName, componentName);
          } else {
            return ruleName;
          }
        }).filter(function (error) {
          return error instanceof Error;
        })[0];
      };
    }
  },

  renderTemplate: function renderTemplate(options, generateCustomTemplate) {
    var rawHTML = generateCustomTemplate ? generateCustomTemplate(options) : _utilsHTML42['default'].generateDefaultTemplate(options);

    return _utilsHTML42['default'].replaceWhitelistedAttributes(rawHTML);
  }
};
module.exports = exports['default'];