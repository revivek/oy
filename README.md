# Oy

*Emails, oy vey!*

React components and utilities for server-side HTML email template construction.

## Installation

```
npm install --save-dev oy
```

## Architecture

Oy is a layer of abstraction in between React and your own components. It provides a React
mixin that reads developer-defined rules (we provide many best-practices already), then 
validates, notifies, and autocorrects against those rules.

#### TODO: Picture

## Example usage

1. Components to build emails
2. Rules for validation and autocorrection
3. Utilities for server-side rendering

### 1. Components to build emails

```
// MyImg

import React from 'react';

import {Rule1, Rule2, Rule3} from './Rules';

import OyRulesMixin from 'oy/mixins/OyRulesMixin';

import OyImg from 'oy/components/OyImg.jsx';


export default React.createClass({
  mixins: [OyMixin],

  // Rules to validate and autocorrect against
  rules: [
    Rule1,
    Rule2,
    Rule3
  ],

  // OyMixin defines `render` which wraps `element`.
  element: 'img'
});
```

### 2. Rules for validation and autocorrection

```
// Rule1

export default {
  name: 'Rule1',
  description: 'Force dark grey background color. See www.example.com',
  validate: (props) => false,
  autocorrect: (props) => {
    props.bgColor = '#42444c';
    return props;
  }
};
```

### 3. Utilities for server-side rendering

Using Express.js:

```
import express from 'express';

// React only writes HTML5 and certain SVG attributes, so we need to transform the attributes before serving.
import Oy from 'oy';

var server = express();
server.set('port', (process.env.PORT || 8887));

server.get('/email/:emailName', (req, res) => {
  const emailName = req.params.emailName;
  const EmailRegistry = require('./apps/EmailRegistry');
  const Email = EmailRegistry[emailName];
  if (!Email) {
    res.send(`Email with name ${emailName} not found`);
  } else {
    const template = Oy.renderTemplate({
      title: 'Oyster',
      headCSS: headCSS,
      bodyContent: React.renderToStaticMarkup(email)
    });
    res.send(template);
  }
});

server.listen(server.get('port'), () => {
  console.log('Node server is running on port', server.get('port'));
});
```


### TODO

- [ ] Bring HTML4 transformation into `Oy.renderTemplate`
- [ ] Consider post-`render` rule validation.
- [ ] Custom logging during warning.
- [ ] Ability to provide a default base template.
