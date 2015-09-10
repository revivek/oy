/**
 * MyTD:
 * My component wrapping OyTD and providing custom rules.
 */

import React from 'react';
import Oy from 'oy-vey';


export default React.createClass({
  displayName: 'MyTD',

  propTypes: {
    bgColor: Oy.PropTypes.rules(['SixCharacterHexBackgroundColorRule'])
  },

  render: function() {
    return <Oy.Element type="td" {...this.props} />;
  }
});
