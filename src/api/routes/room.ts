import { Router, Request, Response } from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
  return res.json({ rooms: [] }).status(200);
});

export default route;
