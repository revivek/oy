import objectAssign from 'object-assign';

import HTML4 from '../utils/HTML4';


export default {
  /**
   * To use Oy, we convert `data-foo` attributes to `foo` attributes in
   * renderTemplate(). This converts `foo` attributes to transformable
   * `data-*` form. This is to bypass React's attribute whitelist.
   */
  convertToTransformableProps: (props) => {
    const supportedPropsUsed = (
      Object.keys(HTML4.supportedPropsToTransformableAttributes)
        .filter((supportedProp) => props.hasOwnProperty(supportedProp))
    );

    // Convert HTML4 props to transformable form.
    const transformableProps = supportedPropsUsed
      .map((supportedProp) => {
        const attribute = (
          HTML4.supportedPropsToTransformableAttributes[supportedProp]
        );

        return {
          name: `data-oy-${attribute}`,
          value: props[supportedProp]
        };
      })
      .reduce((intermediate, nextTransformableProp) => {
        intermediate[nextTransformableProp.name] = nextTransformableProp.value;
        return intermediate;
      }, {});

    // Overwrite HTML4 props with null.
    const nullifiedProps = supportedPropsUsed
      .reduce((intermediate, supportedProp) => {
        intermediate[supportedProp] = null;
        return intermediate;
      }, {});

    return objectAssign({}, props, nullifiedProps, transformableProps);
  }
};
