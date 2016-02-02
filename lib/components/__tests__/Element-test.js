'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _Element = require('../Element');

var _Element2 = _interopRequireDefault(_Element);

describe('Element', function () {
  var shallowRenderer = undefined;

  beforeEach(function () {
    shallowRenderer = _reactAddonsTestUtils2['default'].createRenderer();
  });

  it('should render Oy-whitelisted element', function () {
    var table = _react2['default'].createElement(_Element2['default'], {
      tagName: 'table',
      className: 'mytable',
      align: 'center',
      vAlign: 'top' });
    shallowRenderer.render(table);
    var result = shallowRenderer.getRenderOutput();
    expect(result.props.className).toEqual('mytable');
    expect(result.props.type).toEqual(null);
    expect(result.props.align).toEqual(null);
    expect(result.props.vAlign).toEqual(null);
    expect(result.props['data-oy-align']).toEqual('center');
    expect(result.props['data-oy-valign']).toEqual('top');
  });
});