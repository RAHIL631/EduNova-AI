import { Request, Response } from 'express';

export const progressPlaceholder = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Progress module endpoint placeholder. Analytics will be connected in next phase.',
    module: 'progress',
  });
};