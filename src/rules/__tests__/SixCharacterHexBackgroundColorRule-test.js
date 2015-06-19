import assert from 'assert';

import rule from '../SixCharacterHexBackgroundColorRule';


describe('SixCharacterHexBackgroundColorRule', function() {
  it('should validate', function() {
    const result1 = rule({}, 'bgColor');
    assert.equal(result1 instanceof Error, false);

    const result2 = rule({bgColor: '#fff'}, 'bgColor');
    assert.equal(result2 instanceof Error, true);

    const result3 = rule({bgColor: '#ffffff'}, 'bgColor');
    assert.equal(result3 instanceof Error, false);

    const result4 = rule({bgColor: '#goatm8'}, 'bgColor');
    assert.equal(result4 instanceof Error, true);

    const result5 = rule({bgColor: '{BACKGROUND_COLOR}'}, 'bgColor');
    assert.equal(result5 instanceof Error, true);

    const result6 = rule({bgColor: '#abc'}, 'bgColor');
    assert.equal(result6 instanceof Error, true);
  });
});
