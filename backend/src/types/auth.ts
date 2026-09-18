import { Request } from 'express';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  educationLevel: string;
  subjects: string[];
  learningGoals: string[];
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthenticatedRequest extends Request {
  userId?: string;
  user?: any;
}

export interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  educationLevel: string;
  subjects?: string[];
  learningGoals?: string[];
  avatar?: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthResponseData {
  user: Omit<IUser, 'password'>;
  token: string;
}