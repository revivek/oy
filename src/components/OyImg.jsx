import React from 'react';


export default React.createClass({
  displayName: 'OyImg',

  propTypes: {
    border: React.PropTypes.string,
    align: React.PropTypes.string
  },

  render: function() {
    return (
      <img {...this.props}
        is
        border={this.props.border}
        align={this.props.align} />
    );
  }
});
