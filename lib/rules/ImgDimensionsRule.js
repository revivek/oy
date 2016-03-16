'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var description = 'Always include the `height` and `width` attributes of your <img> as integers. See https://www.campaignmonitor.com/resources/will-it-work/guidelines/';

function isInteger(value) {
  return Number.isInteger ? Number.isInteger(value) : typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

exports.default = function (props) {
  if (!props.hasOwnProperty('height') || !props.hasOwnProperty('width')) {
    return new Error(description);
  } else if (!isInteger(props.height) || !isInteger(props.width)) {
    /** props has both height and width properties. */
    return new Error(description);
  }
};