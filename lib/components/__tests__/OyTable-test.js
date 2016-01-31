'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var _OyTable = require('../OyTable');

var _OyTable2 = _interopRequireDefault(_OyTable);

describe('OyTable', function () {
  it('should render a <table> element with Oy-decorated attributes', function () {
    // align
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(
      _OyTable2['default'],
      { align: 'center' },
      'Foo'
    ))).toEqual('<table data-oy-align="center">Foo</table>');

    // valign
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(
      _OyTable2['default'],
      { vAlign: 'center' },
      'Foo'
    ))).toEqual('<table data-oy-valign="center">Foo</table>');

    // bgcolor
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(
      _OyTable2['default'],
      { bgColor: '#123456' },
      'Foo'
    ))).toEqual('<table data-oy-bgcolor="#123456">Foo</table>');
  });
});