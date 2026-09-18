import { Request, Response } from 'express';

export const plannerPlaceholder = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Study Planner module endpoint placeholder. AI study planner will be connected in next phase.',
    module: 'planner',
  });
};