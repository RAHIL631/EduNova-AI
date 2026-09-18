export interface ValidationError {
  field: string;
  message: string;
}

export const validateRegisterInput = (data: any): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!data || typeof data !== 'object') {
    return [{ field: 'body', message: 'Request body must be a valid JSON object' }];
  }

  // Name validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Full name is required' });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters long' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email address is required' });
  } else if (!emailRegex.test(data.email.trim())) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Password validation
  if (!data.password || typeof data.password !== 'string') {
    errors.push({ field: 'password', message: 'Password is required' });
  } else if (data.password.length < 6) {
    errors.push({ field: 'password', message: 'Password must be at least 6 characters long' });
  }

  // Education Level validation
  const validLevels = ['School', 'PUC', 'Diploma', 'Undergraduate', 'Postgraduate', 'Other'];
  if (!data.educationLevel || typeof data.educationLevel !== 'string') {
    errors.push({ field: 'educationLevel', message: 'Education level is required' });
  } else if (!validLevels.includes(data.educationLevel)) {
    errors.push({
      field: 'educationLevel',
      message: `Education level must be one of: ${validLevels.join(', ')}`,
    });
  }

  return errors;
};

export const validateLoginInput = (data: any): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!data || typeof data !== 'object') {
    return [{ field: 'body', message: 'Request body must be a valid JSON object' }];
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email address is required' });
  } else if (!emailRegex.test(data.email.trim())) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  if (!data.password || typeof data.password !== 'string') {
    errors.push({ field: 'password', message: 'Password is required' });
  }

  return errors;
};