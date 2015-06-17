/**
 * OyMixin:
 * Runs rules and may autocorrect mistakes.
 */

import React from 'react';
import assign from 'object-assign';

import OyImg from '../components/OyImg.jsx';
import OyTable from '../components/OyTable.jsx';
import OyTD from '../components/OyTD.jsx';


const OY_COMPONENTS = {
  'img': OyImg,
  'table': OyTable,
  'td': OyTD
};

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

    const element = OY_COMPONENTS.hasOwnProperty(this.element) ? OY_COMPONENTS[this.element] : this.element;
    return React.createElement(element, newProps, this.props.children);
  }
};
