import { Router, Request, Response } from 'express';
import { isDatabaseConnected } from '../config/database';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  const dbConnected = isDatabaseConnected();
  res.status(200).json({
    success: true,
    message: 'EduNova API is running',
    status: {
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      database: dbConnected ? 'connected' : 'disconnected',
    },
  });
});

export default router;