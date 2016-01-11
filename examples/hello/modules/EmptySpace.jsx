/**
 * EmptySpace:
 * Table-based way to add vertical space. Uses line-height.
 */

import React from 'react';

import {MyTable, MyTD, MyTR} from '../elements/My';


export default React.createClass({
  displayName: 'EmptySpace',

  getDefaultProps: function() {
    return {
      height: '16'
    };
  },

  render: function() {
    const style = {
      lineHeight: `${this.props.height}px`,
      fontSize: '1px',
      msoLineHeightRule: 'exactly'
    };

    return (
      <MyTable
        width="100%">

        <MyTR>
          <MyTD
            width="100%"
            height={`${this.props.height}px`}
            style={style}
            dangerouslySetInnerHTML={{__html: '&nbsp;'}} />
        </MyTR>
      </MyTable>
    );
  }
});
