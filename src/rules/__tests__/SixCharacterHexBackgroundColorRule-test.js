import rule from '../SixCharacterHexBackgroundColorRule';


describe('SixCharacterHexBackgroundColorRule', function() {
  it('should validate', function() {
    const result1 = rule({});
    expect(result1 instanceof Error).toEqual(false);

    const result2 = rule({bgColor: '#fff'});
    expect(result2 instanceof Error).toEqual(true);

    const result3 = rule({bgColor: '#ffffff'});
    expect(result3 instanceof Error).toEqual(false);

    const result4 = rule({bgColor: '#goatm8'});
    expect(result4 instanceof Error).toEqual(true);

    const result5 = rule({bgColor: '{BACKGROUND_COLOR}'});
    expect(result5 instanceof Error).toEqual(true);

    const result6 = rule({bgColor: '#abc'});
    expect(result6 instanceof Error).toEqual(true);
  });
});
