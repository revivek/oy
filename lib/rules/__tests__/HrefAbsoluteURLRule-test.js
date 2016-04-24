'use strict';

var _HrefAbsoluteURLRule = require('../HrefAbsoluteURLRule');

var _HrefAbsoluteURLRule2 = _interopRequireDefault(_HrefAbsoluteURLRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('HrefAbsoluteURLRule', function () {
  it('should validate', function () {
    var result1 = (0, _HrefAbsoluteURLRule2.default)({});
    expect(result1 instanceof Error).toEqual(false);

    var result2 = (0, _HrefAbsoluteURLRule2.default)({ href: 'foo' });
    expect(result2 instanceof Error).toEqual(true);

    var result3 = (0, _HrefAbsoluteURLRule2.default)({ href: '.' });
    expect(result3 instanceof Error).toEqual(true);

    var result4 = (0, _HrefAbsoluteURLRule2.default)({ href: '/foo' });
    expect(result4 instanceof Error).toEqual(true);

    var result5 = (0, _HrefAbsoluteURLRule2.default)({ href: '{HOMEPAGE_URL}' });
    expect(result5 instanceof Error).toEqual(true);

    var result6 = (0, _HrefAbsoluteURLRule2.default)({ href: '../foo.jpg' });
    expect(result6 instanceof Error).toEqual(true);

    var result7 = (0, _HrefAbsoluteURLRule2.default)({ href: 'https://www.example.com' });
    expect(result7 instanceof Error).toEqual(false);

    var result8 = (0, _HrefAbsoluteURLRule2.default)({ href: 'http://www.example.com' });
    expect(result8 instanceof Error).toEqual(false);

    var result9 = (0, _HrefAbsoluteURLRule2.default)({ href: 'mailto:foo@example.com' });
    expect(result9 instanceof Error).toEqual(false);

    var result10 = (0, _HrefAbsoluteURLRule2.default)({ href: 'tel:555-555-5555' });
    expect(result10 instanceof Error).toEqual(false);
  });
});