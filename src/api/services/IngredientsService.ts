import api from "../api";

export interface Ingredient {
    id: string
    name: string
    price: number
}

class IngredientsService {

    getAll() {
        return api.get<Ingredient[]>("/ingredients");
    }

}

export default new IngredientsService();