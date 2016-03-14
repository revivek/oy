'use strict';

var _TableBorderRule = require('../TableBorderRule');

var _TableBorderRule2 = _interopRequireDefault(_TableBorderRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TableBorderRule', function () {
  it('should validate', function () {
    var result1 = (0, _TableBorderRule2.default)({});
    expect(result1 instanceof Error).toEqual(true);

    var result2 = (0, _TableBorderRule2.default)({ border: '0' });
    expect(result2 instanceof Error).toEqual(false);

    var result3 = (0, _TableBorderRule2.default)({ border: '0', cellPadding: '0' });
    expect(result3 instanceof Error).toEqual(false);
  });
});