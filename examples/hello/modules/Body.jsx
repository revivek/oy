import React from 'react';

import EmptySpace from './EmptySpace.jsx';


export default (props) => {
  const textStyle = {
    color: '#42444c',
    backgroundColor: '#eeeeee',
    fontFamily: 'Arial',
    fontSize: '18px'
  };

  return (
    <table width="100%">
      <tbody>
        <tr>
          <td
            align="center"
            style={textStyle}>
            <EmptySpace height={200} />
            {props.children}
            <EmptySpace height={200} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
