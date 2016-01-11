import React from 'react';

import EmptySpace from './EmptySpace.jsx';

import {MyTable, MyTD, MyTR} from '../elements/My';


export default React.createClass({
  displayName: 'Body',

  render: function() {
    const textStyle = {
      color: '#42444c',
      backgroundColor: '#eeeeee',
      fontFamily: 'Arial',
      fontSize: '18px'
    };

    return (
      <MyTable
        width="100%">
        <MyTR>
          <MyTD
            align="center"
            style={textStyle}>
            <EmptySpace height={200} />
            {this.props.children}
            <EmptySpace height={200} />
          </MyTD>
        </MyTR>
      </MyTable>
    );
  }
});
