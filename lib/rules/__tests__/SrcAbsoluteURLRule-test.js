'use strict';

var _SrcAbsoluteURLRule = require('../SrcAbsoluteURLRule');

var _SrcAbsoluteURLRule2 = _interopRequireDefault(_SrcAbsoluteURLRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SrcAbsoluteURLRule', function () {
  it('should validate', function () {
    var result1 = (0, _SrcAbsoluteURLRule2.default)({});
    expect(result1 instanceof Error).toEqual(false);

    var result2 = (0, _SrcAbsoluteURLRule2.default)({ src: 'foo' });
    expect(result2 instanceof Error).toEqual(true);

    var result3 = (0, _SrcAbsoluteURLRule2.default)({ src: '.' });
    expect(result3 instanceof Error).toEqual(true);

    var result4 = (0, _SrcAbsoluteURLRule2.default)({ src: '/foo' });
    expect(result4 instanceof Error).toEqual(true);

    var result5 = (0, _SrcAbsoluteURLRule2.default)({ src: '{HOMEPAGE_URL}' });
    expect(result5 instanceof Error).toEqual(true);

    var result6 = (0, _SrcAbsoluteURLRule2.default)({ src: '../foo.jpg' });
    expect(result6 instanceof Error).toEqual(true);

    var result7 = (0, _SrcAbsoluteURLRule2.default)({ src: 'https://www.example.com' });
    expect(result7 instanceof Error).toEqual(false);

    var result8 = (0, _SrcAbsoluteURLRule2.default)({ src: 'http://www.example.com' });
    expect(result8 instanceof Error).toEqual(false);
  });
});