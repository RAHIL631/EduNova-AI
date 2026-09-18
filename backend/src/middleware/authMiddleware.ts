import { Response, NextFunction } from 'express';
import { verifyToken } from '../utils/generateToken';
import { User } from '../models/User';
import { AuthenticatedRequest } from '../types/auth';

export const protect = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token: string | undefined;

  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  } else if (req.headers['x-access-token']) {
    token = req.headers['x-access-token'] as string;
  }

  if (!token) {
    res.status(401).json({
      success: false,
      message: 'Access denied. Authentication token is missing.',
    });
    return;
  }

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Invalid session. User no longer exists.',
      });
      return;
    }

    req.userId = decoded.id;
    req.user = user.toObject();
    next();
  } catch (err: any) {
    res.status(401).json({
      success: false,
      message: 'Invalid or expired authentication token. Please log in again.',
    });
  }
};