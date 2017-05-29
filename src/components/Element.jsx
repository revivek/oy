import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';

import OyProps from './OyProps';


const Element = (props) => {
  const tagName = props.tagName;
  const propsCopy = {};
  objectAssign(propsCopy, props);
  delete propsCopy.tagName;
  return React.createElement(
    tagName,
    OyProps.convertToTransformableProps(propsCopy),
    propsCopy.children
  );
};

Element.propTypes = {
  tagName: PropTypes.string.isRequired
};


export default Element;
