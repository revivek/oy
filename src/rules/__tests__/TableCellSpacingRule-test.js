import rule from '../TableCellSpacingRule';


describe('TableCellSpacingRule', function() {
  it('should validate', function() {
    const result1 = rule({});
    expect(result1 instanceof Error).toEqual(true);

    const result2 = rule({cellSpacing: '0'});
    expect(result2 instanceof Error).toEqual(false);

    const result3 = rule({border: '0', cellSpacing: '0'});
    expect(result3 instanceof Error).toEqual(false);
  });
});
