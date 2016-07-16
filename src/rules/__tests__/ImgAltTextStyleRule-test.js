import rule from '../ImgAltTextStyleRule';


describe('ImgAltTextStyleRule', function() {
  it('should raise on style prop without font styling properties', function() {
    const result = rule({style: {background: 'red'}});
    expect(result instanceof Error).toEqual(true);
  });

  it('should succeed on style prop with fontFamily', function() {
    const result = rule({style: {fontFamily: 'Helvetica'}});
    expect(result instanceof Error).toEqual(false);
  });

  it('should succeed on style prop with fontSize', function() {
    const result = rule({style: {fontSize: '12px'}});
    expect(result instanceof Error).toEqual(false);
  });

  it('should succeed on style prop with color', function() {
    const result = rule({style: {color: '#123123'}});
    expect(result instanceof Error).toEqual(false);
  });

  it('should succeed on style prop with fontWeight', function() {
    const result = rule({style: {fontWeight: 'bold'}});
    expect(result instanceof Error).toEqual(false);
  });

  it('should succeed on style prop with fontStyle', function() {
    const result = rule({style: {fontStyle: 'italic'}});
    expect(result instanceof Error).toEqual(false);
  });
});
