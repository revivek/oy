import React from 'react';
import PropTypes from 'prop-types';
import {Table, TBody, TR, TD, A} from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


const Footer = (props) => {
  const style = {
    color: props.color,
    backgroundColor: '#dddddd',
  };

  const spaceStyle = {
    lineHeight: '1px',
    fontSize: '1px'
  };

  return (
    <Table
      width="100%"
      style={style}>
      <TBody>

        <TR>
          <TD><EmptySpace height="20" /></TD>
          <TD><EmptySpace height="20" /></TD>
          <TD><EmptySpace height="20" /></TD>
          <TD><EmptySpace height="20" /></TD>
          <TD><EmptySpace height="20" /></TD>
        </TR>

        <TR>
          <TD
            height="1"
            width="20"
            style={spaceStyle}>&nbsp;</TD>

          <TD>
            <Table width="270">
              <TBody>
                <TR>
                  <TD
                    align="center"
                    bgcolor="#EEEEEE"
                    style={{fontFamily: 'Arial'}}>

                    <EmptySpace height="10" />

                    <A
                      style={{color: props.color, fontWeight: 'bold', textDecoration: 'none'}}
                      href="https://example.com">Our blog</A>

                    <EmptySpace height="10" />
                  </TD>
                </TR>
              </TBody>
            </Table>
          </TD>

          <TD
            height="1"
            width="20"
            style={spaceStyle}>&nbsp;</TD>

          <TD>
            <Table width="270">
              <TBody>
                <TR>
                  <TD
                    align="center"
                    bgcolor="#EEEEEE"
                    style={{fontFamily: 'Arial'}}>

                    <EmptySpace height="10" />

                    <A
                      style={{color: props.color, fontWeight: 'bold', textDecoration: 'none'}}
                      href="https://example.com">About us</A>

                    <EmptySpace height="10" />
                  </TD>
                </TR>
              </TBody>
            </Table>
          </TD>

          <TD
            height="1"
            width="20"
            style={spaceStyle}>&nbsp;</TD>
        </TR>

        <TR>
          <TD><EmptySpace height="20" /></TD>
          <TD><EmptySpace height="20" /></TD>
          <TD><EmptySpace height="20" /></TD>
          <TD><EmptySpace height="20" /></TD>
          <TD><EmptySpace height="20" /></TD>
        </TR>
      </TBody>
    </Table>
  );
};

Footer.propTypes = {
  color: PropTypes.string.isRequired
};


export default Footer;
