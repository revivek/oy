'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var _OyTD = require('../OyTD');

var _OyTD2 = _interopRequireDefault(_OyTD);

describe('OyTD', function () {
  it('should render a <td> element with Oy-decorated attributes', function () {
    // align
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(
      _OyTD2['default'],
      { align: 'center' },
      'Foo'
    ))).toEqual('<td data-oy-align="center">Foo</td>');

    // valign
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(
      _OyTD2['default'],
      { vAlign: 'center' },
      'Foo'
    ))).toEqual('<td data-oy-valign="center">Foo</td>');

    // background
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(
      _OyTD2['default'],
      { background: 'foo.jpeg' },
      'Foo'
    ))).toEqual('<td data-oy-background="foo.jpeg">Foo</td>');

    // bgcolor
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(
      _OyTD2['default'],
      { bgColor: '#123456' },
      'Foo'
    ))).toEqual('<td data-oy-bgcolor="#123456">Foo</td>');
  });
});