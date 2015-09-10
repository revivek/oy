/**
 * MyImg:
 * My component wrapping OyImg and providing custom rules.
 */

import React from 'react';
import Oy from 'oy-vey';


export default React.createClass({
  displayName: 'MyImg',

  propTypes: {
    src: Oy.PropTypes.rules(['SrcAbsoluteURLRule']),
  },

  getDefaultProps: function() {
    return {
      border: '0'
    };
  },

  render: function() {
    return <Oy.Element type="img" {...this.props} />;
  }
});
