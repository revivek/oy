import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import objectAssign from 'object-assign';

import DefaultElement from '../components/DefaultElement';
import Element from '../components/Element';


const isReactDOMElement = (element) => typeof element.type === 'string';
const isReactComponentElement = (element) => typeof element.type === 'function';

const cloneElement = (element) => {
  if (React.isValidElement(element)) {
    return React.cloneElement(element, element.props);
  } else {
    return element;
  }
}

const shallowRender = (componentElement) => {
  const renderer = ReactTestUtils.createRenderer();
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
const walk = (tree, fn) => {
  const _walk = (element, level) => {
    if (element == null) {
      return element;
    } else if (isReactDOMElement(element)) {
      const newChildren = React.Children.map(element.props.children, (child) => {
        if (!React.isValidElement(child)) { return child; }
        return fn(_walk(child, level + 1), level);
      });

      const newProps = objectAssign(
        {}, element.props, {children: newChildren}
      );

      return React.cloneElement(element, newProps);
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
const wrapWithOyElements = (element) => {
  const clonedElement = React.cloneElement(element, element.props);

  if ('oy-ignore-rules' in element.props) {
    return React.createElement(
      Element,
      objectAssign({}, clonedElement.props, {tagName: element.type})
    );
  } else {
    switch (element.type) {
      case 'table':
        return React.createElement(
          DefaultElement.Table,
          clonedElement.props
        );
      case 'tbody':
        return React.createElement(
          DefaultElement.TBody,
          clonedElement.props
        );
      case 'tr':
        return React.createElement(
          DefaultElement.TR,
          clonedElement.props
        );
      case 'td':
        return React.createElement(
          DefaultElement.TD,
          clonedElement.props
        );
      case 'img':
        return React.createElement(
          DefaultElement.Img,
          clonedElement.props
        );
      case 'a':
        return React.createElement(
          DefaultElement.A,
          clonedElement.props
        );
    }
  }

  return clonedElement;
}


export default {
  walk: walk,
  render: (tree) => walk(tree, cloneElement),
  insertOyElements: (tree) => walk(tree, wrapWithOyElements)
};
