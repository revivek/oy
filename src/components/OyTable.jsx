import React from 'react';


export default React.createClass({
  displayName: 'OyTable',

  propTypes: {
    align: React.PropTypes.string,
    vAlign: React.PropTypes.string,
    bgColor: React.PropTypes.string
  },

  render: function() {
    return (
      <table {...this.props}
        is
        align={this.props.align}
        bgcolor={this.props.bgColor}
        valign={this.props.vAlign}>
        {this.props.children}
      </table>
    );
  }
});
