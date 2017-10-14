import React from 'react';

import Layout from './layouts/Layout.jsx';

import Header from './modules/Header.jsx';
import Body from './modules/Body.jsx';
import Footer from './modules/Footer.jsx';


export class HelloWorldEmail extends React.Component {
  render() {
    return (
      <Layout>
        <Header color="#134ac0" />

        <Body>
          Hey there, hope you’re finding Oy useful!
        </Body>

        <Footer color="#134ac0" />
      </Layout>
    );
  }
}
