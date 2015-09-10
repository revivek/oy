import React from 'react';

import {MyTable, MyTD, MyTR} from '../elements/My';


export default React.createClass({
  displayName: 'MyLayout',

  render: function() {
    return (
      <MyTable
        width="100%"
        align="center"
        style={{WebkitTextSizeAdjust: '100%', msTextSizeAdjust: '100%', msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', margin: '0px auto'}}>

        <MyTR>
          <MyTD align="center">

            {/* Centered column */}
            <MyTable
              width="600"
              align="center"
              style={{WebkitTextSizeAdjust: '100%', msTextSizeAdjust: '100%', msoTableLspace: '0pt', msoTableRspace: '0pt', borderCollapse: 'collapse', margin: '0px auto'}}>
              <MyTR>
                <MyTD>
                  {this.props.children}
                </MyTD>
              </MyTR>
            </MyTable>

          </MyTD>
        </MyTR>

        <MyTR>
          <MyTD>
            {/* We don't care to run validation on this img tag, so leave as is. */}
            <img
              src="https://example.com/tracker"
              height="1"
              style={{display: 'block', height: '1px', width: '1px'}} />
          </MyTD>
        </MyTR>
      </MyTable>
    );
  }
});

