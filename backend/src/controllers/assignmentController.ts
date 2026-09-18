import { Request, Response } from 'express';

export const assignmentPlaceholder = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Assignment module endpoint placeholder. AI assignment generator will be connected in next phase.',
    module: 'assignment',
  });
};