import rule from '../ShorthandFontRule';


describe('ShorthandFontRule', function() {
  it('should validate', function() {
    const result1 = rule({});
    expect(result1 instanceof Error).toEqual(false);

    const result2 = rule({style: {}});
    expect(result2 instanceof Error).toEqual(false);

    const result3 = rule({style: {font: '14px Arial'}});
    expect(result3 instanceof Error).toEqual(true);
  });
});
