import React from 'react';
import PropTypes from 'prop-types';
import {Table, TBody, TD, TR} from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


const Header = (props) => {
  const style = {
    color: props.color,
    fontWeight: 'bold'
  };

  return (
    <Table
      width="100%"
      height="120"
      color={props.color}>
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
                    style={{color: props.color, fontFamily: 'Arial'}}>
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
};

Header.propTypes = {
  color: PropTypes.string.isRequired
};


export default Header;
