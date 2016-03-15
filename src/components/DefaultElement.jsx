/**
 * Provides default Oy.Element components with rules.
 */

import objectAssign from 'object-assign';

import EmptyTDRule from '../rules/EmptyTDRule';
import HrefAbsoluteURLRule from '../rules/HrefAbsoluteURLRule';
import ImgDimensionsRule from '../rules/ImgDimensionsRule';
import ShorthandFontRule from '../rules/ShorthandFontRule';
import SixCharacterHexBackgroundColorRule from '../rules/SixCharacterHexBackgroundColorRule';
import SrcAbsoluteURLRule from '../rules/SrcAbsoluteURLRule';
import TableBorderRule from '../rules/TableBorderRule';
import TableCellPaddingRule from '../rules/TableCellPaddingRule';
import TableCellSpacingRule from '../rules/TableCellSpacingRule';

import Element from './Element';


// <table> element
const Table_ = (props) => {
  return Element(objectAssign({}, props, {tagName: 'table'}));
};

Table_.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  border: TableBorderRule,
  cellPadding: TableCellPaddingRule,
  cellSpacing: TableCellSpacingRule,
  style: ShorthandFontRule
};

Table_.defaultProps = {
  border: 0,
  cellSpacing: 0,
  cellPadding: 0
};

// <tbody> element
const TBody_ = (props) => {
  return Element(objectAssign({}, props, {tagName: 'tbody'}));
};

TBody_.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule
};

// <tr> element
const TR_ = (props) => {
  return Element(objectAssign({}, props, {tagName: 'tr'}));
};

TR_.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  style: ShorthandFontRule
};

// <td> element
const TD_ = (props) => {
  return Element(objectAssign({}, props, {tagName: 'td'}));
};

TD_.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  children: EmptyTDRule,
  style: ShorthandFontRule
};

// <img> element
const Img_ = (props) => {
  return Element(objectAssign({}, props, {tagName: 'img'}));
};

Img_.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  height: ImgDimensionsRule,
  src: SrcAbsoluteURLRule,
  width: ImgDimensionsRule
};

// <a> element
const A_ = (props) => {
  return Element(objectAssign({}, props, {tagName: 'a'}));
};

A_.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  href: HrefAbsoluteURLRule,
  style: ShorthandFontRule
};

export const Table = Table_;
export const TBody = TBody_;
export const TD = TD_;
export const TR = TR_;
export const Img = Img_;
export const A = A_;
