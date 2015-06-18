'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  name: 'TableBorderCellPaddingCellSpacingRule',
  description: 'Email clients may provide their own table sizing properties, so it is good practice to specify these attributes on every table.',

  validate: function validate(props) {
    return !!(props.cellPadding && props.cellSpacing && props.border);
  },

  autocorrect: function autocorrect(props) {
    if (!props.cellPadding) {
      props.cellPadding = '0';
    }

    if (!props.cellSpacing) {
      props.cellSpacing = '0';
    }

    if (!props.border) {
      props.border = '0';
    }

    return props;
  }
};
module.exports = exports['default'];