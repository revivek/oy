/**
 * OyMixin:
 * Runs rules and may autocorrect mistakes.
 */

import assign from 'object-assign';


const defaultWarn = (brokenRule, componentName) => {
  console.warn(`Validation failed in <${componentName} />: ${brokenRule.description}`);
};


export default {
  componentWillMount: function() {
    if (!this.element) {
      throw new Error('this.element must be defined to use OyMixin.');
    }

    if (!this.rules) {
      throw new Error(`this.rules must be defined on <${this.constructor.displayName} /> to use OyMixin.`);
    } else {
      this.rules.forEach((rule) => {
        [
          'name',
          'description',
          'validate',
          'autocorrect'
        ].forEach((property) => {
          if (!rule.hasOwnProperty(property)) {
            throw new Error(`${property} must be defined on ${rule.name} rule to use OyMixin.`);
          }
        });
      });
    }
  },

  render: function() {
    const newProps = (
      this.rules
        .filter((rule) => {
          const ruleIsBroken = !rule.validate(this.props);
          const warn = rule.warn || defaultWarn;
          if (ruleIsBroken) {
            warn(rule, this.constructor.displayName);
          }
          return ruleIsBroken;
        })
        .reduce((props, brokenRule) => brokenRule.autocorrect(props), assign({}, this.props))
    );

    return React.createElement(this.element, newProps, this.props.children);
  }
};
