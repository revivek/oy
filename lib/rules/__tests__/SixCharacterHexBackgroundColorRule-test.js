'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _SixCharacterHexBackgroundColorRule = require('../SixCharacterHexBackgroundColorRule');

var _SixCharacterHexBackgroundColorRule2 = _interopRequireDefault(_SixCharacterHexBackgroundColorRule);

describe('SixCharacterHexBackgroundColorRule', function () {
  it('should validate', function () {
    var result1 = (0, _SixCharacterHexBackgroundColorRule2['default'])({}, 'bgColor');
    expect(result1 instanceof Error).toEqual(false);

    var result2 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '#fff' }, 'bgColor');
    expect(result2 instanceof Error).toEqual(true);

    var result3 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '#ffffff' }, 'bgColor');
    expect(result3 instanceof Error).toEqual(false);

    var result4 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '#goatm8' }, 'bgColor');
    expect(result4 instanceof Error).toEqual(true);

    var result5 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '{BACKGROUND_COLOR}' }, 'bgColor');
    expect(result5 instanceof Error).toEqual(true);

    var result6 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '#abc' }, 'bgColor');
    expect(result6 instanceof Error).toEqual(true);
  });
});