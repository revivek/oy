import React from 'react';


export default React.createClass({
  displayName: 'OyTR',

  render: function() {
    return (
      <tr {...this.props}>
        {this.props.children}
      </tr>
    );
  }
});
