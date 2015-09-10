import rule from '../SrcAbsoluteURLRule';


describe('SrcAbsoluteURLRule', function() {
  it('should validate', function() {
    const result1 = rule({});
    expect(result1 instanceof Error).toEqual(false);

    const result2 = rule({src: 'foo'});
    expect(result2 instanceof Error).toEqual(true);

    const result3 = rule({src: '.'});
    expect(result3 instanceof Error).toEqual(true);

    const result4 = rule({src: '/foo'});
    expect(result4 instanceof Error).toEqual(true);

    const result5 = rule({src: '{HOMEPAGE_URL}'});
    expect(result5 instanceof Error).toEqual(true);

    const result6 = rule({src: '../foo.jpg'});
    expect(result6 instanceof Error).toEqual(true);

    const result7 = rule({src: 'https://www.example.com'});
    expect(result7 instanceof Error).toEqual(false);

    const result8 = rule({src: 'http://www.example.com'});
    expect(result8 instanceof Error).toEqual(false);
  });
});
