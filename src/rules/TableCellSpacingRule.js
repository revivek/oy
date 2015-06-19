const description = 'Email clients may provide their own "cellSpacing" styles, so it is good practice to specify this attribute on every table.';


export default (props, propName, componentName) => {
  if (!props.hasOwnProperty('cellSpacing')) {
    return new Error(description);
  };
};
