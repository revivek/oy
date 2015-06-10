// TODO: Fix "React is undefined error" when importing React.

import assert from 'assert';

import CenterTDWrappingCenteredTableRule from '../CenterTDWrappingCenteredTableRule';


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


describe('CenterTDWrappingCenteredTableRule', function() {
  it('should define necessary properties', function() {
    [
      'name',
      'description',
      'validate',
      'autocorrect'
    ].forEach((property) => {
      assert.equal(CenterTDWrappingCenteredTableRule.hasOwnProperty(property), true);
    });
  });

  it('should validate', function() {
    //const result1 = CenterTDWrappingCenteredTableRule.validate({});
    //assert.equal(result1, undefined);

    //const One = React.createClass({
    //  render: () => <table align="center"><tr><td></td></tr></table>
    //});

    //const Two = React.createClass({
    //  render: () => <table><tr><td></td></tr></table>
    //});

    //const children = [One, Two];
    //const result2 = CenterTDWrappingCenteredTableRule.validate({children: children});
    //assert.equal(result2, undefined);
  });

  it('should autocorrect when possible', function() {
    //const result1 = SixCharacterHexBackgroundColorRule.autocorrect({});
    //assert.equal(shallowEqual(result1, {}), true);

    //const result2 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '#fff'});
    //assert.equal(shallowEqual(result2, {bgColor: '#ffffff'}), true);

    //const result3 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '#ffffff'});
    //assert.equal(shallowEqual(result3, {bgColor: '#ffffff'}), true);

    //const result4 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '#goatm8'});
    //assert.equal(shallowEqual(result4, {bgColor: '#goatm8'}), true);

    //const result5 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '{BACKGROUND_COLOR}'});
    //assert.equal(shallowEqual(result5, {bgColor: '{BACKGROUND_COLOR}'}), true);

    //const result6 = SixCharacterHexBackgroundColorRule.autocorrect({bgColor: '#abc'});
    //assert.equal(shallowEqual(result6, {bgColor: '#aabbcc'}), true);
  });
});
