import { Request, Response } from 'express';

export const quizPlaceholder = (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Quiz module endpoint placeholder. AI Quiz generator will be connected in next phase.',
    module: 'quiz',
  });
};