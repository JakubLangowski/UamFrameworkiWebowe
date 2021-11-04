import {IngredientsActionType, PizzasActionType} from "../action-types";
import {Dispatch} from "redux";
import PizzaService, {Pizza} from "../../api/services/PizzaService";
import IngredientsService, {Ingredient} from "../../api/services/IngredientsService";
import {IngredientsReducerAction, PizzasReducerAction} from "../actions";


export const fetchPizzas = () => {
    return async (dispatch: Dispatch<PizzasReducerAction>) => {
        dispatch({type: PizzasActionType.FETCH_START})

        PizzaService.getAll()
            .then(response => {
                dispatch({
                    type: PizzasActionType.FETCH_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => dispatch({
                type: PizzasActionType.FETCH_ERROR,
                payload: error
            }))
    }
}

export const fetchIngredients = () => {
    return (dispatch: Dispatch<IngredientsReducerAction>) => {
        dispatch({type: IngredientsActionType.FETCH_START})

        IngredientsService.getAll()
            .then(response => {
                dispatch({
                    type: IngredientsActionType.FETCH_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => dispatch({
                type: IngredientsActionType.FETCH_ERROR,
                payload: error
            }))
    }
}