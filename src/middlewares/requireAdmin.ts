import type { Request, Response } from 'express';

const requireLogin = (req: Request, res: Response, next: () => void): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (req.user.account_type === 'Admin') {
    next();
  } else {
    res.status(401).send({ error: 'You must be logged in.' });
  }
};

export default requireLogin;
