const description = 'Email clients may provide their own "cellPadding" styles, so it is good practice to specify this attribute on every table.';


export default (props) => {
  if (!props.hasOwnProperty('cellPadding')) {
    return new Error(description);
  };
};
