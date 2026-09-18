export interface User {
  _id: string;
  name: string;
  email: string;
  educationLevel: string;
  subjects: string[];
  learningGoals: string[];
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  educationLevel: string;
  subjects?: string[];
  learningGoals?: string[];
  avatar?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: User;
    token: string;
  };
  errors?: Array<{ field: string; message: string }>;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any;
}