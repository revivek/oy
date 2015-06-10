/**
 * FullWidthTableRule
 */

export default {
  name: 'FullWidthTableRule',
  description: 'Gmail may strip out width attributes, so in cases where we want to stretch 100% provide a style fallback.',

  validate: function(props) {
    const style = props.style || {};
    return !(props.width === '100%' && style.width !== '100% !important');
  },

  autocorrect: function(props) {
    var newProps = props || {};
    newProps.style = newProps.style || {};
    newProps.style.width = '100% !important';
    return newProps;
  }
};

