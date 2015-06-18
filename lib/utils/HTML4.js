'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var attributeWhitelist = [{
  regex: /data-align/g,
  replacement: 'align'
}, {
  regex: /data-valign/g,
  replacement: 'valign'
}, {
  regex: /data-background/g,
  replacement: 'background'
}, {
  regex: /data-bgcolor/g,
  replacement: 'bgcolor'
}];

exports['default'] = {
  replaceWhitelistedAttributes: function replaceWhitelistedAttributes(html) {
    return attributeWhitelist.reduce(function (previousHTML, attribute) {
      return previousHTML.replace(attribute.regex, attribute.replacement);
    }, html);
  }
};
module.exports = exports['default'];