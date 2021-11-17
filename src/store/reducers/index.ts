import { combineReducers } from 'redux'
import pizzaReducer from "./pizzas/pizzasReducer";
import ingredientsReducer from "./ingredients/ingredientsReducer";
import cartReducer from "./cart/cartReducer";
import saucesReducer from "./sauces/saucesReducer";

const reducers = combineReducers({
    pizzas: pizzaReducer,
    ingredients: ingredientsReducer,
    cart: cartReducer,
    sauces: saucesReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>