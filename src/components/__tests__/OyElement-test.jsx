import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import OyElement from '../OyElement';


describe('OyElement', function() {
  let shallowRenderer;

  beforeEach(() => {
    shallowRenderer = ReactTestUtils.createRenderer();
  });

  it('should render Oy-whitelisted element', function() {
    shallowRenderer.render(<OyElement type="table" className="mytable" />);
    const result = shallowRenderer.getRenderOutput();
    expect(result.type.displayName).toEqual('OyTable');
    expect(result.props.className).toEqual('mytable');
  });

  it('should render the right React element if not in Oy whitelist', function() {
    shallowRenderer.render(<OyElement type="a" className="myanchor" />);
    const result = shallowRenderer.getRenderOutput();
    expect(result.type).toEqual('a');
    expect(result.props.className).toEqual('myanchor');
  });

  it('should remove the `type` attribute from the rendered child element', function() {
    shallowRenderer.render(<OyElement type="a" className="myanchor" />);
    const result = shallowRenderer.getRenderOutput();
    expect(result.type).toEqual('a');
    expect(result.props.className).toEqual('myanchor');
    expect(result.props.type).toEqual(null);
  });

  it('should remove the `type` attribute from the Oy rendered child element', function() {
    shallowRenderer.render(<OyElement type="table" className="mytable" />);
    const result = shallowRenderer.getRenderOutput();
    expect(result.type.displayName).toEqual('OyTable');
    expect(result.props.className).toEqual('mytable');
    expect(result.props.type).toEqual(null);
  });
});
