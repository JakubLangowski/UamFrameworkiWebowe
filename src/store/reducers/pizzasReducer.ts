import {Pizza} from "../../api/services/PizzaService";
import {PizzasReducerAction} from "../actions";
import {PizzasActionType} from "../action-types";


export interface PizzaReducerState {
    isLoaded: boolean
    data: Pizza[]
}

const reducer = (state: PizzaReducerState = {
    isLoaded: false,
    data: []
}, action: PizzasReducerAction): PizzaReducerState => {
    switch (action.type) {
        case PizzasActionType.FETCH_START:
            state.isLoaded = false
            return state
        case PizzasActionType.FETCH_SUCCESS:
            state.data = action.payload
            state.isLoaded = true
            return state
        case PizzasActionType.FETCH_ERROR:
            state.isLoaded = false
            return state
        default:
            return state
    }
}

export default reducer