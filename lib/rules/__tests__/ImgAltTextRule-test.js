'use strict';

var _ImgAltTextRule = require('../ImgAltTextRule');

var _ImgAltTextRule2 = _interopRequireDefault(_ImgAltTextRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImgAltTextRule', function () {
  it('should raise on no alt text', function () {
    var result = (0, _ImgAltTextRule2.default)({});
    expect(result instanceof Error).toEqual(true);
  });

  it('should succeed on alt text', function () {
    var result = (0, _ImgAltTextRule2.default)({ alt: 'foo' });
    expect(result instanceof Error).toEqual(false);
  });
});