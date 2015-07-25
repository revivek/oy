import rule from '../SixCharacterHexBackgroundColorRule';


describe('SixCharacterHexBackgroundColorRule', function() {
  it('should validate', function() {
    const result1 = rule({}, 'bgColor');
    expect(result1 instanceof Error).toEqual(false);

    const result2 = rule({bgColor: '#fff'}, 'bgColor');
    expect(result2 instanceof Error).toEqual(true);

    const result3 = rule({bgColor: '#ffffff'}, 'bgColor');
    expect(result3 instanceof Error).toEqual(false);

    const result4 = rule({bgColor: '#goatm8'}, 'bgColor');
    expect(result4 instanceof Error).toEqual(true);

    const result5 = rule({bgColor: '{BACKGROUND_COLOR}'}, 'bgColor');
    expect(result5 instanceof Error).toEqual(true);

    const result6 = rule({bgColor: '#abc'}, 'bgColor');
    expect(result6 instanceof Error).toEqual(true);
  });
});
