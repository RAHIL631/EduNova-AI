import { Request, Response, NextFunction } from 'express';
import { validateRegisterInput, validateLoginInput } from '../validators/authValidator';

export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validateRegisterInput(req.body);
  if (errors.length > 0) {
    res.status(400).json({
      success: false,
      message: errors[0].message,
      errors,
    });
    return;
  }
  next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validateLoginInput(req.body);
  if (errors.length > 0) {
    res.status(400).json({
      success: false,
      message: errors[0].message,
      errors,
    });
    return;
  }
  next();
};