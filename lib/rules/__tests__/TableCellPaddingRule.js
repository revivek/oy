'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _TableCellPaddingRule = require('../TableCellPaddingRule');

var _TableCellPaddingRule2 = _interopRequireDefault(_TableCellPaddingRule);

describe('TableBorderRule', function () {
  it('should validate', function () {
    var result1 = (0, _TableCellPaddingRule2['default'])({}, 'cellPadding');
    _assert2['default'].equal(result1 instanceof Error, true);

    var result2 = (0, _TableCellPaddingRule2['default'])({ cellPadding: '0' }, 'cellPadding');
    _assert2['default'].equal(result2 instanceof Error, false);

    var result3 = (0, _TableCellPaddingRule2['default'])({ border: '0', cellPadding: '0' }, 'cellPadding');
    _assert2['default'].equal(result3 instanceof Error, false);
  });
});