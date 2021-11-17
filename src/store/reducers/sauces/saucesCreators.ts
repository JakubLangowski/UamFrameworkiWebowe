import {Dispatch} from "redux";
import {SaucesActionType, SaucesReducerAction} from "./saucesActions";
import SauceService from "../../../api/services/SauceService";

export const fetchSauces = () => {
    return async (dispatch: Dispatch<SaucesReducerAction>) => {
        dispatch({type: SaucesActionType.FETCH_START})

        SauceService.getAll()
            .then(response => {
                dispatch({
                    type: SaucesActionType.FETCH_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => dispatch({
                type: SaucesActionType.FETCH_ERROR,
                payload: error
            }))
    }
}