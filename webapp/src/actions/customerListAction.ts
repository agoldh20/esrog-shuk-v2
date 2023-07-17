import * as types from './actionsTypes';
import {NavigateFunction} from "react-router";

export type GetCustomerListActionType = {
    type: string;
    navigate: NavigateFunction;
}

export const getCustomerListAction = (navigate: NavigateFunction) => ({
    type: types.GET_CUSTOMER_LIST,
    navigate,
});
