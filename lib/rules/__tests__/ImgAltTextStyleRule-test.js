'use strict';

var _ImgAltTextStyleRule = require('../ImgAltTextStyleRule');

var _ImgAltTextStyleRule2 = _interopRequireDefault(_ImgAltTextStyleRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ImgAltTextStyleRule', function () {
  it('should raise on style prop without font styling properties', function () {
    var result = (0, _ImgAltTextStyleRule2.default)({ style: { background: 'red' } });
    expect(result instanceof Error).toEqual(true);
  });

  it('should succeed on style prop with fontFamily', function () {
    var result = (0, _ImgAltTextStyleRule2.default)({ style: { fontFamily: 'Helvetica' } });
    expect(result instanceof Error).toEqual(false);
  });

  it('should succeed on style prop with fontSize', function () {
    var result = (0, _ImgAltTextStyleRule2.default)({ style: { fontSize: '12px' } });
    expect(result instanceof Error).toEqual(false);
  });

  it('should succeed on style prop with color', function () {
    var result = (0, _ImgAltTextStyleRule2.default)({ style: { color: '#123123' } });
    expect(result instanceof Error).toEqual(false);
  });

  it('should succeed on style prop with fontWeight', function () {
    var result = (0, _ImgAltTextStyleRule2.default)({ style: { fontWeight: 'bold' } });
    expect(result instanceof Error).toEqual(false);
  });

  it('should succeed on style prop with fontStyle', function () {
    var result = (0, _ImgAltTextStyleRule2.default)({ style: { fontStyle: 'italic' } });
    expect(result instanceof Error).toEqual(false);
  });
});