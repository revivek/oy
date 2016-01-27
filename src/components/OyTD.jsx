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
        is
        align={this.props.align}
        valign={this.props.vAlign}
        background={this.props.background}
        bgcolor={this.props.bgColor}>
        {this.props.children}
      </td>
    );
  }
});

