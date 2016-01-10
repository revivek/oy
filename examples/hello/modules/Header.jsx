import React from 'react';

import EmptySpace from './EmptySpace.jsx';

import {MyTable, MyTD, MyTR} from '../elements/My';


export default React.createClass({
  displayName: 'Header',

  propTypes: {
    color: React.PropTypes.string.isRequired
  },

  render: function() {
    const style = {
      color: this.props.color,
      fontWeight: 'bold'
    };

    return (
      <MyTable
        width="100%"
        height="120"
        color={this.props.color}>
        <MyTR>
          <MyTD>
            <EmptySpace height={50} />

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

            <EmptySpace height={50} />
          </MyTD>
        </MyTR>
      </MyTable>
    );
  }
});
