import api from "../api";
import {CartReducerState} from "../../store/reducers/cart/cartReducer";

export interface PartialOrderPizzaDto {
    id: string
    ingredients: string[]
}

export interface PartialOrderSauceDto {
    id: string
    count: number
}

export interface CheckoutData {
    pizza: PartialOrderPizzaDto[]
    sauce?: PartialOrderSauceDto[]
    total: number
}


class CheckoutService {
    checkout(cart: CartReducerState) {
        const pizza: PartialOrderPizzaDto[] = []
        const sauce: PartialOrderSauceDto[] = []

        for (const sauceId in cart.sauces) {
            sauce.push({
                id: sauceId,
                count: cart.sauces[sauceId]
            })
        }

        for (const id in cart.pizzas) {
            const currentPizza = cart.pizzas[id];
            const ingredientsIds: string[] = []

            for (const ingredientId in currentPizza.ingredients) {
                if (currentPizza.ingredients[ingredientId].active) {
                    ingredientsIds.push(currentPizza.ingredients[ingredientId].id)
                }
            }

            pizza.push({
                id: currentPizza.pizza.id,
                ingredients: ingredientsIds
            })
        }

        const data: CheckoutData = {
            pizza: pizza,
            total: cart.total
        }

        if (sauce.length !== 0) {
            data["sauce"] = sauce
        }

        console.log(data)

        return api.post<void>("/order", data);
    }
}

export default new CheckoutService();