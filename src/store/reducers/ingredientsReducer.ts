import {IngredientsReducerAction} from "../actions";
import {IngredientsActionType} from "../action-types";
import {Ingredient} from "../../api/services/IngredientsService";


export interface IngredientsReducerState {
    isLoaded: boolean
    data: { [id: string]: Ingredient }
}

const reducer = (state: IngredientsReducerState = {
    isLoaded: false,
    data: {}
}, action: IngredientsReducerAction): IngredientsReducerState => {
    switch (action.type) {
        case IngredientsActionType.FETCH_START:
            state.isLoaded = false
            return state
        case IngredientsActionType.FETCH_SUCCESS:
            for (const ingredient of action.payload)
            state.data[ingredient.id] = ingredient
            state.isLoaded = true
            return state
        case IngredientsActionType.FETCH_ERROR:
            state.isLoaded = false
            return state
        default:
            return state
    }
}

export default reducer