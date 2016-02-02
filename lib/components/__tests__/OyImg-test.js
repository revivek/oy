'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var _OyImg = require('../OyImg');

var _OyImg2 = _interopRequireDefault(_OyImg);

describe('OyImg', function () {
  it('should render a <img> element with Oy-decorated attributes', function () {
    // border
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_OyImg2['default'], { border: '5' }))).toEqual('<img data-oy-border="5"/>');

    // align
    expect(_reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_OyImg2['default'], { align: 'center' }))).toEqual('<img data-oy-align="center"/>');
  });
});