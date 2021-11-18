import {Sauce} from "../../../api/services/SauceService";
import {SaucesActionType, SaucesReducerAction} from "./saucesActions";

export interface SauceReducerState {
    isLoaded: boolean
    isLoading: boolean
    data: Sauce[]
}

const reducer = (state: SauceReducerState = {
    isLoaded: false,
    isLoading: false,
    data: []
}, action: SaucesReducerAction): SauceReducerState => {
    switch (action.type) {
        case SaucesActionType.FETCH_START:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: true
            })
        case SaucesActionType.FETCH_SUCCESS:
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                data: action.payload
            })
        case SaucesActionType.FETCH_ERROR:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: false
            })
        default:
            return state
    }
}

export default reducer