import {Pizza} from "../../../api/services/PizzaService";
import {Sauce} from "../../../api/services/SauceService";
import {Ingredient} from "../../../api/services/IngredientsService";

export enum CartActionType {
    ADD = "cart_add",
    DELETE = "cart_delete",
    ADD_SAUCE = "cart_add_sauce",
    DELETE_SAUCE = "cart_delete_sauce",
    TOGGLE_INGREDIENT = "cart_toggle_ingredient",
    CHECKOUT_START = "cart_checkout_start",
    CHECKOUT_SUCCESS = "cart_checkout_success",
    CHECKOUT_ERROR = "cart_checkout_error",
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
    payload: number
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
        pizzaId: number
        ingredient: Ingredient,
    }
}

export interface CheckoutStartReducerAction {
    type: CartActionType.CHECKOUT_START
}

export interface CheckoutSuccessReducerAction {
    type: CartActionType.CHECKOUT_SUCCESS
}

export interface CheckoutErrorReducerAction {
    type: CartActionType.CHECKOUT_ERROR
}


export type CartReducerAction =
    AddToCartReducerAction | DeleteFromCartReducerAction |
    AddSauceToCartReducerAction | DeleteSauceFromCartReducerAction |
    ToggleIngredientInCartPizzaReducerAction | CheckoutStartReducerAction |
    CheckoutSuccessReducerAction | CheckoutErrorReducerAction