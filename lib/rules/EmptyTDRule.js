'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var description = 'Outlook 2013 renders empty cells with a 15px height, ' + 'so it is necessary to provide font-size and line-height style props. ' + 'See https://www.campaignmonitor.com/blog/email-marketing/2012/08/' + 'outlook-2013-says-no-to-empty-table-cells/';

var isEmpty = function isEmpty(children, dangerouslySetInnerHTML) {
  if (typeof children === 'string' || children instanceof String) {
    return 0 === children.replace(/\s+/g, '').replace(/&nbsp;/, '').length;
  }

  if (dangerouslySetInnerHTML !== null && (typeof dangerouslySetInnerHTML === 'undefined' ? 'undefined' : _typeof(dangerouslySetInnerHTML)) === 'object') {
    if (dangerouslySetInnerHTML.hasOwnProperty('__html')) {
      return 0 === dangerouslySetInnerHTML.__html.replace(/\s+/g, '').replace(/&nbsp;/g, '').length;
    }
  }

  if (Array.isArray(children)) {
    return 0 === children.join('').replace(/\s+/g, '').replace(/&nbsp;/g, '').length;
  } else if (children !== null && (typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object') {
    return false;
  }

  return true;
};

exports.default = function (props) {
  if (isEmpty(props.children, props.dangerouslySetInnerHTML)) {
    if (props.hasOwnProperty('style')) {
      if (!props.style.hasOwnProperty('fontSize') || !props.style.hasOwnProperty('lineHeight')) {
        return new Error(description);
      }
    } else {
      return new Error(description);
    }
  }
};