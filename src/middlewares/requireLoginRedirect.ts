import type { Request, Response } from 'express';

const requireLoginRedirect = (
  req: Request,
  res: Response,
  next: () => void
): void => {
  if (req.user) {
    next();
  } else {
    res.redirect('/api/v1/auth/google');
  }
};

export default requireLoginRedirect;
