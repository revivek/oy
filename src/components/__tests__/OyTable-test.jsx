import React from 'react';
import ReactDOMServer from 'react-dom/server';

import OyTable from '../OyTable';


describe('OyTable', function() {
  it('should render a <table> element with Oy-decorated attributes', function() {
    // align
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyTable align="center">Foo</OyTable>)
    ).toEqual('<table data-oy-align="center">Foo</table>');

    // valign
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyTable vAlign="center">Foo</OyTable>)
    ).toEqual('<table data-oy-valign="center">Foo</table>');

    // bgcolor
    expect(
      ReactDOMServer.renderToStaticMarkup(<OyTable bgColor="#123456">Foo</OyTable>)
    ).toEqual('<table data-oy-bgcolor="#123456">Foo</table>');
  });
});
