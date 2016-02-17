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
const Table = (props) => {
  return Element(objectAssign({}, props, {tagName: 'table'}));
};

Table.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  border: TableBorderRule,
  cellPadding: TableCellPaddingRule,
  cellSpacing: TableCellSpacingRule,
  style: ShorthandFontRule
};

Table.defaultProps = {
  border: 0,
  cellSpacing: 0,
  cellPadding: 0
};

// <tbody> element
const TBody = (props) => {
  return Element(objectAssign({}, props, {tagName: 'tbody'}));
};

TBody.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule
};

// <tr> element
const TR = (props) => {
  return Element(objectAssign({}, props, {tagName: 'tr'}));
};

TR.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  style: ShorthandFontRule
};

// <td> element
const TD = (props) => {
  return Element(objectAssign({}, props, {tagName: 'td'}));
};

TD.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  children: EmptyTDRule,
  style: ShorthandFontRule
};

// <img> element
const Img = (props) => {
  return Element(objectAssign({}, props, {tagName: 'img'}));
};

Img.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  height: ImgDimensionsRule,
  src: SrcAbsoluteURLRule,
  width: ImgDimensionsRule
};

// <a> element
const A = (props) => {
  return Element(objectAssign({}, props, {tagName: 'a'}));
};

A.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  href: HrefAbsoluteURLRule,
  style: ShorthandFontRule
};

export default {
  Table: Table,
  TBody: TBody,
  TD: TD,
  TR: TR,
  Img: Img,
  A: A
};
