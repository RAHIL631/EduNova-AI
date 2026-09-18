import { Request, Response } from 'express';

export const tutorPlaceholder = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'AI Tutor module endpoint placeholder. AI integration will be connected in next phase.',
    module: 'tutor',
  });
};