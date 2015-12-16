import rule from '../ImgDimensionsRule';


describe('ImgDimensionsRule', function() {
  it('should validate', function() {
    const result1 = rule({});
    expect(result1 instanceof Error).toEqual(true);

    const result2 = rule({height: 12});
    expect(result2 instanceof Error).toEqual(true);

    const result3 = rule({height: '12'});
    expect(result3 instanceof Error).toEqual(true);

    const result4 = rule({height: 0.3, width: 12.1});
    expect(result4 instanceof Error).toEqual(true);

    const result5 = rule({height: 100, width: 128});
    expect(result5 instanceof Error).toEqual(false);

    const result6 = rule({height: '10', width: 15});
    expect(result6 instanceof Error).toEqual(true);
  });
});
