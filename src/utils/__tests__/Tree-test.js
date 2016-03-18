import React from 'react';
import ReactDOMServer from 'react-dom/server';
import objectAssign from 'object-assign';
import DefaultElement from '../../components/DefaultElement';

import Tree from '../Tree';


describe('Tree', function() {
  it('should render a dom element', function() {
    const a = <h1>foo</h1>;
    const aRendered = Tree.render(a);
    const aMarkup = ReactDOMServer.renderToStaticMarkup(a);
    const aRenderedMarkup = ReactDOMServer.renderToStaticMarkup(aRendered);

    expect(aRendered.type).toEqual('h1');
    expect(a).not.toBe(aRendered);
    expect(aMarkup).toEqual('<h1>foo</h1>');
    expect(aMarkup).toEqual(aRenderedMarkup);
  });

  it('should render a custom element with props', function() {
    const A = (props) => <h1>{props.message}</h1>;
    const a = <A message="foo" />;
    const aRendered = Tree.render(a);
    const aMarkup = ReactDOMServer.renderToStaticMarkup(a);
    const aRenderedMarkup = ReactDOMServer.renderToStaticMarkup(aRendered);

    expect(aRendered.type).toEqual('h1');
    expect(aMarkup).toEqual('<h1>foo</h1>');
    expect(aMarkup).toEqual(aRenderedMarkup);
  });

  it('should render a custom element with an empty body', function() {
    const A = () => <h1 />;
    const a = <A />;
    const aRendered = Tree.render(a);
    const aMarkup = ReactDOMServer.renderToStaticMarkup(a);
    const aRenderedMarkup = ReactDOMServer.renderToStaticMarkup(aRendered);

    expect(aRendered.type).toEqual('h1');
    expect(aMarkup).toEqual('<h1></h1>');
    expect(aMarkup).toEqual(aRenderedMarkup);
  });

  it('should throw on a custom element that returns null', function() {
    // https://github.com/facebook/react/issues/4599
    const A = React.createClass({ render: () => null }); // eslint-disable-line react/prefer-stateless-function
    const a = <A />;
    const aRendered = Tree.render(a);
    const shouldNotThrow = () => ReactDOMServer.renderToStaticMarkup(a);
    const shouldThrow = () => ReactDOMServer.renderToStaticMarkup(aRendered);

    expect(shouldNotThrow).not.toThrow();
    expect(shouldThrow).toThrow();
    expect(aRendered).toEqual(null);
  });

  it('should render nested custom elements', function() {
    const A = () => <h1>foo</h1>;
    const B = () => <A />;
    const C = () => <B />;
    const c = <C />;
    const cRendered = Tree.render(c);
    const cMarkup = ReactDOMServer.renderToStaticMarkup(c);
    const cRenderedMarkup = ReactDOMServer.renderToStaticMarkup(cRendered);

    expect(cRendered.type).toEqual('h1');
    expect(cMarkup).toEqual('<h1>foo</h1>');
    expect(cMarkup).toEqual(cRenderedMarkup);
  });

  it('should render a custom element with conditional render logic', function() {
    const A = (props) => props.yes ? <h1>Yes</h1> : <h1>No</h1>;
    const aYes = <A yes />;
    const aYesRendered = Tree.render(aYes);
    const aYesMarkup = ReactDOMServer.renderToStaticMarkup(aYes);
    const aYesRenderedMarkup = ReactDOMServer.renderToStaticMarkup(aYesRendered);

    expect(aYesRendered.type).toEqual('h1');
    expect(aYesMarkup).toEqual('<h1>Yes</h1>');
    expect(aYesMarkup).toEqual(aYesRenderedMarkup);
  });

  it('should render a dom element and apply a transformation', function() {
    const a = <div>foo</div>;
    const aRendered = Tree.render(a);
    const aTransformed = Tree.walk(a, (element) => {
      return React.cloneElement(
        element,
        objectAssign({}, element.props, {height: 10})
      );
    });
    const aMarkup = ReactDOMServer.renderToStaticMarkup(a);
    const aRenderedMarkup = ReactDOMServer.renderToStaticMarkup(aRendered);
    const aTransformedMarkup = ReactDOMServer.renderToStaticMarkup(aTransformed);

    expect(aTransformed.props.height).toEqual(10);
    expect(aRendered.type).toEqual(aTransformed.type);
    expect(aTransformedMarkup).toEqual('<div height="10">foo</div>');
  });

  it('should render nested dom elements and apply a transformation', function() {
    const a = (
      <div>
        <section>
          <aside>
            <span>foo</span>
          </aside>
        </section>
      </div>
    );
    const aRendered = Tree.render(a);
    const aTransformed = Tree.walk(aRendered, (element) => {
      return React.cloneElement(
        element,
        objectAssign({}, element.props, {'data-foo': 'bar'})
      );
    });
    const aMarkup = ReactDOMServer.renderToStaticMarkup(a);
    const aRenderedMarkup = ReactDOMServer.renderToStaticMarkup(aRendered);
    const aTransformedMarkup = ReactDOMServer.renderToStaticMarkup(aTransformed);

    expect(aMarkup).toEqual(
      '<div><section><aside><span>foo</span></aside></section></div>'
    );
    expect(aTransformedMarkup).toEqual(
      '<div data-foo="bar"><section data-foo="bar"><aside data-foo="bar"><span data-foo="bar">foo</span></aside></section></div>'
    );
  });

  it('should render a component element and apply a transformation', function() {
    const A = (props) => <h1>{props.message}</h1>;
    const a = <A message="hello!" />;
    const aRendered = Tree.render(a);
    const aTransformed = Tree.walk(aRendered, (element) => {
      return React.cloneElement(
        element,
        objectAssign({}, element.props, {height: 10})
      );
    });
    const aMarkup = ReactDOMServer.renderToStaticMarkup(a);
    const aRenderedMarkup = ReactDOMServer.renderToStaticMarkup(aRendered);
    const aTransformedMarkup = ReactDOMServer.renderToStaticMarkup(aTransformed);

    expect(aMarkup).toEqual(aRenderedMarkup);
    expect(aMarkup).toEqual('<h1>hello!</h1>');
    expect(aTransformedMarkup).toEqual('<h1 height="10">hello!</h1>');
  });

  it('should wrap the whitelisted <table> element', function() {
    const A = () => <table />;
    const a = <A />;
    const aRendered = Tree.render(a);
    const aWrapped = Tree.insertOyElements(aRendered);
    const aWrappedMarkup = ReactDOMServer.renderToStaticMarkup(aWrapped);

    expect(aWrappedMarkup).toEqual(
      '<table cellspacing="0" cellpadding="0" data-oy-border="0"></table>'
    );
  });

  it('should transform while wrapping whitelisted <table>, <tbody>, <tr>, <td> elements', function() {
    const A = () => {
      return (
        <table bgColor="#cccccc">
          <tbody>
            <tr>
              <td align="center">hello</td>
            </tr>
          </tbody>
        </table>
      );
    };
    const a = <A />;
    const aRendered = Tree.render(a);
    const aWrapped = Tree.insertOyElements(aRendered);
    const aWrappedMarkup = ReactDOMServer.renderToStaticMarkup(aWrapped);

    expect(aWrappedMarkup).toEqual(
      '<table cellspacing="0" cellpadding="0" data-oy-bgcolor="#cccccc" data-oy-border="0">' +
      '<tbody><tr><td data-oy-align="center">hello</td></tr></tbody></table>'
    );
  });

  it('should log a validation error for a broken validation rule', function() {
    spyOn(console, 'error');
    const A = () => <table bgColor="#ccc" />;
    const a = <A />;
    const aRendered = Tree.render(a);
    const aWrapped = Tree.insertOyElements(aRendered);
    ReactDOMServer.renderToStaticMarkup(aWrapped);

    expect(console.error).toHaveBeenCalledWith(
      'Warning: Failed propType: Many email clients only support ' +
      '6-character hex strings on the `bgcolor` attribute. See ' +
      'https://litmus.com/community/learning/21-background-colors-' +
      'in-html-email'
    );
  });

  it('should log a validation error for a nested broken validation rule', function() {
    spyOn(console, 'error');
    const A = () => {
      return (
        <table>
          <tbody>
            <tr>
              <td>
                <a href="exampleabc.com">foo</a>
              </td>
            </tr>
          </tbody>
        </table>
      );
    };
    const a = <A />;
    const aWrapped = Tree.insertOyElements(a);
    ReactDOMServer.renderToStaticMarkup(aWrapped);

    expect(console.error).toHaveBeenCalledWith(
      'Warning: Failed propType: Relative links can break (i.e. if ' +
      'recipients are outside the company network) and make your ' +
      'content unavailable to view'
    );
  });

  it('should ignore those nodes marked with oy-ignore-rules', function() {
    spyOn(console, 'error');
    const Img = () => <img oy-ignore-rules src="exampleabc.com" />;
    const img = <Img />;
    const imgWrapped = Tree.insertOyElements(img);
    ReactDOMServer.renderToStaticMarkup(imgWrapped);

    expect(console.error).not.toHaveBeenCalled();
  });

  it('should ignore those nodes marked with oy-ignore-rules', function() {
    spyOn(console, 'error');
    const A = () => {
      return (
        <table oy-ignore-rules bgColor="#ccc">
          <tbody>
            <tr>
              <td>
                <a style={{font: '1px Arial'}}>foo</a>
              </td>
            </tr>
          </tbody>
        </table>
      );
    };
    const a = <A />;
    const aWrapped = Tree.insertOyElements(a);
    ReactDOMServer.renderToStaticMarkup(aWrapped);

    expect(console.error.calls.count()).toEqual(1);
    expect(console.error).toHaveBeenCalledWith(
      'Warning: Failed propType: A number of email clients reject CSS ' +
      'shorthand for the font property. See ' +
      'https://www.campaignmonitor.com/dev-resources/will-it-work/guidelines/'
    );
  });
});
