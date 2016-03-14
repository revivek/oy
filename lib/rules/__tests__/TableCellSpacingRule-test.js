'use strict';

var _TableCellSpacingRule = require('../TableCellSpacingRule');

var _TableCellSpacingRule2 = _interopRequireDefault(_TableCellSpacingRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TableCellSpacingRule', function () {
  it('should validate', function () {
    var result1 = (0, _TableCellSpacingRule2.default)({});
    expect(result1 instanceof Error).toEqual(true);

    var result2 = (0, _TableCellSpacingRule2.default)({ cellSpacing: '0' });
    expect(result2 instanceof Error).toEqual(false);

    var result3 = (0, _TableCellSpacingRule2.default)({ border: '0', cellSpacing: '0' });
    expect(result3 instanceof Error).toEqual(false);
  });
});