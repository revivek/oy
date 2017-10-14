'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  generateDefaultTemplate: function generateDefaultTemplate(_ref) {
    var title = _ref.title,
        bodyContent = _ref.bodyContent,
        previewText = _ref.previewText,
        _ref$headCSS = _ref.headCSS,
        headCSS = _ref$headCSS === undefined ? '' : _ref$headCSS,
        _ref$bgColor = _ref.bgColor,
        bgColor = _ref$bgColor === undefined ? '#FFFFFF' : _ref$bgColor,
        lang = _ref.lang,
        _ref$dir = _ref.dir,
        dir = _ref$dir === undefined ? 'ltr' : _ref$dir;

    if (!title) {
      throw new Error('`title` is a required option for `renderTemplate`');
    } else if (!bodyContent) {
      throw new Error('`bodyContent` is a required option for `renderTemplate`');
    } else if (!previewText) {
      throw new Error('`previewText` is a required option for `renderTemplate`');
    }

    return '\n      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n      <html\n        ' + (lang ? 'lang="' + lang + '"' : '') + '\n        dir="' + dir + '"\n        xmlns="http://www.w3.org/1999/xhtml"\n        xmlns:v="urn:schemas-microsoft-com:vml"\n        xmlns:o="urn:schemas-microsoft-com:office:office">\n        <head>\n          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n          <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n          <meta name="viewport" content="width=device-width"/>\n\n          <title>' + title + '</title>\n\n          <style type="text/css">\n            ' + headCSS + '\n\n            #__bodyTable__ {\n              margin: 0;\n              padding: 0;\n              width: 100% !important;\n            }\n          </style>\n\n          <!--[if gte mso 9]>\n            <xml>\n              <o:OfficeDocumentSettings>\n                <o:AllowPNG/>\n                <o:PixelsPerInch>96</o:PixelsPerInch>\n              </o:OfficeDocumentSettings>\n            </xml>\n          <![endif]-->\n        </head>\n        <body bgcolor="' + bgColor + '" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:' + bgColor + ';-webkit-text-size-adjust:none; margin:0; padding:0; min-width:100%; direction: ' + dir + ';">\n          <table bgcolor="' + bgColor + '" id="__bodyTable__" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:' + bgColor + ';-webkit-text-size-adjust:none; margin:0; padding:0; min-width:100%">\n            <tr>\n              <td align="center">\n                <span style="display: none !important; color: ' + bgColor + '; margin:0; padding:0; font-size:1px; line-height:1px;">' + previewText + '</span>\n                ' + bodyContent + '\n              </td>\n            </tr>\n          </table>\n        </body>\n      </html>\n    ';
  }
};