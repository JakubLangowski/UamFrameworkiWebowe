import { combineReducers } from 'redux'
import pizzaReducer from "./pizzasReducer";
import ingredientsReducer from "./ingredientsReducer";

const reducers = combineReducers({
    pizzas: pizzaReducer,
    ingredients: ingredientsReducer
})

export default reducers

export type State = ReturnType<typeof reducers>