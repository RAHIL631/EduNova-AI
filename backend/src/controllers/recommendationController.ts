import { Request, Response } from 'express';

export const recommendationPlaceholder = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Recommendation engine endpoint placeholder. AI recommendation service will be connected in next phase.',
    module: 'recommendation',
  });
};