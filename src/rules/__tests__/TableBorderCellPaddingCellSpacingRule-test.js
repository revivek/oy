import assert from 'assert';

import TableBorderCellPaddingCellSpacingRule from '../TableBorderCellPaddingCellSpacingRule';


function shallowEqual(a, b) {
    const aProps = Object.keys(a);
    const bProps = Object.keys(b);
    let equal = true;

    if (aProps.length !== bProps.length) {
      return false;
    }

    aProps.forEach((aProp) => {
      if (a[aProp] !== b[aProp]) {
        equal = false;
      }
    });

    return equal;
}


describe('TableBorderCellPaddingCellSpacingRule', function() {
  it('should define necessary properties', function() {
    [
      'name',
      'description',
      'validate',
      'autocorrect'
    ].forEach((property) => {
      assert.equal(TableBorderCellPaddingCellSpacingRule.hasOwnProperty(property), true);
    });
  });

  it('should validate', function() {
    const result1 = TableBorderCellPaddingCellSpacingRule.validate({});
    assert.equal(result1, false);

    const result2 = TableBorderCellPaddingCellSpacingRule.validate({border: '0'});
    assert.equal(result2, false);

    const result3 = TableBorderCellPaddingCellSpacingRule.validate({border: '0', cellPadding: '0'});
    assert.equal(result3, false);

    const result4 = TableBorderCellPaddingCellSpacingRule.validate({border: '0', cellPadding: '0', cellSpacing: '0'});
    assert.equal(result4, true);

    const result5 = TableBorderCellPaddingCellSpacingRule.validate({border: '0', cellPadding: '0', cellSpacing: '0', foo: ''});
    assert.equal(result5, true);

    const result6 = TableBorderCellPaddingCellSpacingRule.validate({border: '0', cellPadding: '10', cellSpacing: '0', foo: ''});
    assert.equal(result6, true);
  });

  it('should autocorrect when possible', function() {
    const result1 = TableBorderCellPaddingCellSpacingRule.autocorrect({});
    assert.equal(shallowEqual(result1, {border: '0', cellPadding: '0', cellSpacing: '0'}), true);

    const result2 = TableBorderCellPaddingCellSpacingRule.autocorrect({bgColor: '#ffffff'});
    assert.equal(shallowEqual(result2, {border: '0', cellPadding: '0', cellSpacing: '0', bgColor: '#ffffff'}), true);

    const result3 = TableBorderCellPaddingCellSpacingRule.autocorrect({cellSpacing: '20'});
    assert.equal(shallowEqual(result3, {border: '0', cellPadding: '0', cellSpacing: '20'}), true);

    const result4 = TableBorderCellPaddingCellSpacingRule.autocorrect({border: '10', cellPadding: '20', cellSpacing: '30'});
    assert.equal(shallowEqual(result4, {border: '10', cellPadding: '20', cellSpacing: '30'}), true);
  });
});
