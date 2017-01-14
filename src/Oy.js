import DefaultElement from './components/DefaultElement';
import Element from './components/Element';
import * as PropTypes from './rules';
import Renderer from './utils/Renderer';


export default {
  // React Components
  Element: Element,
  Table: DefaultElement.Table,
  TBody: DefaultElement.TBody,
  TD: DefaultElement.TD,
  TR: DefaultElement.TR,
  Img: DefaultElement.Img,
  A: DefaultElement.A,

  // propTypes for custom Element components
  PropTypes: PropTypes,

  // Render template
  renderTemplate: Renderer.renderTemplate
};

export const Table = DefaultElement.Table;
export const TBody = DefaultElement.TBody;
export const TD = DefaultElement.TD;
export const TR = DefaultElement.TR;
export const Img = DefaultElement.Img;
export const A = DefaultElement.A;
