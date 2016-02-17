/**
 * Provides default Oy.Element components with rules.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _rulesEmptyTDRule = require('../rules/EmptyTDRule');

var _rulesEmptyTDRule2 = _interopRequireDefault(_rulesEmptyTDRule);

var _rulesHrefAbsoluteURLRule = require('../rules/HrefAbsoluteURLRule');

var _rulesHrefAbsoluteURLRule2 = _interopRequireDefault(_rulesHrefAbsoluteURLRule);

var _rulesImgDimensionsRule = require('../rules/ImgDimensionsRule');

var _rulesImgDimensionsRule2 = _interopRequireDefault(_rulesImgDimensionsRule);

var _rulesShorthandFontRule = require('../rules/ShorthandFontRule');

var _rulesShorthandFontRule2 = _interopRequireDefault(_rulesShorthandFontRule);

var _rulesSixCharacterHexBackgroundColorRule = require('../rules/SixCharacterHexBackgroundColorRule');

var _rulesSixCharacterHexBackgroundColorRule2 = _interopRequireDefault(_rulesSixCharacterHexBackgroundColorRule);

var _rulesSrcAbsoluteURLRule = require('../rules/SrcAbsoluteURLRule');

var _rulesSrcAbsoluteURLRule2 = _interopRequireDefault(_rulesSrcAbsoluteURLRule);

var _rulesTableBorderRule = require('../rules/TableBorderRule');

var _rulesTableBorderRule2 = _interopRequireDefault(_rulesTableBorderRule);

var _rulesTableCellPaddingRule = require('../rules/TableCellPaddingRule');

var _rulesTableCellPaddingRule2 = _interopRequireDefault(_rulesTableCellPaddingRule);

var _rulesTableCellSpacingRule = require('../rules/TableCellSpacingRule');

var _rulesTableCellSpacingRule2 = _interopRequireDefault(_rulesTableCellSpacingRule);

var _Element = require('./Element');

var _Element2 = _interopRequireDefault(_Element);

// <table> element
var Table = function Table(props) {
  return (0, _Element2['default'])((0, _objectAssign2['default'])({}, props, { tagName: 'table' }));
};

Table.propTypes = {
  bgColor: _rulesSixCharacterHexBackgroundColorRule2['default'],
  border: _rulesTableBorderRule2['default'],
  cellPadding: _rulesTableCellPaddingRule2['default'],
  cellSpacing: _rulesTableCellSpacingRule2['default'],
  style: _rulesShorthandFontRule2['default']
};

Table.defaultProps = {
  border: 0,
  cellSpacing: 0,
  cellPadding: 0
};

// <tbody> element
var TBody = function TBody(props) {
  return (0, _Element2['default'])((0, _objectAssign2['default'])({}, props, { tagName: 'tbody' }));
};

TBody.propTypes = {
  bgColor: _rulesSixCharacterHexBackgroundColorRule2['default']
};

// <tr> element
var TR = function TR(props) {
  return (0, _Element2['default'])((0, _objectAssign2['default'])({}, props, { tagName: 'tr' }));
};

TR.propTypes = {
  bgColor: _rulesSixCharacterHexBackgroundColorRule2['default'],
  style: _rulesShorthandFontRule2['default']
};

// <td> element
var TD = function TD(props) {
  return (0, _Element2['default'])((0, _objectAssign2['default'])({}, props, { tagName: 'td' }));
};

TD.propTypes = {
  bgColor: _rulesSixCharacterHexBackgroundColorRule2['default'],
  children: _rulesEmptyTDRule2['default'],
  style: _rulesShorthandFontRule2['default']
};

// <img> element
var Img = function Img(props) {
  return (0, _Element2['default'])((0, _objectAssign2['default'])({}, props, { tagName: 'img' }));
};

Img.propTypes = {
  bgColor: _rulesSixCharacterHexBackgroundColorRule2['default'],
  height: _rulesImgDimensionsRule2['default'],
  src: _rulesSrcAbsoluteURLRule2['default'],
  width: _rulesImgDimensionsRule2['default']
};

// <a> element
var A = function A(props) {
  return (0, _Element2['default'])((0, _objectAssign2['default'])({}, props, { tagName: 'a' }));
};

A.propTypes = {
  bgColor: _rulesSixCharacterHexBackgroundColorRule2['default'],
  href: _rulesHrefAbsoluteURLRule2['default'],
  style: _rulesShorthandFontRule2['default']
};

exports['default'] = {
  Table: Table,
  TBody: TBody,
  TD: TD,
  TR: TR,
  Img: Img,
  A: A
};
module.exports = exports['default'];