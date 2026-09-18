import { Router } from 'express';
import { plannerPlaceholder } from '../controllers/plannerController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', protect, plannerPlaceholder);
router.post('/generate', protect, plannerPlaceholder);

export default router;