import rule from '../TableCellPaddingRule';


describe('TableBorderRule', function() {
  it('should validate', function() {
    const result1 = rule({});
    expect(result1 instanceof Error).toEqual(true);

    const result2 = rule({cellPadding: '0'});
    expect(result2 instanceof Error).toEqual(false);

    const result3 = rule({border: '0', cellPadding: '0'});
    expect(result3 instanceof Error).toEqual(false);
  });
});
