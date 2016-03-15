import React from 'react';
import Oy from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


const {Table, TBody, TD, TR} = Oy;

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
  color: React.PropTypes.string.isRequired
};


export default Header;
