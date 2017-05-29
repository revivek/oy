'use strict';

var _CSS = require('../CSS');

var _CSS2 = _interopRequireDefault(_CSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CSS', function () {
  it('should throw on unsafe css', function () {
    var shouldThrowBecauseOfMozBinding = function shouldThrowBecauseOfMozBinding() {
      _CSS2.default.raiseOnUnsafeCSS('body{-moz-binding: url("http://www.website.com/xss.xml#test")}');
    };
    var shouldThrowBecauseOfExpression = function shouldThrowBecauseOfExpression() {
      _CSS2.default.raiseOnUnsafeCSS('body{xss:expr/*XSS*/ession(alert("XSS"))}');
    };

    expect(shouldThrowBecauseOfMozBinding).toThrow();
    expect(shouldThrowBecauseOfExpression).toThrow();
  });
});