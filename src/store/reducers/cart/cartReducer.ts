import {
    AddSauceToCartReducerAction,
    AddToCartReducerAction,
    CartActionType,
    CartReducerAction,
    DeleteFromCartReducerAction,
    DeleteSauceFromCartReducerAction,
    ToggleIngredientInCartPizzaReducerAction
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

export interface CartReducerState {
    cartLocked: boolean
    total: number,
    pizzas: Record<string, {
        pizza: CartPizza,
        ingredients: Record<string, CartIngredient>
    }>
    sauces: Record<string, number>
}

function addPizza(state: CartReducerState, action: AddToCartReducerAction) : CartReducerState {
    const stateCopy = Object.assign({}, state);
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

    stateCopy.pizzas[newKey] = {
        pizza: cartPizza,
        ingredients: cartIngredients
    }

    stateCopy.total += action.payload.pizza.price
    return stateCopy;
}

function deletePizza(state: CartReducerState, action: DeleteFromCartReducerAction) : CartReducerState {
    const stateCopy = Object.assign({}, state);
    if (typeof stateCopy.pizzas[action.payload] !== "undefined") {
        const currentItem = stateCopy.pizzas[action.payload];
        stateCopy.total -= currentItem.pizza.price
        for (const ingredientId in currentItem.ingredients) {
            if (currentItem.ingredients[ingredientId].active && !currentItem.ingredients[ingredientId].default) {
                stateCopy.total -= currentItem.ingredients[ingredientId].price
            }
        }
        delete stateCopy.pizzas[action.payload]
    }
    return stateCopy;
}

function toggleIngredient(state: CartReducerState, action: ToggleIngredientInCartPizzaReducerAction): CartReducerState {
    const stateCopy = Object.assign({}, state);
    if (typeof stateCopy.pizzas[action.payload.pizzaId] !== "undefined") {
        const currentItem = stateCopy.pizzas[action.payload.pizzaId];
        const editedIngredient = currentItem.ingredients[action.payload.ingredient.id];
        if (typeof editedIngredient !== "undefined") {
            if (editedIngredient.active) {
                if (!editedIngredient.default) {
                    stateCopy.total -= editedIngredient.price
                    currentItem.pizza.totalPrice -= editedIngredient.price
                }
                editedIngredient.active = false
            } else {
                if (!editedIngredient.default) {
                    stateCopy.total += editedIngredient.price
                    currentItem.pizza.totalPrice += editedIngredient.price
                }
                editedIngredient.active = true
            }
        }
    }
    return stateCopy;
}

function addSauce(state: CartReducerState, action: AddSauceToCartReducerAction): CartReducerState {
    const stateCopy = Object.assign({}, state);
    if (typeof stateCopy.sauces[action.payload.id] !== "undefined") {
        stateCopy.sauces[action.payload.id] += 1;
    } else {
        stateCopy.sauces[action.payload.id] = 1
    }
    stateCopy.total += action.payload.price

    return stateCopy;
}

function deleteSauce(state: CartReducerState, action: DeleteSauceFromCartReducerAction): CartReducerState {
    const stateCopy = Object.assign({}, state);
    if (typeof stateCopy.sauces[action.payload.id] !== "undefined") {
        if (stateCopy.sauces[action.payload.id] > 0) {
            stateCopy.sauces[action.payload.id] -= 1;
            stateCopy.total -= action.payload.price
        }
    }
    return stateCopy;
}

const reducer = (state: CartReducerState = {
    cartLocked: false,
    total: 0,
    pizzas: {},
    sauces: {}
}, action: CartReducerAction): CartReducerState => {


    switch (action.type) {
        case CartActionType.ADD:
            return Object.assign({}, state, addPizza(state, action))
        case CartActionType.DELETE:
            return Object.assign({}, state, deletePizza(state, action))
        case CartActionType.ADD_SAUCE:
            return Object.assign({}, state, addSauce(state, action))
        case CartActionType.DELETE_SAUCE:
            return Object.assign({}, state, deleteSauce(state, action))
        case CartActionType.TOGGLE_INGREDIENT:
            return Object.assign({}, state, toggleIngredient(state, action))
        case CartActionType.LOCK_CART:
            state.cartLocked = true;
            return Object.assign({}, state)
        case CartActionType.UNLOCK_CART:
            state.cartLocked = false;
            return Object.assign({}, state)
        case CartActionType.CLEAR_CART:
            return Object.assign({}, state, {
                cartLocked: false,
                total: 0,
                pizzas: [],
                sauces: {}
            })
        default:
            return state
    }
}

export default reducer