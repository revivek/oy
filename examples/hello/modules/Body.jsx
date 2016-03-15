import React from 'react';
import Oy from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


const {Table, TBody, TR, TD} = Oy;


export default (props) => {
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
            {props.children}
            <EmptySpace height={200} />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};
