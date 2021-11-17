import api from "../api";

export interface Sauce {
    id: string
    name: string
    price: number
}


class SauceService {

    getAll() {
        return api.get<Sauce[]>("/sauce");
    }

    get(id: string) {
        return api.get<Sauce>(`/sauce/${id}`);
    }

}

export default new SauceService();