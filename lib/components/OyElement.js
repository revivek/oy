/**
 * OyElement:
 * TODO: Once React allows more graceful custom attributes, this shouldn't be necessary.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _OyImg = require('./OyImg');

var _OyImg2 = _interopRequireDefault(_OyImg);

var _OyTable = require('./OyTable');

var _OyTable2 = _interopRequireDefault(_OyTable);

var _OyTD = require('./OyTD');

var _OyTD2 = _interopRequireDefault(_OyTD);

// HTML4 elements with attributes deprecated in HTML5.
// Necessary for now because React does not render custom attributes.
var OY_COMPONENTS = {
  'img': _OyImg2['default'],
  'table': _OyTable2['default'],
  'td': _OyTD2['default']
};

exports['default'] = _react2['default'].createClass({
  displayName: 'OyElement',

  propTypes: {
    type: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var element = OY_COMPONENTS.hasOwnProperty(this.props.type) ? OY_COMPONENTS[this.props.type] : this.props.type;

    return _react2['default'].createElement(element, (0, _objectAssign2['default'])({}, this.props, { type: null }), this.props.children);
  }
});
module.exports = exports['default'];