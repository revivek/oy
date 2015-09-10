import React from 'react';

import {MyTable, MyTD, MyTR} from '../elements/My';


export default React.createClass({
  displayName: 'Body',

  render: function() {
    const textStyle = {
      color: '#42444c',
      fontFamily: 'Arial',
      fontSize: '18px'
    };

    return (
      <MyTable width="100%" height="400">
        <MyTR>
          <MyTD
            align="center"
            style={textStyle}>
            {this.props.children}
          </MyTD>
        </MyTR>
      </MyTable>
    );
  }
});
