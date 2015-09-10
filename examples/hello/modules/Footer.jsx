import React from 'react';

import {MyTable, MyTD, MyTR} from '../elements/My';


export default React.createClass({
  displayName: 'Footer',

  propTypes: {
    color: React.PropTypes.string.isRequired
  },

  render: function() {
    const style = {
      color: this.props.color,
      height: 120,
      borderTop: '2px solid #92949c'
    };

    const spaceStyle = {
      lineHeight: '1px',
      fontSize: '1px'
    };

    return (
      <MyTable
        width="100%"
        height="120"
        style={style}>
        <MyTR>

          <MyTD
            height="1"
            width="20"
            style={spaceStyle}>&nbsp;</MyTD>

          <MyTD>
            <MyTable width="260">
              <MyTR>
                <MyTD
                  align="center"
                  bgColor="#EEEEEE"
                  style={{fontFamily: 'Arial'}}>

                  {/* This spacer element can be turned into a component. */}
                  <MyTable>
                    <MyTR>
                      <MyTD
                        height="10"
                        style={spaceStyle}>&nbsp;</MyTD>
                    </MyTR>
                  </MyTable>

                  <a
                    style={{color: this.props.color, fontWeight: 'bold', textDecoration: 'none'}}
                    href="https://example.com">Our blog</a>

                  <MyTable>
                    <MyTR>
                      <MyTD
                        height="10"
                        style={spaceStyle}>&nbsp;</MyTD>
                    </MyTR>
                  </MyTable>

                </MyTD>
              </MyTR>
            </MyTable>
          </MyTD>

          <MyTD
            height="1"
            width="40"
            style={spaceStyle}>&nbsp;</MyTD>

          <MyTD>
            <MyTable width="260">
              <MyTR>
                <MyTD
                  align="center"
                  bgColor="#EEEEEE"
                  style={{fontFamily: 'Arial'}}>

                  <MyTable>
                    <MyTR>
                      <MyTD
                        height="10"
                        style={spaceStyle}>&nbsp;</MyTD>
                    </MyTR>
                  </MyTable>

                  <a
                    style={{color: this.props.color, fontWeight: 'bold', textDecoration: 'none'}}
                    href="https://example.com">About us</a>

                  <MyTable>
                    <MyTR>
                      <MyTD
                        height="10"
                        style={spaceStyle}>&nbsp;</MyTD>
                    </MyTR>
                  </MyTable>
                </MyTD>
              </MyTR>
            </MyTable>
          </MyTD>

          <MyTD
            height="1"
            width="20"
            style={spaceStyle}>&nbsp;</MyTD>
        </MyTR>
      </MyTable>
    );
  }
});
