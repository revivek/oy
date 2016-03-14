'use strict';

var _ShorthandFontRule = require('../ShorthandFontRule');

var _ShorthandFontRule2 = _interopRequireDefault(_ShorthandFontRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ShorthandFontRule', function () {
  it('should validate', function () {
    var result1 = (0, _ShorthandFontRule2.default)({});
    expect(result1 instanceof Error).toEqual(false);

    var result2 = (0, _ShorthandFontRule2.default)({ style: {} });
    expect(result2 instanceof Error).toEqual(false);

    var result3 = (0, _ShorthandFontRule2.default)({ style: { font: '14px Arial' } });
    expect(result3 instanceof Error).toEqual(true);
  });
});