import assert from 'assert';

import SixCharacterHexBackgroundColorRule from '../SixCharacterHexBackgroundColorRule';


function shallowEqual(a, b) {
    const aProps = Object.keys(a);
    const bProps = Object.keys(b);
    let equal = true;

    if (aProps.length !== bProps.length) {
      return false;
    }

    aProps.forEach((aProp) => {
      if (a[aProp] !== b[aProp]) {
        equal = false;
      }
    });

    return equal;
}


describe('SixCharacterHexBackgroundColorRule', function() {
  it('should define necessary properties', function() {
    [
      'name',
      'description',
      'validate',
      'autocorrect'
    ].forEach((property) => {
      assert.equal(SixCharacterHexBackgroundColorRule.hasOwnProperty(property), true);
    });
  });

  it('should validate', function() {
    const result1 = SixCharacterHexBackgroundColorRule.validate({});
    assert.equal(result1, undefined);

    const result2 = SixCharacterHexBackgroundColorRule.validate({bgColor: '#fff'});
    assert.equal(result2, false);

    const result3 = SixCharacterHexBackgroundColorRule.validate({bgColor: '#ffffff'});
    assert.equal(result3, true);

    const result4 = SixCharacterHexBackgroundColorRule.validate({bgColor: '#goatm8'});
    assert.equal(result4, false);

    const result5 = SixCharacterHexBackgroundColorRule.validate({bgColor: '{BACKGROUND_COLOR}'});
    assert.equal(result5, false);

    const result6 = SixCharacterHexBackgroundColorRule.validate({bgColor: '#abc'});
    assert.equal(result6, false);
  });

  it('should autocorrect when possible', function() {
    const result1 = SixCharacterHexBackgroundColorRule.autocorrect({});
    assert.equal(shallowEqual(result1, {}), true);

    const result2 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '#fff'});
    assert.equal(shallowEqual(result2, {bgColor: '#ffffff'}), true);

    const result3 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '#ffffff'});
    assert.equal(shallowEqual(result3, {bgColor: '#ffffff'}), true);

    const result4 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '#goatm8'});
    assert.equal(shallowEqual(result4, {bgColor: '#goatm8'}), true);

    const result5 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '{BACKGROUND_COLOR}'});
    assert.equal(shallowEqual(result5, {bgColor: '{BACKGROUND_COLOR}'}), true);

    const result6 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '#abc'});
    assert.equal(shallowEqual(result6, {bgColor: '#aabbcc'}), true);
  });
});
