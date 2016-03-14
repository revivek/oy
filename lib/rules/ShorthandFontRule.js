'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var description = 'A number of email clients reject CSS shorthand for the font property. ' + 'See https://www.campaignmonitor.com/dev-resources/will-it-work/guidelines/';

exports.default = function (props) {
  if (props.hasOwnProperty('style')) {
    if (props.style.hasOwnProperty('font')) {
      return new Error(description);
    }
  };
};