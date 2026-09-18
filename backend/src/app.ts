import express, { Express } from 'express';
import cors from 'cors';
import { corsOptions } from './config/cors';
import healthRoutes from './routes/healthRoutes';
import authRoutes from './routes/authRoutes';
import tutorRoutes from './routes/tutorRoutes';
import quizRoutes from './routes/quizRoutes';
import assignmentRoutes from './routes/assignmentRoutes';
import plannerRoutes from './routes/plannerRoutes';
import progressRoutes from './routes/progressRoutes';
import recommendationRoutes from './routes/recommendationRoutes';
import { notFoundHandler, errorHandler } from './middleware/errorMiddleware';

const app: Express = express();

// Global Middlewares
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Base routes
app.use('/health', healthRoutes);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/tutor', tutorRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/assignment', assignmentRoutes);
app.use('/api/planner', plannerRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Root fallback / landing info
app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'EduNova AI API Server',
    version: '1.0.0',
    documentation: '/health for service status, /api/auth for authentication',
  });
});

// 404 handler
app.use(notFoundHandler);

// Central error handler
app.use(errorHandler);

export default app;