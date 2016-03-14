'use strict';

var _ImgDimensionsRule = require('../ImgDimensionsRule');

var _ImgDimensionsRule2 = _interopRequireDefault(_ImgDimensionsRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImgDimensionsRule', function () {
  it('should validate', function () {
    var result1 = (0, _ImgDimensionsRule2.default)({});
    expect(result1 instanceof Error).toEqual(true);

    var result2 = (0, _ImgDimensionsRule2.default)({ height: 12 });
    expect(result2 instanceof Error).toEqual(true);

    var result3 = (0, _ImgDimensionsRule2.default)({ height: '12' });
    expect(result3 instanceof Error).toEqual(true);

    var result4 = (0, _ImgDimensionsRule2.default)({ height: 0.3, width: 12.1 });
    expect(result4 instanceof Error).toEqual(true);

    var result5 = (0, _ImgDimensionsRule2.default)({ height: 100, width: 128 });
    expect(result5 instanceof Error).toEqual(false);

    var result6 = (0, _ImgDimensionsRule2.default)({ height: '10', width: 15 });
    expect(result6 instanceof Error).toEqual(true);
  });
});