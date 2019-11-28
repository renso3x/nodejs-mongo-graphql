import * as express from 'express';
import * as bodyParser from 'body-parser';

import routes from '../api';

export default ({ app, config }: { app: express.Application; config: any }) => {
  // Load API routes

  app.use(require('morgan')('dev'));
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

  app.use(config.api.prefix, routes());

  return app;
};
