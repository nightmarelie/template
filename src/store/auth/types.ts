import { User } from 'services/users';

// actions
const ROOT = 'auth';
const LOGIN_ACTION = `${ROOT}/login`;
const LOGOUT_ACTION = `${ROOT}/logout`;

// state
export type State = {
  user: null | User;
  token: null | string;
  isLoading: boolean;
  error: null | string;
};

// types
export type UserResponse = {
  user: null | User;
  token: null | string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type ValidationError = {
  message: string;
  path: string[];
};

export {
  User,
  // actions
  ROOT,
  LOGIN_ACTION,
  LOGOUT_ACTION,
};
