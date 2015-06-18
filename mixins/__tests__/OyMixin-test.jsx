import assert from 'assert';
import React from 'react';

import OyMixin from '../OyMixin';


describe('OyMixin', function() {
  it('should throw errors on improper component configuration', function() {
    const NoRules = React.createClass({
      mixins: [OyMixin],
      element: 'table'
    });
    assert.throws(() => React.renderToStaticMarkup(<NoRules />), Error);

    const NoElement = React.createClass({
      mixins: [OyMixin],
      rules: []
    });
    assert.throws(() => React.renderToStaticMarkup(<NoRules />), Error);

    const RuleNoName = {
      description: 'foo',
      validate: () => true,
      autocorrect: (props) => props
    };
    const RulesNoName = React.createClass({
      mixins: [OyMixin],
      rules: [RuleNoName],
      element: 'table'
    });
    assert.throws(() => React.renderToStaticMarkup(<NoRules />), Error);

    const RuleNoDescription = {
      name: 'foo',
      validate: () => true,
      autocorrect: (props) => props
    };
    const RulesNoDescription = React.createClass({
      mixins: [OyMixin],
      rules: [RuleNoDescription],
      element: 'table'
    });
    assert.throws(() => React.renderToStaticMarkup(<NoRules />), Error);

    const RuleNoValidate = {
      name: 'foo',
      description: 'bar',
      autocorrect: (props) => props
    };
    const RulesNoValidate = React.createClass({
      mixins: [OyMixin],
      rules: [RuleNoValidate],
      element: 'table'
    });
    assert.throws(() => React.renderToStaticMarkup(<NoRules />), Error);

    const RuleNoAutocorrect = {
      name: 'foo',
      description: 'bar',
      validate: () => false
    };
    const RulesNoAutocorrect = React.createClass({
      mixins: [OyMixin],
      rules: [RuleNoAutocorrect],
      element: 'table'
    });
    assert.throws(() => React.renderToStaticMarkup(<NoRules />), Error);
  });

  it('should run validate then autocorrect', function() {
    let hasValidated = false;
    let correctOrder = false;

    const Rule1 = {
      name: 'Rule1',
      description: 'foo',
      validate: () => {
        hasValidated = true;
        return false;
      },
      autocorrect: (props) => {
        if (hasValidated) {
          correctOrder = true;
        }
        return props;
      }
    };

    const A = React.createClass({
      mixins: [OyMixin],
      element: 'table',
      rules: [Rule1]
    });

    React.renderToStaticMarkup(<A />);
    assert.equal(correctOrder, true); 
  });
});
