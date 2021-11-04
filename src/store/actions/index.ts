import {IngredientsActionType, PizzasActionType} from "../action-types";
import {Pizza} from "../../api/services/PizzaService";
import {Ingredient} from "../../api/services/IngredientsService";

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


interface FetchIngredientsReducerAction {
    type: IngredientsActionType.FETCH_START,
}

interface FetchSuccessIngredientsReducerAction {
    type: IngredientsActionType.FETCH_SUCCESS,
    payload: Ingredient[]
}

interface FetchErrorIngredientsReducerAction {
    type: IngredientsActionType.FETCH_ERROR,
    payload: any
}

export type IngredientsReducerAction = FetchIngredientsReducerAction | FetchSuccessIngredientsReducerAction | FetchErrorIngredientsReducerAction