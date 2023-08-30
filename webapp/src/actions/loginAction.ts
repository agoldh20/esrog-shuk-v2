import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export interface LoginActionType {
  type: string
  username: string;
  password: string;
  navigate: NavigateFunction;
}

export const loginAction = (username: string, password: string, navigate: NavigateFunction) => ({
  type: types.LOGIN,
  username,
  password,
  navigate,
})
