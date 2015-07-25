import React from 'react';

import Oy from '../Oy';


describe('Oy', function() {
  it('expose PropTypes, Element, and renderTemplate', function() {
    expect(Oy.PropTypes).toBeDefined();
    expect(Oy.PropTypes.rules).toBeDefined();
    expect(Oy.Element).toBeDefined();
    expect(Oy.renderTemplate).toBeDefined();
  });
});
