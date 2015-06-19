import assert from 'assert';

import rule from '../TableBorderRule';


describe('TableBorderRule', function() {
  it('should validate', function() {
    const result1 = rule({}, 'border');
    assert.equal(result1 instanceof Error, true);

    const result2 = rule({border: '0'}, 'border');
    assert.equal(result2 instanceof Error, false);

    const result3 = rule({border: '0', cellPadding: '0'}, 'border');
    assert.equal(result3 instanceof Error, false);
  });
});
