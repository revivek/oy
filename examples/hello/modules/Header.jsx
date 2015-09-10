import React from 'react';

import {MyTable, MyTD, MyTR} from '../elements/My';


export default React.createClass({
  displayName: 'Header',

  propTypes: {
    color: React.PropTypes.string.isRequired
  },

  render: function() {
    const style = {
      height: 120,
      color: this.props.color,
      borderBottom: '2px solid #92949c',
      fontWeight: 'bold'
    };

    return (
      <MyTable
        width="100%"
        height="120"
        color={this.props.color}
        style={style}>
        <MyTR>
          <MyTD>

            {/* Text area, could be another component, i.e. HeroText */}
            <MyTable width="100%">
              <MyTR>
                <MyTD
                  align="center"
                  style={{color: this.props.color, fontFamily: 'Arial'}}>
                  Logo here
                </MyTD>
              </MyTR>
            </MyTable>


          </MyTD>
        </MyTR>
      </MyTable>
    );
  }
});
