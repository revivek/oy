import React from 'react';

import EmptySpace from './EmptySpace.jsx';

import {MyTable, MyTD, MyTR} from '../elements/My';


export default React.createClass({
  displayName: 'Footer',

  propTypes: {
    color: React.PropTypes.string.isRequired
  },

  render: function() {
    const style = {
      color: this.props.color,
      backgroundColor: '#dddddd',
    };

    const spaceStyle = {
      lineHeight: '1px',
      fontSize: '1px'
    };

    return (
      <MyTable
        width="100%"
        style={style}>

        <MyTR>
          <MyTD><EmptySpace height="20" /></MyTD>
          <MyTD><EmptySpace height="20" /></MyTD>
          <MyTD><EmptySpace height="20" /></MyTD>
          <MyTD><EmptySpace height="20" /></MyTD>
          <MyTD><EmptySpace height="20" /></MyTD>
        </MyTR>

        <MyTR>
          <MyTD
            height="1"
            width="20"
            style={spaceStyle}>&nbsp;</MyTD>

          <MyTD>
            <MyTable width="270">
              <MyTR>
                <MyTD
                  align="center"
                  bgColor="#EEEEEE"
                  style={{fontFamily: 'Arial'}}>

                  <EmptySpace height="10" />

                  <a
                    style={{color: this.props.color, fontWeight: 'bold', textDecoration: 'none'}}
                    href="https://example.com">Our blog</a>

                  <EmptySpace height="10" />
                </MyTD>
              </MyTR>
            </MyTable>
          </MyTD>

          <MyTD
            height="1"
            width="20"
            style={spaceStyle}>&nbsp;</MyTD>

          <MyTD>
            <MyTable width="270">
              <MyTR>
                <MyTD
                  align="center"
                  bgColor="#EEEEEE"
                  style={{fontFamily: 'Arial'}}>

                  <EmptySpace height="10" />

                  <a
                    style={{color: this.props.color, fontWeight: 'bold', textDecoration: 'none'}}
                    href="https://example.com">About us</a>

                  <EmptySpace height="10" />
                </MyTD>
              </MyTR>
            </MyTable>
          </MyTD>

          <MyTD
            height="1"
            width="20"
            style={spaceStyle}>&nbsp;</MyTD>
        </MyTR>

        <MyTR>
          <MyTD><EmptySpace height="20" /></MyTD>
          <MyTD><EmptySpace height="20" /></MyTD>
          <MyTD><EmptySpace height="20" /></MyTD>
          <MyTD><EmptySpace height="20" /></MyTD>
          <MyTD><EmptySpace height="20" /></MyTD>
        </MyTR>
      </MyTable>
    );
  }
});
