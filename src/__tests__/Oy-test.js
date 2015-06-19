import assert from 'assert';
import React from 'react';

import Oy from '../Oy';


describe('Oy', function() {
  it('expose Mixin, which implements certain methods', function() {
    assert.notEqual(Oy.PropTypes, undefined);
    assert.notEqual(Oy.PropTypes.rules, undefined);
    assert.notEqual(Oy.Element, undefined);
    assert.notEqual(Oy.renderTemplate, undefined);
  });
});
