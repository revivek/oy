import React from 'react';
import {Table, TBody, TD, TR} from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


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
      <Table width="100%">
        <TBody>
          <TR>
            <TD
              align="center"
              style={textStyle}>
              <EmptySpace height={200} />
              {this.props.children}
              <EmptySpace height={200} />
            </TD>
          </TR>
        </TBody>
      </Table>
    );
  }
});
