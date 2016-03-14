'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var description = 'Email clients may provide their own "cellPadding" styles, so it is good practice to specify this attribute on every table.';

exports.default = function (props) {
  if (!props.hasOwnProperty('cellPadding')) {
    return new Error(description);
  };
};