import { Router } from 'express';
import { assignmentPlaceholder } from '../controllers/assignmentController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.get('/', protect, assignmentPlaceholder);
router.post('/generate', protect, assignmentPlaceholder);

export default router;