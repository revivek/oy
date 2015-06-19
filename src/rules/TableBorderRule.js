const description = 'Email clients may provide their own "border" styles, so it is good practice to specify this attribute on every table.';


export default (props, propName, componentName) => {
  if (!props.hasOwnProperty('border')) {
    return new Error(description);
  };
};
