'use strict';

var _BackgroundAbsoluteURLRule = require('../BackgroundAbsoluteURLRule');

var _BackgroundAbsoluteURLRule2 = _interopRequireDefault(_BackgroundAbsoluteURLRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BackgroundAbsoluteURLRule', function () {
  it('should validate', function () {
    var result1 = (0, _BackgroundAbsoluteURLRule2.default)({});
    expect(result1 instanceof Error).toEqual(false);

    var result2 = (0, _BackgroundAbsoluteURLRule2.default)({ background: 'foo' });
    expect(result2 instanceof Error).toEqual(true);

    var result3 = (0, _BackgroundAbsoluteURLRule2.default)({ background: '.' });
    expect(result3 instanceof Error).toEqual(true);

    var result4 = (0, _BackgroundAbsoluteURLRule2.default)({ background: '/foo' });
    expect(result4 instanceof Error).toEqual(true);

    var result5 = (0, _BackgroundAbsoluteURLRule2.default)({ background: '{HOMEPAGE_URL}' });
    expect(result5 instanceof Error).toEqual(true);

    var result6 = (0, _BackgroundAbsoluteURLRule2.default)({ background: '../foo.jpg' });
    expect(result6 instanceof Error).toEqual(true);

    var result7 = (0, _BackgroundAbsoluteURLRule2.default)({ background: 'https://www.example.com' });
    expect(result7 instanceof Error).toEqual(false);

    var result8 = (0, _BackgroundAbsoluteURLRule2.default)({ background: 'http://www.example.com' });
    expect(result8 instanceof Error).toEqual(false);
  });
});