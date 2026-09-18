import { Router } from 'express';
import { quizPlaceholder } from '../controllers/quizController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', protect, quizPlaceholder);
router.post('/generate', protect, quizPlaceholder);
router.post('/submit', protect, quizPlaceholder);

export default router;