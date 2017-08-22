'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _OyProps = require('./OyProps');

var _OyProps2 = _interopRequireDefault(_OyProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Element = function Element(props) {
  var tagName = props.tagName;
  var propsCopy = {};
  (0, _objectAssign2.default)(propsCopy, props);
  delete propsCopy.tagName;
  return _react2.default.createElement(tagName, _OyProps2.default.convertToTransformableProps(propsCopy), propsCopy.children);
};

Element.propTypes = {
  tagName: _propTypes2.default.string.isRequired
};

exports.default = Element;
module.exports = exports['default'];