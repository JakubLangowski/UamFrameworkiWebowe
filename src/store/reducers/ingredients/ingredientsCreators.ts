import {Dispatch} from "redux";
import IngredientsService from "../../../api/services/IngredientsService";
import {IngredientsActionType, IngredientsReducerAction} from "./ingredientsActions";

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