import { Router } from 'express';
import { register, login, getCurrentUser, logout } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';
import { validateRegister, validateLogin } from '../middleware/validationMiddleware';
import { authLimiter } from '../middleware/rateLimitMiddleware';

const router = Router();

router.post('/register', authLimiter, validateRegister, register);
router.post('/login', authLimiter, validateLogin, login);
router.get('/me', protect, getCurrentUser);
router.post('/logout', logout);

export default router;