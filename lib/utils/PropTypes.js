'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isString = function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

exports.default = {
  rules: function rules(ruleNames) {
    return function (props, propName, componentName) {
      return ruleNames.map(function (ruleName) {
        if (isString(ruleName)) {
          return require('../rules/' + ruleName)(props, propName, componentName);
        } else {
          return ruleName;
        }
      }).filter(function (error) {
        return error instanceof Error;
      })[0];
    };
  }
};