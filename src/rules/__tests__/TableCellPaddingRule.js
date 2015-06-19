import assert from 'assert';

import rule from '../TableCellPaddingRule';


describe('TableBorderRule', function() {
  it('should validate', function() {
    const result1 = rule({}, 'cellPadding');
    assert.equal(result1 instanceof Error, true);

    const result2 = rule({cellPadding: '0'}, 'cellPadding');
    assert.equal(result2 instanceof Error, false);

    const result3 = rule({border: '0', cellPadding: '0'}, 'cellPadding');
    assert.equal(result3 instanceof Error, false);
  });
});
