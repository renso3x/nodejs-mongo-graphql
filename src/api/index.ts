import { Router } from 'express';
import roomRoute from './routes/room';

// guaranteed to get dependencies
export default () => {
  const app = Router();

  app.use('/rooms', roomRoute);
  return app;
};
