'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _OyElement = require('../OyElement');

var _OyElement2 = _interopRequireDefault(_OyElement);

describe('OyElement', function () {
  var shallowRenderer = undefined;

  beforeEach(function () {
    shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
  });

  it('should render Oy-whitelisted element', function () {
    shallowRenderer.render(_react2['default'].createElement(_OyElement2['default'], { type: 'table', className: 'mytable' }));
    var result = shallowRenderer.getRenderOutput();
    expect(result.type.displayName).toEqual('OyTable');
    expect(result.props.className).toEqual('mytable');
  });

  it('should render the right React element if not in Oy whitelist', function () {
    shallowRenderer.render(_react2['default'].createElement(_OyElement2['default'], { type: 'a', className: 'myanchor' }));
    var result = shallowRenderer.getRenderOutput();
    expect(result.type).toEqual('a');
    expect(result.props.className).toEqual('myanchor');
  });
});