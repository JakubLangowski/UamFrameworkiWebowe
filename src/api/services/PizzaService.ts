import api from "../api";

export interface Pizza {
    id: string
    name: string
    price: number
    ingredients: string[]
}


class PizzaService {

    getAll() {
        return api.get<Pizza[]>("/pizza");
    }

    get(id: string) {
        return api.get<Pizza>(`/pizza/${id}`);
    }

}

export default new PizzaService();