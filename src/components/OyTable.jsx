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
        data-oy-align={this.props.align}
        data-oy-bgcolor={this.props.bgColor}
        data-oy-valign={this.props.vAlign}>
        {this.props.children}
      </table>
    );
  }
});
