'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = exports.Img = exports.TR = exports.TD = exports.TBody = exports.Table = undefined;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _EmptyTDRule = require('../rules/EmptyTDRule');

var _EmptyTDRule2 = _interopRequireDefault(_EmptyTDRule);

var _HrefAbsoluteURLRule = require('../rules/HrefAbsoluteURLRule');

var _HrefAbsoluteURLRule2 = _interopRequireDefault(_HrefAbsoluteURLRule);

var _ImgDimensionsRule = require('../rules/ImgDimensionsRule');

var _ImgDimensionsRule2 = _interopRequireDefault(_ImgDimensionsRule);

var _ShorthandFontRule = require('../rules/ShorthandFontRule');

var _ShorthandFontRule2 = _interopRequireDefault(_ShorthandFontRule);

var _SixCharacterHexBackgroundColorRule = require('../rules/SixCharacterHexBackgroundColorRule');

var _SixCharacterHexBackgroundColorRule2 = _interopRequireDefault(_SixCharacterHexBackgroundColorRule);

var _SrcAbsoluteURLRule = require('../rules/SrcAbsoluteURLRule');

var _SrcAbsoluteURLRule2 = _interopRequireDefault(_SrcAbsoluteURLRule);

var _TableBorderRule = require('../rules/TableBorderRule');

var _TableBorderRule2 = _interopRequireDefault(_TableBorderRule);

var _TableCellPaddingRule = require('../rules/TableCellPaddingRule');

var _TableCellPaddingRule2 = _interopRequireDefault(_TableCellPaddingRule);

var _TableCellSpacingRule = require('../rules/TableCellSpacingRule');

var _TableCellSpacingRule2 = _interopRequireDefault(_TableCellSpacingRule);

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <table> element
var Table_ = function Table_(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'table' }));
}; /**
    * Provides default Oy.Element components with rules.
    */

Table_.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  border: _TableBorderRule2.default,
  cellPadding: _TableCellPaddingRule2.default,
  cellSpacing: _TableCellSpacingRule2.default,
  style: _ShorthandFontRule2.default
};

Table_.defaultProps = {
  border: 0,
  cellSpacing: 0,
  cellPadding: 0
};

// <tbody> element
var TBody_ = function TBody_(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'tbody' }));
};

TBody_.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default
};

// <tr> element
var TR_ = function TR_(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'tr' }));
};

TR_.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  style: _ShorthandFontRule2.default
};

// <td> element
var TD_ = function TD_(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'td' }));
};

TD_.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  children: _EmptyTDRule2.default,
  style: _ShorthandFontRule2.default
};

// <img> element
var Img_ = function Img_(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'img' }));
};

Img_.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  height: _ImgDimensionsRule2.default,
  src: _SrcAbsoluteURLRule2.default,
  width: _ImgDimensionsRule2.default
};

// <a> element
var A_ = function A_(props) {
  return (0, _Element2.default)((0, _objectAssign2.default)({}, props, { tagName: 'a' }));
};

A_.propTypes = {
  bgColor: _SixCharacterHexBackgroundColorRule2.default,
  href: _HrefAbsoluteURLRule2.default,
  style: _ShorthandFontRule2.default
};

var Table = exports.Table = Table_;
var TBody = exports.TBody = TBody_;
var TD = exports.TD = TD_;
var TR = exports.TR = TR_;
var Img = exports.Img = Img_;
var A = exports.A = A_;