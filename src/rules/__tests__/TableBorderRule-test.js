import rule from '../TableBorderRule';


describe('TableBorderRule', function() {
  it('should validate', function() {
    const result1 = rule({}, 'border');
    expect(result1 instanceof Error).toEqual(true);

    const result2 = rule({border: '0'}, 'border');
    expect(result2 instanceof Error).toEqual(false);

    const result3 = rule({border: '0', cellPadding: '0'}, 'border');
    expect(result3 instanceof Error).toEqual(false);
  });
});
