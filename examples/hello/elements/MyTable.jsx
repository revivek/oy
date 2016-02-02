/**
 * MyTable:
 * My component wrapping OyTable and providing custom rules.
 */

import React from 'react';
import Oy from 'oy-vey';


export default React.createClass({
  displayName: 'MyTable',

  propTypes: {
    bgColor: Oy.PropTypes.rules(['SixCharacterHexBackgroundColorRule']),
    border: Oy.PropTypes.rules(['TableBorderRule']),
    cellPadding: Oy.PropTypes.rules(['TableCellPaddingRule']),
    cellSpacing: Oy.PropTypes.rules(['TableCellSpacingRule'])
  },

  getDefaultProps: function() {
    return {
      border: '0',
      cellPadding: '0',
      cellSpacing: '0'
    };
  },

  render: function() {
    return <Oy.Element tagName="table" {...this.props} />;
  }
});
