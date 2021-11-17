import {
    CartActionType,
    ToggleIngredientInCartPizzaReducerAction, AddSauceToCartReducerAction, AddToCartReducerAction,
    CartReducerAction, DeleteFromCartReducerAction,
    DeleteSauceFromCartReducerAction
} from "./cartActions";

export interface CartPizza {
    id: string
    name: string
    price: number
    totalPrice: number
}

export interface CartIngredient {
    id: string
    name: string
    price: number
    default: boolean
    active: boolean
}

interface CartReducerState {
    checkoutInProgress: boolean
    total: number,
    pizzas: Record<number, {
        pizza: CartPizza,
        ingredients: Record<string, CartIngredient>
    }>
    sauces: Record<string, number>
}

function addPizza(state: CartReducerState, action: AddToCartReducerAction) : CartReducerState {

    const keys = Object.keys(state.pizzas);

    console.log(action.payload)

    const cartPizza: CartPizza = {
        id: action.payload.pizza.id,
        name: action.payload.pizza.name,
        price: action.payload.pizza.price,
        totalPrice: action.payload.pizza.price
    }
    const cartIngredients: Record<string, CartIngredient> = {}

    for (const id in action.payload.ingredients ) {
        cartIngredients[id] = {
            id: action.payload.ingredients[id].id,
            name: action.payload.ingredients[id].name,
            price: action.payload.ingredients[id].price,
            default: false,
            active: false
        }
    }

    for (const ingredientId of action.payload.pizza.ingredients) {
        cartIngredients[ingredientId].default = true
        cartIngredients[ingredientId].active = true
    }

    let newKey = 1;

    if (keys.length !== 0) {
        newKey = parseInt(keys[keys.length - 1]) + 1
    }

    state.pizzas[newKey] = {
        pizza: cartPizza,
        ingredients: cartIngredients
    }

    state.total += action.payload.pizza.price
    return state;
}

function deletePizza(state: CartReducerState, action: DeleteFromCartReducerAction) : CartReducerState {
    if (typeof state.pizzas[action.payload] !== "undefined") {
        const currentItem = state.pizzas[action.payload];
        state.total -= currentItem.pizza.price
        for (const ingredientId in currentItem.ingredients) {
            if (currentItem.ingredients[ingredientId].active && !currentItem.ingredients[ingredientId].default) {
                state.total -= currentItem.ingredients[ingredientId].price
            }
        }
        delete state.pizzas[action.payload]
    }
    return state;
}

function toggleIngredient(state: CartReducerState, action: ToggleIngredientInCartPizzaReducerAction): CartReducerState {
    if (typeof state.pizzas[action.payload.pizzaId] !== "undefined") {
        const currentItem = state.pizzas[action.payload.pizzaId];
        const editedIngredient = currentItem.ingredients[action.payload.ingredient.id];
        if (typeof editedIngredient !== "undefined") {
            if (editedIngredient.active) {
                if (!editedIngredient.default) {
                    state.total -= editedIngredient.price
                    currentItem.pizza.totalPrice -= editedIngredient.price
                }
                editedIngredient.active = false
            } else {
                if (!editedIngredient.default) {
                    state.total += editedIngredient.price
                    currentItem.pizza.totalPrice += editedIngredient.price
                }
                editedIngredient.active = true
            }
        }
    }
    return state;
}

function addSauce(state: CartReducerState, action: AddSauceToCartReducerAction): CartReducerState {
    if (typeof state.sauces[action.payload.id] !== "undefined") {
        state.sauces[action.payload.id] += 1;
    } else {
        state.sauces[action.payload.id] = 1
    }
    state.total += action.payload.price

    return state;
}

function deleteSauce(state: CartReducerState, action: DeleteSauceFromCartReducerAction): CartReducerState {
    if (typeof state.sauces[action.payload.id] !== "undefined") {
        if (state.sauces[action.payload.id] > 0) {
            state.sauces[action.payload.id] -= 1;
            state.total -= action.payload.price
        }
    }
    return state;
}

const reducer = (state: CartReducerState = {
    checkoutInProgress: false,
    total: 0,
    pizzas: [],
    sauces: {}
}, action: CartReducerAction): CartReducerState => {

    if (state.checkoutInProgress)
        return state;

    switch (action.type) {
        case CartActionType.ADD:
            return Object.assign({}, addPizza(state, action))
        case CartActionType.DELETE:
            return Object.assign({}, deletePizza(state, action))
        case CartActionType.ADD_SAUCE:
            return Object.assign({}, addSauce(state, action))
        case CartActionType.DELETE_SAUCE:
            return Object.assign({}, deleteSauce(state, action))
        case CartActionType.TOGGLE_INGREDIENT:
            return Object.assign({}, toggleIngredient(state, action))
        case CartActionType.CHECKOUT_START:
            state.checkoutInProgress = true;
            return Object.assign({}, state)
        case CartActionType.CHECKOUT_SUCCESS:
            state.checkoutInProgress = false;
            return Object.assign({}, state)
        case CartActionType.CHECKOUT_ERROR:
            state.checkoutInProgress = false;
            return Object.assign({}, state)
        default:
            return state
    }
}

export default reducer