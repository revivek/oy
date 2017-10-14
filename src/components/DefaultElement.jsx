/**
 * Provides default Oy.Element components with rules.
 */

import React from 'react';

import BackgroundAbsoluteURLRule from '../rules/BackgroundAbsoluteURLRule';
import EmptyTDRule from '../rules/EmptyTDRule';
import HrefAbsoluteURLRule from '../rules/HrefAbsoluteURLRule';
import ImgAltTextRule from '../rules/ImgAltTextRule';
import ImgAltTextStyleRule from '../rules/ImgAltTextStyleRule';
import ImgDimensionsRule from '../rules/ImgDimensionsRule';
import ShorthandFontRule from '../rules/ShorthandFontRule';
import SixCharacterHexBackgroundColorRule from '../rules/SixCharacterHexBackgroundColorRule';
import SrcAbsoluteURLRule from '../rules/SrcAbsoluteURLRule';
import TableBorderRule from '../rules/TableBorderRule';
import TableCellPaddingRule from '../rules/TableCellPaddingRule';
import TableCellSpacingRule from '../rules/TableCellSpacingRule';

// <table> element
const Table = (props) => {
  return React.createElement('table', props, props.children);
};

Table.propTypes = {
  background: BackgroundAbsoluteURLRule,
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
  return React.createElement('tbody', props, props.children);
};

TBody.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule
};

// <tr> element
const TR = (props) => {
  return React.createElement('tr', props, props.children);
};

TR.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  style: ShorthandFontRule
};

// <td> element
const TD = (props) => {
  return React.createElement('td', props, props.children);
};

TD.propTypes = {
  background: BackgroundAbsoluteURLRule,
  bgColor: SixCharacterHexBackgroundColorRule,
  children: EmptyTDRule,
  style: ShorthandFontRule
};

// <img> element
const Img = (props) => {
  return React.createElement('img', props, props.children);
};

Img.propTypes = {
  bgColor: SixCharacterHexBackgroundColorRule,
  height: ImgDimensionsRule,
  src: SrcAbsoluteURLRule,
  width: ImgDimensionsRule,
  style: ImgAltTextStyleRule,
  alt: ImgAltTextRule
};

// <a> element
const A = (props) => {
  return React.createElement('a', props, props.children);
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
