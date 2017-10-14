export default {
  generateDefaultTemplate: ({
    title,
    bodyContent,
    previewText,
    headCSS = '',
    bgColor = '#FFFFFF',
    lang,
    dir = 'ltr' /* https://www.w3.org/TR/html4/struct/dirlang.html#blocklevel-bidi */}) => {
    if (!title) {
      throw new Error('`title` is a required option for `renderTemplate`');
    } else if (!bodyContent) {
      throw new Error('`bodyContent` is a required option for `renderTemplate`');
    } else if (!previewText) {
      throw new Error('`previewText` is a required option for `renderTemplate`');
    }

    return `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html
        ${lang ? 'lang="' + lang + '"' : ''}
        dir="${dir}"
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width"/>

          <title>${title}</title>

          <style type="text/css">
            ${headCSS}

            #__bodyTable__ {
              margin: 0;
              padding: 0;
              width: 100% !important;
            }
          </style>

          <!--[if gte mso 9]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          <![endif]-->
        </head>
        <body bgcolor="${bgColor}" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:${bgColor};-webkit-text-size-adjust:none; margin:0; padding:0; min-width:100%; direction: ${dir};">
          <table bgcolor="${bgColor}" id="__bodyTable__" width="100%" style="-webkit-font-smoothing: antialiased; width:100% !important; background:${bgColor};-webkit-text-size-adjust:none; margin:0; padding:0; min-width:100%">
            <tr>
              <td align="center">
                <span style="display: none !important; color: ${bgColor}; margin:0; padding:0; font-size:1px; line-height:1px;">${previewText}</span>
                ${bodyContent}
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
  }
};
