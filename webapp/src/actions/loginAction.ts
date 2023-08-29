import * as types from './actionsTypes';

export interface LoginActionType {
  type: string
  username: string;
  password: string;
}

export const loginAction = (username: string, password: string) => ({
  type: types.LOGIN,
  username,
  password,
})
