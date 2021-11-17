import {Sauce} from "../../../api/services/SauceService";
import {SaucesActionType, SaucesReducerAction} from "./saucesActions";

export interface SauceReducerState {
    isLoaded: boolean
    data: Sauce[]
}

const reducer = (state: SauceReducerState = {
    isLoaded: false,
    data: []
}, action: SaucesReducerAction): SauceReducerState => {
    switch (action.type) {
        case SaucesActionType.FETCH_START:
            state.isLoaded = false
            return Object.assign({}, state)
        case SaucesActionType.FETCH_SUCCESS:
            state.data = action.payload
            state.isLoaded = true
            return Object.assign({}, state)
        case SaucesActionType.FETCH_ERROR:
            state.isLoaded = false
            return Object.assign({}, state)
        default:
            return state
    }
}

export default reducer