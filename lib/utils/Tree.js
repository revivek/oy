'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _DefaultElement = require('../components/DefaultElement');

var _DefaultElement2 = _interopRequireDefault(_DefaultElement);

var _Element = require('../components/Element');

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReactDOMElement = function isReactDOMElement(element) {
  return typeof element.type === 'string';
};
var isReactComponentElement = function isReactComponentElement(element) {
  return typeof element.type === 'function';
};

var cloneElement = function cloneElement(element) {
  if (_react2.default.isValidElement(element)) {
    return _react2.default.cloneElement(element, element.props);
  } else {
    return element;
  }
};

var shallowRender = function shallowRender(componentElement) {
  var renderer = _reactAddonsTestUtils2.default.createRenderer();
  renderer.render(componentElement);
  return renderer.getRenderOutput();
};

/**
 * Recursively walk a ReactElement tree while applying a
 * function at each ReactElement. This function must take a
 * ReactElement and return a nullable ReactElement.
 *
 * If we encounter a ReactDOMElement, recurse on its children.
 * If we encounter a ReactComponentElement, we need to first
 * render it. ReactTestUtils provides a renderer that we can
 * leverage for this purpose. Then, recurse on the rendered
 * ReactElement children. To bottom out, we clone the element.
 *
 * @param {?ReactElement} tree The top-level ReactElement element.
 * @return {?ReactElement}
 */
var walk = function walk(tree, fn) {
  var _walk = function _walk(element, level) {
    if (element == null) {
      return element;
    } else if (isReactDOMElement(element)) {
      var newChildren = _react2.default.Children.map(element.props.children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return child;
        }
        return fn(_walk(child, level + 1), level);
      });

      var newProps = (0, _objectAssign2.default)({}, element.props, { children: newChildren });

      return _react2.default.cloneElement(element, newProps);
    } else if (isReactComponentElement(element)) {
      return _walk(shallowRender(element), level);
    }

    throw new Error('Passed element that cannot be rendered: ' + element);
  };

  return fn(_walk(tree, 1), 0);
};

/**
 * Wrap certain ReactDOMElements used in Oy with ReactComponentElement
 * Oy elements. If marked with `oy-ignore`, the element will just be
 * cloned. Attached ReactComponentElement objects will have default
 * propTypes attached, as defined in components/DefaultElement.jsx.
 *
 * TODO: Generate the switch statement dynamically.
 *
 * @param {!ReactDOMElement} element ReactDOMElement object.
 * @return {!ReactElement} Wrapped ReactDOMElement.
 */
var wrapWithOyElements = function wrapWithOyElements(element) {
  var clonedElement = _react2.default.cloneElement(element, element.props);

  if ('oy-ignore-rules' in element.props) {
    return _react2.default.createElement(_Element2.default, (0, _objectAssign2.default)({}, clonedElement.props, { tagName: element.type }));
  } else {
    switch (element.type) {
      case 'table':
        return _react2.default.createElement(_DefaultElement2.default.Table, clonedElement.props);
      case 'tbody':
        return _react2.default.createElement(_DefaultElement2.default.TBody, clonedElement.props);
      case 'tr':
        return _react2.default.createElement(_DefaultElement2.default.TR, clonedElement.props);
      case 'td':
        return _react2.default.createElement(_DefaultElement2.default.TD, clonedElement.props);
      case 'img':
        return _react2.default.createElement(_DefaultElement2.default.Img, clonedElement.props);
      case 'a':
        return _react2.default.createElement(_DefaultElement2.default.A, clonedElement.props);
    }
  }

  return clonedElement;
};

exports.default = {
  walk: walk,
  render: function render(tree) {
    return walk(tree, cloneElement);
  },
  insertOyElements: function insertOyElements(tree) {
    return walk(tree, wrapWithOyElements);
  }
};