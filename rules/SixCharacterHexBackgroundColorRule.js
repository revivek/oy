/**
 * SixCharacterHexBackgroundColorRule
 */

export default {
  name: 'SixCharacterHexBackgroundColorRule',
  description: 'Many email clients only support 6-character hex strings on the `bgcolor` attribute. See https://litmus.com/community/learning/21-background-colors-in-html-email',

  validate: function(props) {
    return props.bgColor ? /(^#[0-9A-F]{6}$)/i.test(props.bgColor) : true;
  },

  autocorrect: function(props) {
    if (/(^#[0-9A-F]{3}$)/i.test(props.bgColor)) {
      props.bgColor = (
        props.bgColor[0] +
        props.bgColor[1] + props.bgColor[1] +
        props.bgColor[2] + props.bgColor[2] +
        props.bgColor[3] + props.bgColor[3]
      );
    }
    return props;
  }
};

