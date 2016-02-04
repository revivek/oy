import rule from '../EmptyTDRule';


describe('EmptyTDRule', function() {
  it('should ignore non-empty children', function() {
    const result = rule({children: 'a'});
    expect(result instanceof Error).toEqual(false);
  });

  it('should ignore children that are Objects', function() {
    const result = rule({children: {}});
    expect(result instanceof Error).toEqual(false);
  });

  it('should ignore non-empty dangerouslySetInnerHTML', function() {
    const result = rule({dangerouslySetInnerHTML: {__html: 'a'}});
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error if lineHeight and fontSize are not defined', function() {
    const result = rule({children: undefined});
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error, given lineHeight and fontSize', function() {
    const result = rule({
      children: undefined,
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error for whitespace children', function() {
    const result = rule({
      children: ' '
    });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error for whitespace children, given lineHeight and fontSize', function() {
    const result = rule({
      children: ' ',
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error for &nbsp; children', function() {
    const result = rule({
      children: ' &nbsp;'
    });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error for &nbsp; children, given lineHeight and fontSize', function() {
    const result = rule({
      children: ' &nbsp;',
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error for children array with empty elements', function() {
    const result = rule({
      children: [' &nbsp;', ' ']
    });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error for children array with empty elements, given lineHeight and fontSize', function() {
    const result = rule({
      children: [' &nbsp;', ' '],
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });

  it('should return error for dangerouslySetInnerHTML with empty entity', function() {
    const result = rule({
      dangerouslySetInnerHTML: {__html: '&nbsp;'}
    });
    expect(result instanceof Error).toEqual(true);
  });

  it('should not return error for dangerouslySetInnerHTML with empty entity, given lineHeight and fontSize', function() {
    const result = rule({
      dangerouslySetInnerHTML: {__html: '&nbsp;'},
      style: {
        fontSize: '1px',
        lineHeight: '1px'
      }
    });
    expect(result instanceof Error).toEqual(false);
  });
});
