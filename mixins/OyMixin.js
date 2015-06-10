/**
 * OyMixin:
 * Runs rules and may autocorrect mistakes.
 */

import assign from 'object-assign';

import OyComponents from '../utils/OyComponents';


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
          const ruleIsBroken = rule.validate(this.props) === false;
          const warn = rule.warn || defaultWarn;
          if (ruleIsBroken) {
            warn(rule, this.constructor.displayName);
          }
          return ruleIsBroken;
        })
        .reduce((props, brokenRule) => brokenRule.autocorrect(props), assign({}, this.props))
    );

    const element = OyComponents.hasOwnProperty(this.element) ? OyComponents[this.element] : this.element;
    return React.createElement(element, newProps, this.props.children);
  }
};
