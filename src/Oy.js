/**
 * Oy:
 * Exposes `renderTemplate` functionality, along with `Element`, and `PropTypes`.
 * A base template to build emails with.
 *
 * Based on guidelines here:
 * https://github.com/centralcollegenottingham/HTML-Email-Boilerplate-Redux/blob/master/htmlemail-boilerplate-stable-with-guidelines.html
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import objectAssign from 'object-assign';
import sanitizer from 'sanitizer';
import CleanCSS from 'clean-css';

import HTML4 from './utils/HTML4';
import CSS from './utils/CSS';
import Element from './components/Element';
import {Table, TBody, TD, TR, Img, A} from './components/DefaultElement';


const renderTemplateUnsafe = (options, generateCustomTemplate) => {
  console.warn(
    'Accepting bodyContent as an option is deprecated and will be removed ' +
    'in the next minor release. Instead, pass the top-level ReactElement ' +
    'as the first parameter, i.e. Oy.renderTemplate(<Template />, options)'
  );
  return generateCustomTemplate ? (
    generateCustomTemplate(options)
  ) : HTML4.generateDefaultTemplate(options);
};

const renderTemplateSafe = (element, options, generateCustomTemplate) => {
  const bodyContent = ReactDOMServer.renderToStaticMarkup(element);
  const minifiedHeadCSS = new CleanCSS().minify(options.headCSS).styles;
  options = objectAssign({}, {
    lang: sanitizer.escape(options.lang),
    dir: sanitizer.escape(options.dir),
    title: sanitizer.escape(options.title),
    previewText: sanitizer.escape(options.previewText),
    headCSS: CSS.raiseOnUnsafeCSS(minifiedHeadCSS, 'headCSS')
  }, {bodyContent: bodyContent});
  return generateCustomTemplate ? (
    generateCustomTemplate(options)
  ) : HTML4.generateDefaultTemplate(options);
};


export default {
  Element: Element,
  Table: Table,
  TBody: TBody,
  TD: TD,
  TR: TR,
  Img: Img,
  A: A,

  PropTypes: {
    rules: (ruleNames) => {
      return (props, propName, componentName) => {
        return ruleNames
          .map((ruleName) => {
            if (typeof ruleName === 'string' || ruleName instanceof String) {
              return require(`./rules/${ruleName}`)(props, propName, componentName);
            } else {
              return ruleName;
            }
          })
          .filter((error) => error instanceof Error)
          [0];
      };
    }
  },

  renderTemplate: function(options, generateCustomTemplate) {
    let rawHTML = React.isValidElement(arguments[0]) ? (
      renderTemplateSafe(...arguments)
    ) : renderTemplateUnsafe(...arguments);

    const html = HTML4.replaceWhitelistedAttributes(rawHTML);
    const bytes = Buffer.byteLength(html, 'utf8');

    if (bytes > 1024 * 100) {
      console.warn(
        `Email output is ${Math.round(bytes / 1024)}KB. ` +
        'It is recommended to keep the delivered HTML to smaller ' +
        'than 100KB, to avoid getting emails cut off or rejected due to spam.'
      );
    }

    return html;
  }
};
