const attributeWhitelist = [
  {
    regex: /data-align/g,
    replacement: 'align'
  },
  {
    regex: /data-valign/g,
    replacement: 'valign'
  },
  {
    regex: /data-background/g,
    replacement: 'background'
  },
  {
    regex: /data-bgcolor/g,
    replacement: 'bgcolor'
  }
];


export default {
  replaceWhitelistedAttributes: (html) => {
    return attributeWhitelist.reduce((previousHTML, attribute) => {
      return previousHTML.replace(attribute.regex, attribute.replacement)
    }, html);
  }
};

