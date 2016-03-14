'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HTML = require('./utils/HTML4');

var _HTML2 = _interopRequireDefault(_HTML);

var _Element = require('./components/Element');

var _Element2 = _interopRequireDefault(_Element);

var _DefaultElement = require('./components/DefaultElement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Element: _Element2.default,
  Table: _DefaultElement.Table,
  TBody: _DefaultElement.TBody,
  TD: _DefaultElement.TD,
  TR: _DefaultElement.TR,
  Img: _DefaultElement.Img,
  A: _DefaultElement.A,

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
    var rawHTML = generateCustomTemplate ? generateCustomTemplate(options) : _HTML2.default.generateDefaultTemplate(options);

    var html = _HTML2.default.replaceWhitelistedAttributes(rawHTML);
    var bytes = Buffer.byteLength(html, 'utf8');

    if (bytes > 1024 * 100) {
      console.warn('Email output is ' + Math.round(bytes / 1024) + 'KB. ' + 'It is recommended to keep the delivered HTML to smaller ' + 'than 100KB, to avoid getting emails cut off or rejected due to spam.');
    }

    return html;
  }
}; /**
    * Oy:
    * Exposes `renderTemplate` functionality, along with `Element`, and `PropTypes`.
    * A base template to build emails with.
    *
    * Based on guidelines here:
    * https://github.com/centralcollegenottingham/HTML-Email-Boilerplate-Redux/blob/master/htmlemail-boilerplate-stable-with-guidelines.html
    */