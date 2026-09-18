import { Router } from 'express';
import { tutorPlaceholder } from '../controllers/tutorController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', protect, tutorPlaceholder);
router.post('/chat', protect, tutorPlaceholder);

export default router;