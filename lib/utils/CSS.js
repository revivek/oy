'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cleanCss = require('clean-css');

var _cleanCss2 = _interopRequireDefault(_cleanCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // Validate against common CSS vulnerabilities.
  raiseOnUnsafeCSS: function raiseOnUnsafeCSS() {
    var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var foundInName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\'not provided\'';

    css = new _cleanCss2.default({
      shorthandCompacting: false
    }).minify(css).styles;
    if (css.match(/-moz-binding/i)) {
      throw new Error('Unsafe CSS found in ' + foundInName + ': "-moz-binding"');
    } else if (css.match(/expression/i)) {
      throw new Error('Unsafe CSS found in ' + foundInName + ': "expression"');
    }
    return css;
  }
};