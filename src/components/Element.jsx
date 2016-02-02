import React from 'react';
import objectAssign from 'object-assign';

import OyProps from './OyProps';


const Element = (props) => {
  return React.createElement(
    props.tagName || props.type,
    objectAssign(
      {},
      OyProps.convertToTransformableProps(props),
      {type: null, tagName: null}
    ),
    props.children
  );
};

Element.propTypes = {
  type: (_, propName) => {
    if (propName === 'type') {
      new Error(
        'The `type` prop on Oy.Element is deprecated' +
        ' and will be removed in 0.4.0. Use `tagName` instead.'
      )
    }
  },
  tagName: React.PropTypes.string.isRequired
};

export default Element;
