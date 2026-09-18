import { Router } from 'express';
import { recommendationPlaceholder } from '../controllers/recommendationController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', protect, recommendationPlaceholder);

export default router;