'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = exports.Img = exports.TR = exports.TD = exports.TBody = exports.Table = undefined;

var _DefaultElement = require('./components/DefaultElement');

var _DefaultElement2 = _interopRequireDefault(_DefaultElement);

var _rules = require('./rules');

var PropTypes = _interopRequireWildcard(_rules);

var _Renderer = require('./utils/Renderer');

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // React Components
  Table: _DefaultElement2.default.Table,
  TBody: _DefaultElement2.default.TBody,
  TD: _DefaultElement2.default.TD,
  TR: _DefaultElement2.default.TR,
  Img: _DefaultElement2.default.Img,
  A: _DefaultElement2.default.A,

  // propTypes for custom Element components
  PropTypes: PropTypes,

  // Render template
  renderTemplate: _Renderer2.default.renderTemplate
};
var Table = exports.Table = _DefaultElement2.default.Table;
var TBody = exports.TBody = _DefaultElement2.default.TBody;
var TD = exports.TD = _DefaultElement2.default.TD;
var TR = exports.TR = _DefaultElement2.default.TR;
var Img = exports.Img = _DefaultElement2.default.Img;
var A = exports.A = _DefaultElement2.default.A;