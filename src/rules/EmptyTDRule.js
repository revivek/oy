const description = (
  'Outlook 2013 renders empty cells with a 15px height, ' +
  'so it is necessary to provide font-size and line-height style props. ' +
  'See https://www.campaignmonitor.com/blog/email-marketing/2012/08/' +
  'outlook-2013-says-no-to-empty-table-cells/'
);

const isEmpty = (children, dangerouslySetInnerHTML) => {
  if (typeof children === 'string' ||
      children instanceof String) {
    return 0 === children.replace(/\s+/g, '').replace(/&nbsp;/, '').length;
  }

  if (dangerouslySetInnerHTML !== null &&
      typeof dangerouslySetInnerHTML === 'object') {
    if (dangerouslySetInnerHTML.hasOwnProperty('__html')) {
      return 0 === (
        dangerouslySetInnerHTML
          .__html
          .replace(/\s+/g, '')
          .replace(/&nbsp;/g, '')
          .length
      );
    }
  }

  if (Array.isArray(children)) {
    return 0 === (
      children
        .join('')
        .replace(/\s+/g, '')
        .replace(/&nbsp;/g, '')
        .length
    );
  } else if (children !== null && typeof children === 'object') {
    return false;
  }

  return true;
};

export default (props) => {
  if (isEmpty(props.children, props.dangerouslySetInnerHTML)) {
    if (props.hasOwnProperty('style')) {
      if (!props.style.hasOwnProperty('fontSize') ||
          !props.style.hasOwnProperty('lineHeight')) {
        return new Error(description);
      }
    } else {
      return new Error(description);
    }
  }
};
