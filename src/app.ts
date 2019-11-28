import express from 'express';
import http from 'http';

import expressLoader from './loaders/express';
import mongooseLoader from './loaders/mongoose';
import config from './config';

async function startServer() {
  const expressApp = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/

  const mongoConnection = await mongooseLoader(config);
  console.log('MongoDB Intialized');
  const app = await expressLoader({
    app: expressApp,
    config
  });
  console.log('Express Intialized');

  const server = http.createServer(app);

  server.listen(config.port);

  server.on('listening', () => {
    console.log(`Connecting to port ${config.port}`);
  });
}

startServer();
