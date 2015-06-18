/**
 * OyImg:
 * TODO: Once React allows more graceful custom attributes, add the HTML4 attributes back in.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
  displayName: 'OyImg',

  propTypes: {
    border: _react2['default'].PropTypes.string,
    align: _react2['default'].PropTypes.string
  },

  render: function render() {
    return _react2['default'].createElement('img', _extends({}, this.props, {
      'data-border': this.props.border,
      'data-align': this.props.align }));
  }
});
module.exports = exports['default'];