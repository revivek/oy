import assert from 'assert';
import React from 'react';

import Oy from '../Oy';


describe('Oy', function() {
  it('expose Mixin, which implements certain methods', function() {
    assert.notEqual(Oy.Mixin, undefined);
    assert.notEqual(Oy.rule, undefined);
    assert.notEqual(Oy.renderTemplate, undefined);
  });
});
