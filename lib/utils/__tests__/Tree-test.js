'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _DefaultElement = require('../../components/DefaultElement');

var _DefaultElement2 = _interopRequireDefault(_DefaultElement);

var _Tree = require('../Tree');

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tree', function () {
  it('should render a dom element', function () {
    var a = _react2.default.createElement(
      'h1',
      null,
      'foo'
    );
    var aRendered = _Tree2.default.render(a);
    var aMarkup = _server2.default.renderToStaticMarkup(a);
    var aRenderedMarkup = _server2.default.renderToStaticMarkup(aRendered);

    expect(aRendered.type).toEqual('h1');
    expect(a).not.toBe(aRendered);
    expect(aMarkup).toEqual('<h1>foo</h1>');
    expect(aMarkup).toEqual(aRenderedMarkup);
  });

  it('should render a custom element with props', function () {
    var A = function A(props) {
      return _react2.default.createElement(
        'h1',
        null,
        props.message
      );
    };
    var a = _react2.default.createElement(A, { message: 'foo' });
    var aRendered = _Tree2.default.render(a);
    var aMarkup = _server2.default.renderToStaticMarkup(a);
    var aRenderedMarkup = _server2.default.renderToStaticMarkup(aRendered);

    expect(aRendered.type).toEqual('h1');
    expect(aMarkup).toEqual('<h1>foo</h1>');
    expect(aMarkup).toEqual(aRenderedMarkup);
  });

  it('should render a custom element with an empty body', function () {
    var A = function A() {
      return _react2.default.createElement('h1', null);
    };
    var a = _react2.default.createElement(A, null);
    var aRendered = _Tree2.default.render(a);
    var aMarkup = _server2.default.renderToStaticMarkup(a);
    var aRenderedMarkup = _server2.default.renderToStaticMarkup(aRendered);

    expect(aRendered.type).toEqual('h1');
    expect(aMarkup).toEqual('<h1></h1>');
    expect(aMarkup).toEqual(aRenderedMarkup);
  });

  it('should throw on a custom element that returns null', function () {
    // https://github.com/facebook/react/issues/4599
    var A = _react2.default.createClass({
      displayName: 'A',
      render: function render() {
        return null;
      } }); // eslint-disable-line react/prefer-stateless-function
    var a = _react2.default.createElement(A, null);
    var aRendered = _Tree2.default.render(a);
    var shouldNotThrow = function shouldNotThrow() {
      return _server2.default.renderToStaticMarkup(a);
    };
    var shouldThrow = function shouldThrow() {
      return _server2.default.renderToStaticMarkup(aRendered);
    };

    expect(shouldNotThrow).not.toThrow();
    expect(shouldThrow).toThrow();
    expect(aRendered).toEqual(null);
  });

  it('should render nested custom elements', function () {
    var A = function A() {
      return _react2.default.createElement(
        'h1',
        null,
        'foo'
      );
    };
    var B = function B() {
      return _react2.default.createElement(A, null);
    };
    var C = function C() {
      return _react2.default.createElement(B, null);
    };
    var c = _react2.default.createElement(C, null);
    var cRendered = _Tree2.default.render(c);
    var cMarkup = _server2.default.renderToStaticMarkup(c);
    var cRenderedMarkup = _server2.default.renderToStaticMarkup(cRendered);

    expect(cRendered.type).toEqual('h1');
    expect(cMarkup).toEqual('<h1>foo</h1>');
    expect(cMarkup).toEqual(cRenderedMarkup);
  });

  it('should render a custom element with conditional render logic', function () {
    var A = function A(props) {
      return props.yes ? _react2.default.createElement(
        'h1',
        null,
        'Yes'
      ) : _react2.default.createElement(
        'h1',
        null,
        'No'
      );
    };
    var aYes = _react2.default.createElement(A, { yes: true });
    var aYesRendered = _Tree2.default.render(aYes);
    var aYesMarkup = _server2.default.renderToStaticMarkup(aYes);
    var aYesRenderedMarkup = _server2.default.renderToStaticMarkup(aYesRendered);

    expect(aYesRendered.type).toEqual('h1');
    expect(aYesMarkup).toEqual('<h1>Yes</h1>');
    expect(aYesMarkup).toEqual(aYesRenderedMarkup);
  });

  it('should render a dom element and apply a transformation', function () {
    var a = _react2.default.createElement(
      'div',
      null,
      'foo'
    );
    var aRendered = _Tree2.default.render(a);
    var aTransformed = _Tree2.default.walk(a, function (element) {
      return _react2.default.cloneElement(element, (0, _objectAssign2.default)({}, element.props, { height: 10 }));
    });
    var aMarkup = _server2.default.renderToStaticMarkup(a);
    var aRenderedMarkup = _server2.default.renderToStaticMarkup(aRendered);
    var aTransformedMarkup = _server2.default.renderToStaticMarkup(aTransformed);

    expect(aTransformed.props.height).toEqual(10);
    expect(aRendered.type).toEqual(aTransformed.type);
    expect(aTransformedMarkup).toEqual('<div height="10">foo</div>');
  });

  it('should render nested dom elements and apply a transformation', function () {
    var a = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'aside',
          null,
          _react2.default.createElement(
            'span',
            null,
            'foo'
          )
        )
      )
    );
    var aRendered = _Tree2.default.render(a);
    var aTransformed = _Tree2.default.walk(aRendered, function (element) {
      return _react2.default.cloneElement(element, (0, _objectAssign2.default)({}, element.props, { 'data-foo': 'bar' }));
    });
    var aMarkup = _server2.default.renderToStaticMarkup(a);
    var aRenderedMarkup = _server2.default.renderToStaticMarkup(aRendered);
    var aTransformedMarkup = _server2.default.renderToStaticMarkup(aTransformed);

    expect(aMarkup).toEqual('<div><section><aside><span>foo</span></aside></section></div>');
    expect(aTransformedMarkup).toEqual('<div data-foo="bar"><section data-foo="bar"><aside data-foo="bar"><span data-foo="bar">foo</span></aside></section></div>');
  });

  it('should render a component element and apply a transformation', function () {
    var A = function A(props) {
      return _react2.default.createElement(
        'h1',
        null,
        props.message
      );
    };
    var a = _react2.default.createElement(A, { message: 'hello!' });
    var aRendered = _Tree2.default.render(a);
    var aTransformed = _Tree2.default.walk(aRendered, function (element) {
      return _react2.default.cloneElement(element, (0, _objectAssign2.default)({}, element.props, { height: 10 }));
    });
    var aMarkup = _server2.default.renderToStaticMarkup(a);
    var aRenderedMarkup = _server2.default.renderToStaticMarkup(aRendered);
    var aTransformedMarkup = _server2.default.renderToStaticMarkup(aTransformed);

    expect(aMarkup).toEqual(aRenderedMarkup);
    expect(aMarkup).toEqual('<h1>hello!</h1>');
    expect(aTransformedMarkup).toEqual('<h1 height="10">hello!</h1>');
  });

  it('should wrap the whitelisted <table> element', function () {
    var A = function A() {
      return _react2.default.createElement('table', null);
    };
    var a = _react2.default.createElement(A, null);
    var aRendered = _Tree2.default.render(a);
    var aWrapped = _Tree2.default.insertOyElements(aRendered);
    var aWrappedMarkup = _server2.default.renderToStaticMarkup(aWrapped);

    expect(aWrappedMarkup).toEqual('<table cellspacing="0" cellpadding="0" data-oy-border="0"></table>');
  });

  it('should transform while wrapping whitelisted <table>, <tbody>, <tr>, <td> elements', function () {
    var A = function A() {
      return _react2.default.createElement(
        'table',
        { bgColor: '#cccccc' },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { align: 'center' },
              'hello'
            )
          )
        )
      );
    };
    var a = _react2.default.createElement(A, null);
    var aRendered = _Tree2.default.render(a);
    var aWrapped = _Tree2.default.insertOyElements(aRendered);
    var aWrappedMarkup = _server2.default.renderToStaticMarkup(aWrapped);

    expect(aWrappedMarkup).toEqual('<table cellspacing="0" cellpadding="0" data-oy-bgcolor="#cccccc" data-oy-border="0">' + '<tbody><tr><td data-oy-align="center">hello</td></tr></tbody></table>');
  });

  it('should log a validation error for a broken validation rule', function () {
    spyOn(console, 'error');
    var A = function A() {
      return _react2.default.createElement('table', { bgColor: '#ccc' });
    };
    var a = _react2.default.createElement(A, null);
    var aRendered = _Tree2.default.render(a);
    var aWrapped = _Tree2.default.insertOyElements(aRendered);
    _server2.default.renderToStaticMarkup(aWrapped);

    expect(console.error).toHaveBeenCalledWith('Warning: Failed propType: Many email clients only support ' + '6-character hex strings on the `bgcolor` attribute. See ' + 'https://litmus.com/community/learning/21-background-colors-' + 'in-html-email');
  });

  it('should log a validation error for a nested broken validation rule', function () {
    spyOn(console, 'error');
    var A = function A() {
      return _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'a',
                { href: 'exampleabc.com' },
                'foo'
              )
            )
          )
        )
      );
    };
    var a = _react2.default.createElement(A, null);
    var aWrapped = _Tree2.default.insertOyElements(a);
    _server2.default.renderToStaticMarkup(aWrapped);

    expect(console.error).toHaveBeenCalledWith('Warning: Failed propType: Relative links can break (i.e. if ' + 'recipients are outside the company network) and make your ' + 'content unavailable to view');
  });

  it('should ignore those nodes marked with oy-ignore-rules', function () {
    spyOn(console, 'error');
    var Img = function Img() {
      return _react2.default.createElement('img', { 'oy-ignore-rules': true, src: 'exampleabc.com' });
    };
    var img = _react2.default.createElement(Img, null);
    var imgWrapped = _Tree2.default.insertOyElements(img);
    _server2.default.renderToStaticMarkup(imgWrapped);

    expect(console.error).not.toHaveBeenCalled();
  });

  it('should ignore those nodes marked with oy-ignore-rules', function () {
    spyOn(console, 'error');
    var A = function A() {
      return _react2.default.createElement(
        'table',
        { 'oy-ignore-rules': true, bgColor: '#ccc' },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'a',
                { style: { font: '1px Arial' } },
                'foo'
              )
            )
          )
        )
      );
    };
    var a = _react2.default.createElement(A, null);
    var aWrapped = _Tree2.default.insertOyElements(a);
    _server2.default.renderToStaticMarkup(aWrapped);

    expect(console.error.calls.count()).toEqual(1);
    expect(console.error).toHaveBeenCalledWith('Warning: Failed propType: A number of email clients reject CSS ' + 'shorthand for the font property. See ' + 'https://www.campaignmonitor.com/dev-resources/will-it-work/guidelines/');
  });
});