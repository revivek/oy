/**
 * Oy:
 * Exposes `renderTemplate` functionality, along with `Element`, and `PropTypes`.
 * A base template to build emails with.
 *
 * Based on guidelines here:
 * https://github.com/centralcollegenottingham/HTML-Email-Boilerplate-Redux/blob/master/htmlemail-boilerplate-stable-with-guidelines.html
 */

import HTML4 from './utils/HTML4';
import Element from './components/Element';


export default {
  Element: Element,

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

  renderTemplate: (options, generateCustomTemplate) => {
    const rawHTML = (
      generateCustomTemplate ? generateCustomTemplate(options) : HTML4.generateDefaultTemplate(options)
    );

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
