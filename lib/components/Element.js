'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _OyProps = require('./OyProps');

var _OyProps2 = _interopRequireDefault(_OyProps);

var Element = function Element(props) {
  return _react2['default'].createElement(props.tagName || props.type, (0, _objectAssign2['default'])({}, _OyProps2['default'].convertToTransformableProps(props), { type: null, tagName: null }), props.children);
};

Element.propTypes = {
  type: function type(_, propName) {
    if (propName === 'type') {
      new Error('The `type` prop on Oy.Element is deprecated' + ' and will be removed in 0.4.0. Use `tagName` instead.');
    }
  },
  tagName: _react2['default'].PropTypes.string.isRequired
};

exports['default'] = Element;
module.exports = exports['default'];