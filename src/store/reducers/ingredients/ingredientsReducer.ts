import {Ingredient} from "../../../api/services/IngredientsService";
import {IngredientsActionType, IngredientsReducerAction} from "./ingredientsActions";

export interface IngredientsReducerState {
    isLoaded: boolean
    isLoading: boolean
    data: { [id: string]: Ingredient }
}

const reducer = (state: IngredientsReducerState = {
    isLoaded: false,
    isLoading: false,
    data: {}
}, action: IngredientsReducerAction): IngredientsReducerState => {
    switch (action.type) {
        case IngredientsActionType.FETCH_START:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: true
            })
        case IngredientsActionType.FETCH_SUCCESS:
            const tempIngredients: { [id: string]: Ingredient } = {}
            for (const ingredient of action.payload) {
                tempIngredients[ingredient.id] = ingredient
            }
            return Object.assign({}, state, {
                isLoaded: true,
                isLoading: false,
                data: tempIngredients
            })
        case IngredientsActionType.FETCH_ERROR:
            return Object.assign({}, state, {
                isLoaded: false,
                isLoading: false
            })
        default:
            return state
    }
}

export default reducer