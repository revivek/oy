'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var description = 'Many email clients block images by default, ' + 'so styling <img> alt text is suggested. See: ' + 'https://litmus.com/blog/the-ultimate-guide-to-styled-alt-text-in-email';

exports.default = function (props) {
  if (!props.hasOwnProperty('style')) {
    return new Error(description);
  } else if (!(props.style.hasOwnProperty('fontFamily') || props.style.hasOwnProperty('fontSize') || props.style.hasOwnProperty('fontWeight') || props.style.hasOwnProperty('color') || props.style.hasOwnProperty('fontStyle'))) {
    return new Error(description);
  }
};