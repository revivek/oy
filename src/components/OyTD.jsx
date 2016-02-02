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
        data-oy-align={this.props.align}
        data-oy-valign={this.props.vAlign}
        data-oy-background={this.props.background}
        data-oy-bgcolor={this.props.bgColor}>
        {this.props.children}
      </td>
    );
  }
});

