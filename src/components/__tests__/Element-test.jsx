import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Element from '../Element';


describe('Element', function() {
  let shallowRenderer;

  beforeEach(() => {
    shallowRenderer = ReactTestUtils.createRenderer();
  });

  it('should render Oy-whitelisted element', function() {
    const table = (
      <Element
        tagName="table"
        className="mytable"
        align="center"
        vAlign="top" />
    );
    shallowRenderer.render(table);
    const result = shallowRenderer.getRenderOutput();
    expect(result.props.className).toEqual('mytable');
    expect(result.props.type).toEqual(null);
    expect(result.props.align).toEqual(null);
    expect(result.props.vAlign).toEqual(null);
    expect(result.props['data-oy-align']).toEqual('center');
    expect(result.props['data-oy-valign']).toEqual('top');
  });
});
