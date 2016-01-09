/**
 * MyTR:
 * My component wrapping OyTR and providing custom rules.
 */

import React from 'react';
import Oy from 'oy-vey';


export default React.createClass({
  displayName: 'MyTR',

  propTypes: {
    bgColor: Oy.PropTypes.rules(['SixCharacterHexBackgroundColorRule'])
  },

  render: function() {
    return <Oy.Element type="tr" {...this.props} />;
  }
});
