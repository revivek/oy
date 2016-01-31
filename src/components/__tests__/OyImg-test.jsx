import React from 'react';
import ReactDOMServer from 'react-dom/server';

import OyImg from '../OyImg';


describe('OyImg', function() {
  it('should render a <img> element with Oy-decorated attributes', function() {
    // border
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyImg border="5" />)
    ).toEqual('<img data-oy-border="5"/>');

    // align
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyImg align="center" />)
    ).toEqual('<img data-oy-align="center"/>');
  });
});
