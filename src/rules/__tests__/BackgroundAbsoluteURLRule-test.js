import rule from '../BackgroundAbsoluteURLRule';


describe('BackgroundAbsoluteURLRule', function() {
  it('should validate', function() {
    const result1 = rule({});
    expect(result1 instanceof Error).toEqual(false);

    const result2 = rule({background: 'foo'});
    expect(result2 instanceof Error).toEqual(true);

    const result3 = rule({background: '.'});
    expect(result3 instanceof Error).toEqual(true);

    const result4 = rule({background: '/foo'});
    expect(result4 instanceof Error).toEqual(true);

    const result5 = rule({background: '{HOMEPAGE_URL}'});
    expect(result5 instanceof Error).toEqual(true);

    const result6 = rule({background: '../foo.jpg'});
    expect(result6 instanceof Error).toEqual(true);

    const result7 = rule({background: 'https://www.example.com'});
    expect(result7 instanceof Error).toEqual(false);

    const result8 = rule({background: 'http://www.example.com'});
    expect(result8 instanceof Error).toEqual(false);
  });
});
