'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var description = 'Many email clients only support 6-character hex strings on the `bgcolor` attribute. See https://litmus.com/community/learning/21-background-colors-in-html-email';

exports.default = function (props) {
  if (props.hasOwnProperty('bgColor')) {
    if (!/(^#[0-9A-F]{6}$)/i.test(props['bgColor'])) {
      return new Error(description);
    }
  }
};