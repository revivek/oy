import React from 'react';

import MyLayout from './layouts/MyLayout.jsx';

import Header from './modules/Header.jsx';
import Body from './modules/Body.jsx';
import Footer from './modules/Footer.jsx';


export default React.createClass({
  displayName: 'MyLayout',

  render: function() {
    return (
      <MyLayout>
        <Header color="#134ac0" />

        <Body>
          Hey there, hope you’re finding Oy useful!
        </Body>

        <Footer color="#134ac0" />
      </MyLayout>
    );
  }
});
