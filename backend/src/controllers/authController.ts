import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { generateToken } from '../utils/generateToken';
import { sendSuccess, sendError } from '../utils/apiResponse';
import { AuthenticatedRequest, RegisterDTO, LoginDTO } from '../types/auth';

/**
 * Register a new user
 * POST /api/auth/register
 */
export const register = async (
  req: Request<{}, {}, RegisterDTO>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password, educationLevel, subjects, learningGoals, avatar } = req.body;

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      sendError(res, 'An account with this email address already exists.', 400);
      return;
    }

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password,
      educationLevel,
      subjects: subjects || [],
      learningGoals: learningGoals || [],
      avatar: avatar || '',
    });

    const token = generateToken(user._id.toString());
    const userJson = user.toJSON();

    sendSuccess(
      res,
      'Registration successful! Welcome to EduNova AI.',
      {
        user: userJson,
        token,
      },
      201
    );
  } catch (err: any) {
    next(err);
  }
};

/**
 * Login user with email and password
 * POST /api/auth/login
 */
export const login = async (
  req: Request<{}, {}, LoginDTO>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    // Find user and explicitly select password field
    const user = await User.findOne({ email: normalizedEmail }).select('+password');
    if (!user) {
      sendError(res, 'Invalid email or password.', 401);
      return;
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      sendError(res, 'Invalid email or password.', 401);
      return;
    }

    const token = generateToken(user._id.toString());
    const userJson = user.toJSON();

    sendSuccess(res, 'Login successful.', {
      user: userJson,
      token,
    });
  } catch (err: any) {
    next(err);
  }
};

/**
 * Get current authenticated user
 * GET /api/auth/me
 */
export const getCurrentUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.userId) {
      sendError(res, 'Unauthorized.', 401);
      return;
    }

    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      sendError(res, 'User not found.', 404);
      return;
    }

    sendSuccess(res, 'User profile retrieved successfully.', {
      user: user.toJSON(),
    });
  } catch (err: any) {
    next(err);
  }
};

/**
 * Logout user
 * POST /api/auth/logout
 */
export const logout = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    sendSuccess(res, 'Successfully logged out.');
  } catch (err: any) {
    next(err);
  }
};