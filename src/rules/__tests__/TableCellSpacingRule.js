import assert from 'assert';

import rule from '../TableCellSpacingRule';


describe('TableCellSpacingRule', function() {
  it('should validate', function() {
    const result1 = rule({}, 'cellSpacing');
    assert.equal(result1 instanceof Error, true);

    const result2 = rule({cellSpacing: '0'}, 'cellSpacing');
    assert.equal(result2 instanceof Error, false);

    const result3 = rule({border: '0', cellSpacing: '0'}, 'cellSpacing');
    assert.equal(result3 instanceof Error, false);
  });
});
