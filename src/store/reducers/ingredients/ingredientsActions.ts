import {Ingredient} from "../../../api/services/IngredientsService";

export enum IngredientsActionType {
    FETCH_START = "ingredients_fetch_start",
    FETCH_SUCCESS = "ingredients_fetch_success",
    FETCH_ERROR = "ingredients_fetch_error",
}

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