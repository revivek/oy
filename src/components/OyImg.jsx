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
        data-border={this.props.border}
        data-align={this.props.align} />
    );
  }
});
