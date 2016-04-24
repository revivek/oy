import rule from '../HrefAbsoluteURLRule';


describe('HrefAbsoluteURLRule', function() {
  it('should validate', function() {
    const result1 = rule({});
    expect(result1 instanceof Error).toEqual(false);

    const result2 = rule({href: 'foo'});
    expect(result2 instanceof Error).toEqual(true);

    const result3 = rule({href: '.'});
    expect(result3 instanceof Error).toEqual(true);

    const result4 = rule({href: '/foo'});
    expect(result4 instanceof Error).toEqual(true);

    const result5 = rule({href: '{HOMEPAGE_URL}'});
    expect(result5 instanceof Error).toEqual(true);

    const result6 = rule({href: '../foo.jpg'});
    expect(result6 instanceof Error).toEqual(true);

    const result7 = rule({href: 'https://www.example.com'});
    expect(result7 instanceof Error).toEqual(false);

    const result8 = rule({href: 'http://www.example.com'});
    expect(result8 instanceof Error).toEqual(false);

    const result9 = rule({href: 'mailto:foo@example.com'});
    expect(result9 instanceof Error).toEqual(false);

    const result10 = rule({href: 'tel:555-555-5555'});
    expect(result10 instanceof Error).toEqual(false);
  });
});
