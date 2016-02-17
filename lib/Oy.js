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

var _componentsElement = require('./components/Element');

var _componentsElement2 = _interopRequireDefault(_componentsElement);

var _componentsDefaultElement = require('./components/DefaultElement');

exports['default'] = {
  Element: _componentsElement2['default'],
  Table: _componentsDefaultElement.Table,
  TBody: _componentsDefaultElement.TBody,
  TD: _componentsDefaultElement.TD,
  TR: _componentsDefaultElement.TR,
  Img: _componentsDefaultElement.Img,
  A: _componentsDefaultElement.A,

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

    var html = _utilsHTML42['default'].replaceWhitelistedAttributes(rawHTML);
    var bytes = Buffer.byteLength(html, 'utf8');

    if (bytes > 1024 * 100) {
      console.warn('Email output is ' + Math.round(bytes / 1024) + 'KB. ' + 'It is recommended to keep the delivered HTML to smaller ' + 'than 100KB, to avoid getting emails cut off or rejected due to spam.');
    }

    return html;
  }
};
module.exports = exports['default'];