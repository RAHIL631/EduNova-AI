import api from '../lib/api';
import { User, LoginRequest, RegisterRequest, AuthResponse, ApiResponse } from '../types/user';

export const authService = {
  /**
   * Register a new user account
   */
  async register(data: RegisterRequest): Promise<AuthResponse> {
    try {
      const res = await api.post<AuthResponse>('/api/auth/register', data);
      return res.data;
    } catch (err: any) {
      if (err.response?.data) {
        return err.response.data;
      }
      return {
        success: false,
        message: err.message || 'Network error during registration.',
      };
    }
  },

  /**
   * Login with email and password
   */
  async login(data: LoginRequest): Promise<AuthResponse> {
    try {
      const res = await api.post<AuthResponse>('/api/auth/login', data);
      return res.data;
    } catch (err: any) {
      if (err.response?.data) {
        return err.response.data;
      }
      return {
        success: false,
        message: err.message || 'Network error during login.',
      };
    }
  },

  /**
   * Fetch current authenticated user profile
   */
  async getCurrentUser(): Promise<ApiResponse<{ user: User }>> {
    try {
      const res = await api.get<ApiResponse<{ user: User }>>('/api/auth/me');
      return res.data;
    } catch (err: any) {
      if (err.response?.data) {
        return err.response.data;
      }
      return {
        success: false,
        message: err.message || 'Failed to retrieve user profile.',
      };
    }
  },

  /**
   * Logout user from backend session
   */
  async logout(): Promise<ApiResponse> {
    try {
      const res = await api.post<ApiResponse>('/api/auth/logout');
      return res.data;
    } catch (err: any) {
      return {
        success: true,
        message: 'Logged out locally.',
      };
    }
  },
};

export default authService;