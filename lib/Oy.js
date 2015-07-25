/**
 * Oy:
 * Exposes `renderTemplate` functionality, along with `Mixin` and `rule`.
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

  renderTemplate: function renderTemplate(options) {
    ['title', 'bodyContent', 'previewText'].forEach(function (option) {
      if (!options[option]) {
        throw new Error('\'' + option + '\' is a required option in the object used in \'renderTemplate\'');
      }
    });

    var title = options.title;
    var bodyContent = options.bodyContent;
    var previewText = options.previewText;
    var headCSS = options.headCSS || '';

    var rawHTML = '\n      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n        <head>\n          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n          <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n          <meta name="viewport" content="width=device-width"/>\n\n          <title>' + title + '</title>\n\n          <style type="text/css">\n            ' + headCSS + '\n\n            #__bodyTable__ {\n              margin: 0;\n              padding: 0;\n              width: 100% !important;\n            }\n          </style>\n\n          <!--[if gte mso 9]>\n            <xml>\n              <o:OfficeDocumentSettings>\n                <o:AllowPNG/>\n                <o:PixelsPerInch>96</o:PixelsPerInch>\n              </o:OfficeDocumentSettings>\n            </xml>\n          <![endif]-->\n        </head>\n        <body bgcolor="#FFFFFF" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:#FFFFFF;-webkit-text-size-adjust:none; margin:0; padding:0; min-width:100%">\n          <table bgcolor="#FFFFFF" id="__bodyTable__" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:#FFFFFF;-webkit-text-size-adjust:none; margin:0; padding:0; min-width:100%">\n            <tr>\n              <td align="center">\n                <span style="display: none !important; color: #FFFFFF; margin:0; padding:0; font-size:1px; line-height:1px;">' + previewText + '</span>\n                ' + bodyContent + '\n              </td>\n            </tr>\n          </table>\n        </body>\n      </html>\n    ';

    return _utilsHTML42['default'].replaceWhitelistedAttributes(rawHTML);
  }
};
module.exports = exports['default'];