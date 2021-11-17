import {Pizza} from "../../../api/services/PizzaService";

export enum PizzasActionType {
    FETCH_START = "pizzas_fetch_start",
    FETCH_SUCCESS = "pizzas_fetch_success",
    FETCH_ERROR = "pizzas_fetch_error",
}

interface FetchPizzasReducerAction {
    type: PizzasActionType.FETCH_START
}

interface FetchSuccessPizzasReducerAction {
    type: PizzasActionType.FETCH_SUCCESS,
    payload: Pizza[]
}

interface FetchErrorPizzasReducerAction {
    type: PizzasActionType.FETCH_ERROR,
    payload: any
}

export type PizzasReducerAction = FetchPizzasReducerAction | FetchSuccessPizzasReducerAction | FetchErrorPizzasReducerAction
