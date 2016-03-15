const isString = (value) => {
  return Object.prototype.toString.call(value) === '[object String]';
};


export default {
  // TODO(patelvivek): I don't like how this is organized.
  rules: (ruleNames) => {
    return (props, propName, componentName) => {
      return ruleNames
        .map((ruleName) => {
          if (isString(ruleName)) {
            return require(`../rules/${ruleName}`)(props, propName, componentName);
          } else {
            return ruleName;
          }
        })
        .filter((error) => error instanceof Error)
        [0];
    };
  }
};
