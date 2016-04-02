# Oy [![npm version](https://badge.fury.io/js/oy-vey.svg)](http://badge.fury.io/js/oy-vey) [![Build Status](https://travis-ci.org/revivek/oy.svg?branch=master)](https://travis-ci.org/revivek/oy)

*Emails, oy vey!*

Render HTML emails on the server with React. Oy provides functionality to:

- Validate props against [email best-practices](https://github.com/revivek/oy/tree/master/src/rules) with `Oy` components.
- Render templates server-side with `Oy.renderTemplate`.

### Note: This is 1.0.0 release candidate code.

Its most significant departure from pre-`1.0` is the switch from opt-in
to opt-out validation. It significantly simplifies usage from not needing
to implement custom Oy components, but note, this decision may be rolled
back prior to `1.0.0` release.

You can view [0.6.1 code here](https://github.com/revivek/oy/tree/2170994ed51efacbbb9364fa21e886058f022c2a).

**Feedback request**: Try the [next](https://github.com/revivek/oy/tree/next) branch, which is slated for a 1.0.0-rc1 release. It aims to improve the library's usability. Open an issue with your feedback. Thanks!

## Installation

```
npm install --save oy-vey
```

## Example usage

### Build low-level components with HTML email attributes

```js
import React from 'react';

export default (props) => {
  return (
    <table width={props.maxWidth}>
      <tbody>
        <tr>
          <td align="center">
            {/*
              align is deprecated and would normally be stripped
              by React, but Oy lets us still use it! 
            */}
            {props.children}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
```

### Compose higher level components like usual

```js
import React from 'react';
import MyLayout from './layout/MyLayout.jsx';
import BodyText from './modules/BodyText.jsx';

export default (props) => {
  return (
    <MyLayout>
      <BodyText>Welcome to Oy!</BodyText>
    </MyLayout>
  );
};
```


### Inject rendered code into HTML skeleton with Oy.renderTemplate

For example, if using Express.js:

```js
import express from 'express';
import React from 'react';
import Oy from 'oy-vey';

import GettingStartedEmail from './templates/GettingStartedEmail.jsx';

const server = express();
server.set('port', (process.env.PORT || 8887));

server.get('/email/oy', (req, res) => {
  const template = Oy.renderTemplate(<GettingStartedEmail />, {
    title: 'Getting Started with Foo',
    headCSS: '@media ...',
    previewText: 'Here is your guide...'
  });
  res.send(template);
});

server.listen(server.get('port'), () => {
  console.log('Node server is running on port', server.get('port'));
});
```

## HTML attributes

In addition to the [attributes supported by React](https://facebook.github.io/react/docs/tags-and-attributes.html#html-attributes), these HTML attributes are additionally supported:

```
align background bgColor border vAlign
```

## Oy.renderTemplate API

`Oy.renderTemplate(<Template />, templateOptions)`

The `templateOptions` parameter is an object with the following fields:

```
title (string, required) - Used by clients if email is opened in a web page.
previewText (string, required) - Short description that appears in email clients
headCSS (string, optional) - CSS that belongs in `<head>`
lang (string, optional) - ISO language code
dir (string, optional) - Either 'ltr' or 'rtl'. 'ltr' is the default
```

## Contributing

```
# Test
npm test

# Compile from ES6 in src/ to ES5 in lib/
npm run compile
```

We welcome contributions. If there's some information missing or ideas for how to make Oy better, please
send a pull request, file an issue, or email [1.vivekpatel@gmail.com](mailto:1.vivekpatel@gmail.com).

The best place to start would be in contributing new rules. [A running wishlist of email validation rules are in the Issues section](https://github.com/oysterbooks/oy/issues?q=is%3Aopen+is%3Aissue+label%3A%22rule+wishlist%22).
