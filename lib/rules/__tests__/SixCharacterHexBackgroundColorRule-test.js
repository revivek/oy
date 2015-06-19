'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _SixCharacterHexBackgroundColorRule = require('../SixCharacterHexBackgroundColorRule');

var _SixCharacterHexBackgroundColorRule2 = _interopRequireDefault(_SixCharacterHexBackgroundColorRule);

describe('SixCharacterHexBackgroundColorRule', function () {
  it('should validate', function () {
    var result1 = (0, _SixCharacterHexBackgroundColorRule2['default'])({}, 'bgColor');
    _assert2['default'].equal(result1 instanceof Error, true);

    var result2 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '#fff' }, 'bgColor');
    _assert2['default'].equal(result2 instanceof Error, true);

    var result3 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '#ffffff' }, 'bgColor');
    _assert2['default'].equal(result3 instanceof Error, false);

    var result4 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '#goatm8' }, 'bgColor');
    _assert2['default'].equal(result4 instanceof Error, true);

    var result5 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '{BACKGROUND_COLOR}' }, 'bgColor');
    _assert2['default'].equal(result5 instanceof Error, true);

    var result6 = (0, _SixCharacterHexBackgroundColorRule2['default'])({ bgColor: '#abc' }, 'bgColor');
    _assert2['default'].equal(result6 instanceof Error, true);
  });
});