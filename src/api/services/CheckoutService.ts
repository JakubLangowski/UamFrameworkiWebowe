import api from "../api";

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
    sauce: PartialOrderSauceDto[]
    total: number
}


class CheckoutService {
    checkout(data: CheckoutData) {
        return api.post<void>("/checkout", data);
    }
}

export default new CheckoutService();