import rule from '../ImgAltTextRule';


describe('ImgAltTextRule', function() {
  it('should raise on no alt text', function() {
    const result = rule({});
    expect(result instanceof Error).toEqual(true);
  });

  it('should succeed on alt text', function() {
    const result = rule({alt: 'foo'});
    expect(result instanceof Error).toEqual(false);
  });
});
