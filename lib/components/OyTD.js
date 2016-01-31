'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
  displayName: 'OyTD',

  propTypes: {
    align: _react2['default'].PropTypes.string,
    vAlign: _react2['default'].PropTypes.string,
    background: _react2['default'].PropTypes.string,
    bgColor: _react2['default'].PropTypes.string
  },

  render: function render() {
    return _react2['default'].createElement(
      'td',
      _extends({}, this.props, {
        'data-align': this.props.align,
        'data-valign': this.props.vAlign,
        'data-background': this.props.background,
        'data-bgcolor': this.props.bgColor }),
      this.props.children
    );
  }
});
module.exports = exports['default'];