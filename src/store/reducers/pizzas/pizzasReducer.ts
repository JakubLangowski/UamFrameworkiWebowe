import {Pizza} from "../../../api/services/PizzaService";
import {PizzasActionType, PizzasReducerAction} from "./pizzasActions";

export interface PizzaReducerState {
    isLoaded: boolean
    isLoading: boolean
    data: Pizza[]
}

const reducer = (state: PizzaReducerState = {
    isLoaded: false,
    isLoading: false,
    data: []
}, action: PizzasReducerAction): PizzaReducerState => {
    switch (action.type) {
        case PizzasActionType.FETCH_START:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: true
            })
        case PizzasActionType.FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                data: action.payload
            })
        case PizzasActionType.FETCH_ERROR:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: false
            })
        default:
            return state
    }
}

export default reducer