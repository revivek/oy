import DefaultElement from './components/DefaultElement';
import Element from './components/Element';
import PropTypes from './utils/PropTypes';
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
