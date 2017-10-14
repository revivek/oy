import Oy from 'oy-vey';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import {HelloWorldEmail} from './HelloWorldEmail.jsx';


const server = express();
server.set('port', (process.env.PORT || 8887));


server.get('/', (req, res) => {
  const html = Oy.renderTemplate(<HelloWorldEmail />, {
    title: 'This is an example',
    previewText: 'This is an example'
  });

  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.send(html);
});


server.listen(server.get('port'), () => {
  console.log('Node server is running on port', server.get('port'));
});
