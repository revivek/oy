/**
 * MyTD:
 * My component wrapping OyTD and providing custom rules.
 */

import React from 'react';
import Oy from 'oy-vey';


export default React.createClass({
  displayName: 'MyTD',

  propTypes: {
    bgColor: Oy.PropTypes.rules(['SixCharacterHexBackgroundColorRule']),
    style: Oy.PropTypes.rules(['EmptyTDRule'])
  },

  render: function() {
    return <Oy.Element tagName="td" {...this.props} />;
  }
});
