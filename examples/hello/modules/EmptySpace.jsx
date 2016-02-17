/**
 * EmptySpace:
 * Table-based way to add vertical space. Uses line-height.
 */

import React from 'react';
import {Table, TBody, TD, TR} from 'oy-vey';


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
      <Table width="100%">
        <TBody>
          <TR>
            <TD
              width="100%"
              height={`${this.props.height}px`}
              style={style}
              dangerouslySetInnerHTML={{__html: '&nbsp;'}} />
          </TR>
        </TBody>
      </Table>
    );
  }
});
