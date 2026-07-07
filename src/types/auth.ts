export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'OPERATOR' | 'ADMIN' | 'ROOT';
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  identity: AuthUser;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}