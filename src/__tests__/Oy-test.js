import assert from 'assert';
import React from 'react';

import Oy from '../Oy';


describe('Oy', function() {
  it('expose PropTypes, Element, and renderTemplate', function() {
    assert.notEqual(Oy.PropTypes, undefined);
    assert.notEqual(Oy.PropTypes.rules, undefined);
    assert.notEqual(Oy.Element, undefined);
    assert.notEqual(Oy.renderTemplate, undefined);
  });
});
