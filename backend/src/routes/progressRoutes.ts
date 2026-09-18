import { Router } from 'express';
import { progressPlaceholder } from '../controllers/progressController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', protect, progressPlaceholder);

export default router;