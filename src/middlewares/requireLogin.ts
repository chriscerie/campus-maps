import type { Request, Response } from 'express';

const requireLogin = (req: Request, res: Response, next: () => void): void => {
  if (req.user) {
    next();
  } else {
    res.status(401).send({ error: 'You must be logged in.' });
  }
};

export default requireLogin;
