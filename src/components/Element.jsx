import React from 'react';
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
  tagName: React.PropTypes.string.isRequired
};


export default Element;
