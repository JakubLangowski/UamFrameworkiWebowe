import {Pizza} from "../../../api/services/PizzaService";
import {Sauce} from "../../../api/services/SauceService";
import {Ingredient} from "../../../api/services/IngredientsService";

export enum CartActionType {
    ADD = "cart_add",
    DELETE = "cart_delete",
    ADD_SAUCE = "cart_add_sauce",
    DELETE_SAUCE = "cart_delete_sauce",
    TOGGLE_INGREDIENT = "cart_toggle_ingredient",
    CLEAR_CART = "cart_clear",
    LOCK_CART = "cart_lock",
    UNLOCK_CART = "cart_unlock"
}

export interface AddToCartReducerAction {
    type: CartActionType.ADD,
    payload: {
        pizza: Pizza,
        ingredients: { [key: string]: Ingredient }
    }
}

export interface DeleteFromCartReducerAction {
    type: CartActionType.DELETE,
    payload: string
}

export interface AddSauceToCartReducerAction {
    type: CartActionType.ADD_SAUCE,
    payload: Sauce
}

export interface DeleteSauceFromCartReducerAction {
    type: CartActionType.DELETE_SAUCE,
    payload: Sauce
}

export interface ToggleIngredientInCartPizzaReducerAction {
    type: CartActionType.TOGGLE_INGREDIENT,
    payload: {
        cartPizzaId: string
        ingredient: Ingredient,
    }
}

export interface CartClearReducerAction {
    type: CartActionType.CLEAR_CART
}

export interface LockCartReducerAction {
    type: CartActionType.LOCK_CART
}

export interface UnlockCartReducerAction {
    type: CartActionType.UNLOCK_CART
}

export type CartReducerAction =
AddToCartReducerAction | DeleteFromCartReducerAction |
AddSauceToCartReducerAction | DeleteSauceFromCartReducerAction |
ToggleIngredientInCartPizzaReducerAction | CartClearReducerAction |
LockCartReducerAction | UnlockCartReducerAction