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
        data-oy-border={this.props.border}
        data-oy-align={this.props.align} />
    );
  }
});

