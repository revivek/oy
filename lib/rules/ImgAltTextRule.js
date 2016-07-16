'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var description = 'Adding alt text to <img> is suggested for visually impaired readers, ' + 'and for cases where email clients block images. See: ' + 'https://litmus.com/blog/the-ultimate-guide-to-styled-alt-text-in-email';

exports.default = function (props) {
  if (!props.hasOwnProperty('alt')) {
    return new Error(description);
  } else if (!(typeof props.alt === 'string' && props.alt.length > 0)) {
    return new Error(description);
  }
};