import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export interface LogoutActionType {
  type: string;
  navigate: NavigateFunction;
}

export const logoutAction = (navigate: NavigateFunction) => ({
  type: types.LOGOUT,
  navigate
})
