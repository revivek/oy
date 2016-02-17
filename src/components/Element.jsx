import React from 'react';
import objectAssign from 'object-assign';

import OyProps from './OyProps';


const Element = (props) => {
  return React.createElement(
    props.tagName,
    objectAssign(
      {},
      OyProps.convertToTransformableProps(props),
      {tagName: null}
    ),
    props.children
  );
};

Element.propTypes = {
  tagName: React.PropTypes.string.isRequired
};

export default Element;
