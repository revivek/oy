import React from 'react';
import {Table, TBody, TD, TR} from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


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
      <Table
        width="100%"
        height="120"
        color={this.props.color}>
        <TBody>
          <TR>
            <TD>
              <EmptySpace height={50} />

              {/* Text area, could be another component, i.e. HeroText */}
              <Table width="100%">
                <TBody>
                  <TR>
                    <TD
                      align="center"
                      style={{color: this.props.color, fontFamily: 'Arial'}}>
                      Logo here
                    </TD>
                  </TR>
                </TBody>
              </Table>

              <EmptySpace height={50} />
            </TD>
          </TR>
        </TBody>
      </Table>
    );
  }
});
