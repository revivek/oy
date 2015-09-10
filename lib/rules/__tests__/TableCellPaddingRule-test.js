'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _TableCellPaddingRule = require('../TableCellPaddingRule');

var _TableCellPaddingRule2 = _interopRequireDefault(_TableCellPaddingRule);

describe('TableBorderRule', function () {
  it('should validate', function () {
    var result1 = (0, _TableCellPaddingRule2['default'])({});
    expect(result1 instanceof Error).toEqual(true);

    var result2 = (0, _TableCellPaddingRule2['default'])({ cellPadding: '0' });
    expect(result2 instanceof Error).toEqual(false);

    var result3 = (0, _TableCellPaddingRule2['default'])({ border: '0', cellPadding: '0' });
    expect(result3 instanceof Error).toEqual(false);
  });
});