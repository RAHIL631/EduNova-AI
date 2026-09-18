import { env } from '../config/env';
import { logger } from '../utils/logger';

/**
 * AI Service Integration Layer
 * 
 * This service acts as the contract abstraction between the Node.js backend
 * and Rihan's FastAPI AI Service running at AI_SERVICE_URL.
 * 
 * Pipeline Flow:
 * Frontend Client -> Express Backend -> FastAPI AI Service -> LLM Provider
 */
export class AIService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = env.AI_SERVICE_URL;
  }

  /**
   * Health check for AI service
   */
  async checkHealth(): Promise<{ status: string; url: string }> {
    logger.info(`[AIService] Checking health at ${this.baseUrl}/health`);
    return {
      status: 'pending_fastapi_connection',
      url: this.baseUrl,
    };
  }

  /**
   * Contract stub for AI Tutor chat
   */
  async askTutor(params: {
    userId: string;
    question: string;
    subject?: string;
    educationLevel?: string;
  }): Promise<{ response: string; references?: string[] }> {
    logger.info(`[AIService] AI Tutor query received from user: ${params.userId}`);
    throw new Error('FastAPI AI Tutor endpoint will be connected in Phase 2.');
  }

  /**
   * Contract stub for AI Quiz generation
   */
  async generateQuiz(params: {
    subject: string;
    topic: string;
    difficulty: string;
    numQuestions: number;
    educationLevel?: string;
  }): Promise<{ quizId: string; questions: any[] }> {
    logger.info(`[AIService] AI Quiz generation requested for ${params.subject} - ${params.topic}`);
    throw new Error('FastAPI AI Quiz generator will be connected in Phase 2.');
  }

  /**
   * Contract stub for AI Assignment generation
   */
  async generateAssignment(params: {
    subject: string;
    topic: string;
    difficulty: string;
    educationLevel?: string;
  }): Promise<{ assignmentId: string; questions: any[] }> {
    logger.info(`[AIService] AI Assignment generation requested for ${params.subject}`);
    throw new Error('FastAPI AI Assignment generator will be connected in Phase 2.');
  }

  /**
   * Contract stub for AI Study Planner
   */
  async generateStudyPlan(params: {
    userId: string;
    subjects: string[];
    availableHoursPerDay: number;
    targetDate: string;
  }): Promise<{ planId: string; schedule: any[] }> {
    logger.info(`[AIService] AI Study Plan generation requested for user: ${params.userId}`);
    throw new Error('FastAPI AI Study Planner will be connected in Phase 2.');
  }

  /**
   * Contract stub for AI Recommendation Engine
   */
  async getRecommendations(params: {
    userId: string;
    weakTopics: string[];
    performanceScore: number;
  }): Promise<{ recommendations: string[] }> {
    logger.info(`[AIService] AI Recommendations requested for user: ${params.userId}`);
    throw new Error('FastAPI Recommendation engine will be connected in Phase 2.');
  }
}

export const aiService = new AIService();
export default aiService;