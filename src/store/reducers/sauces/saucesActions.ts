import {Sauce} from "../../../api/services/SauceService";


export enum SaucesActionType {
    FETCH_START = "Sauces_fetch_start",
    FETCH_SUCCESS = "Sauces_fetch_success",
    FETCH_ERROR = "Sauces_fetch_error",
}

interface FetchSaucesReducerAction {
    type: SaucesActionType.FETCH_START
}

interface FetchSuccessSaucesReducerAction {
    type: SaucesActionType.FETCH_SUCCESS,
    payload: Sauce[]
}

interface FetchErrorSaucesReducerAction {
    type: SaucesActionType.FETCH_ERROR,
    payload: any
}

export type SaucesReducerAction = FetchSaucesReducerAction | FetchSuccessSaucesReducerAction | FetchErrorSaucesReducerAction
