'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _SixCharacterHexBackgroundColorRule = require('../SixCharacterHexBackgroundColorRule');

var _SixCharacterHexBackgroundColorRule2 = _interopRequireDefault(_SixCharacterHexBackgroundColorRule);

function shallowEqual(a, b) {
  var aProps = Object.keys(a);
  var bProps = Object.keys(b);
  var equal = true;

  if (aProps.length !== bProps.length) {
    return false;
  }

  aProps.forEach(function (aProp) {
    if (a[aProp] !== b[aProp]) {
      equal = false;
    }
  });

  return equal;
}

describe('SixCharacterHexBackgroundColorRule', function () {
  it('should define necessary properties', function () {
    ['name', 'description', 'validate', 'autocorrect'].forEach(function (property) {
      _assert2['default'].equal(_SixCharacterHexBackgroundColorRule2['default'].hasOwnProperty(property), true);
    });
  });

  it('should validate', function () {
    var result1 = _SixCharacterHexBackgroundColorRule2['default'].validate({});
    _assert2['default'].equal(result1, undefined);

    var result2 = _SixCharacterHexBackgroundColorRule2['default'].validate({ bgColor: '#fff' });
    _assert2['default'].equal(result2, false);

    var result3 = _SixCharacterHexBackgroundColorRule2['default'].validate({ bgColor: '#ffffff' });
    _assert2['default'].equal(result3, true);

    var result4 = _SixCharacterHexBackgroundColorRule2['default'].validate({ bgColor: '#goatm8' });
    _assert2['default'].equal(result4, false);

    var result5 = _SixCharacterHexBackgroundColorRule2['default'].validate({ bgColor: '{BACKGROUND_COLOR}' });
    _assert2['default'].equal(result5, false);

    var result6 = _SixCharacterHexBackgroundColorRule2['default'].validate({ bgColor: '#abc' });
    _assert2['default'].equal(result6, false);
  });

  it('should autocorrect when possible', function () {
    var result1 = _SixCharacterHexBackgroundColorRule2['default'].autocorrect({});
    _assert2['default'].equal(shallowEqual(result1, {}), true);

    var result2 = _SixCharacterHexBackgroundColorRule2['default'].autocorrect({ bgColor: '#fff' });
    _assert2['default'].equal(shallowEqual(result2, { bgColor: '#ffffff' }), true);

    var result3 = _SixCharacterHexBackgroundColorRule2['default'].autocorrect({ bgColor: '#ffffff' });
    _assert2['default'].equal(shallowEqual(result3, { bgColor: '#ffffff' }), true);

    var result4 = _SixCharacterHexBackgroundColorRule2['default'].autocorrect({ bgColor: '#goatm8' });
    _assert2['default'].equal(shallowEqual(result4, { bgColor: '#goatm8' }), true);

    var result5 = _SixCharacterHexBackgroundColorRule2['default'].autocorrect({ bgColor: '{BACKGROUND_COLOR}' });
    _assert2['default'].equal(shallowEqual(result5, { bgColor: '{BACKGROUND_COLOR}' }), true);

    var result6 = _SixCharacterHexBackgroundColorRule2['default'].autocorrect({ bgColor: '#abc' });
    _assert2['default'].equal(shallowEqual(result6, { bgColor: '#aabbcc' }), true);
  });
});