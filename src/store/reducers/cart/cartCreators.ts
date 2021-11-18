import {Dispatch} from "redux";
import {CartActionType, CartReducerAction} from "./cartActions";
import {Pizza} from "../../../api/services/PizzaService";
import {Sauce} from "../../../api/services/SauceService";
import {Ingredient} from "../../../api/services/IngredientsService";


export const addToCart = (pizza: Pizza, ingredients: { [key: string] : Ingredient }) => {
    return (dispatch: Dispatch<CartReducerAction>) => {
        dispatch({
            type: CartActionType.ADD,
            payload: {
                pizza: pizza,
                ingredients: ingredients
            }
        })
    }
}

export const removeFromCart = (cartItemId: number) => {
    return (dispatch: Dispatch<CartReducerAction>) => {
        dispatch({
            type: CartActionType.DELETE,
            payload: cartItemId
        })
    }
}

export const toggleIngredientInPizza = (pizzaId: number, ingredient: Ingredient) => {
    return (dispatch: Dispatch<CartReducerAction>) => {
        dispatch({
            type: CartActionType.TOGGLE_INGREDIENT,
            payload: {
               pizzaId: pizzaId,
               ingredient: ingredient
            }
        })
    }
}

export const addSauceToCart = (sauce: Sauce) => {
    return (dispatch: Dispatch<CartReducerAction>) => {
        dispatch({
            type: CartActionType.ADD_SAUCE,
            payload: sauce
        })
    }
}

export const removeSauceFromCart = (sauce: Sauce) => {
    return (dispatch: Dispatch<CartReducerAction>) => {
        dispatch({
            type: CartActionType.DELETE_SAUCE,
            payload: sauce
        })
    }
}


export const clearCart = () => {
    return (dispatch: Dispatch<CartReducerAction>) => {
        dispatch({
            type: CartActionType.CLEAR_CART
        })
    }
}

export const lockCart = () => {
    return (dispatch: Dispatch<CartReducerAction>) => {
        dispatch({
            type: CartActionType.LOCK_CART
        })
    }
}

export const unlockCart = () => {
    return (dispatch: Dispatch<CartReducerAction>) => {
        dispatch({
            type: CartActionType.UNLOCK_CART
        })
    }
}