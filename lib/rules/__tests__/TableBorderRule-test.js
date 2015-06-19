'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _TableBorderRule = require('../TableBorderRule');

var _TableBorderRule2 = _interopRequireDefault(_TableBorderRule);

describe('TableBorderRule', function () {
  it('should validate', function () {
    var result1 = (0, _TableBorderRule2['default'])({}, 'border');
    _assert2['default'].equal(result1 instanceof Error, true);

    var result2 = (0, _TableBorderRule2['default'])({ border: '0' }, 'border');
    _assert2['default'].equal(result2 instanceof Error, false);

    var result3 = (0, _TableBorderRule2['default'])({ border: '0', cellPadding: '0' }, 'border');
    _assert2['default'].equal(result3 instanceof Error, false);
  });
});