/**
 * OyTD:
 * TODO: Once React allows more graceful custom attributes, add the HTML4 attributes back in.
 */

import React from 'react';


export default React.createClass({
  displayName: 'OyTD',

  propTypes: {
    align: React.PropTypes.string,
    vAlign: React.PropTypes.string,
    background: React.PropTypes.string,
    bgColor: React.PropTypes.string
  },

  render: function() {
    return (
      <td {...this.props}
        data-align={this.props.align}
        data-valign={this.props.vAlign}
        data-background={this.props.background}
        data-bgcolor={this.props.bgColor}>
        {this.props.children}
      </td>
    );
  }
});

