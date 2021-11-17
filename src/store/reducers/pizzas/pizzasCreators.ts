import {Dispatch} from "redux";
import PizzaService from "../../../api/services/PizzaService";
import {PizzasActionType, PizzasReducerAction} from "./pizzasActions";

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