import React from 'react';
import ReactDOMServer from 'react-dom/server';

import OyTD from '../OyTD';


describe('OyTD', function() {
  it('should render a <td> element with Oy-decorated attributes', function() {
    // align
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyTD align="center">Foo</OyTD>)
    ).toEqual('<td data-oy-align="center">Foo</td>');

    // valign
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyTD vAlign="center">Foo</OyTD>)
    ).toEqual('<td data-oy-valign="center">Foo</td>');

    // background
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyTD background="foo.jpeg">Foo</OyTD>)
    ).toEqual('<td data-oy-background="foo.jpeg">Foo</td>');

    // bgcolor
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyTD bgColor="#123456">Foo</OyTD>)
    ).toEqual('<td data-oy-bgcolor="#123456">Foo</td>');
  });
});
