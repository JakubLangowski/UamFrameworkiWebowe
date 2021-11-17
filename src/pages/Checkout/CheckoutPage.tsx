import './CheckoutPage.css';
import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import CartSauceItem from "../../components/CartSauceItem/CartSauceItem";
import CartPizzaItem from "../../components/CartPizzaItem/CartPizzaItem";
import Button from "../../components/Button/Button";
import {PartialOrderPizzaDto, PartialOrderSauceDto} from "../../api/services/CheckoutService";

const CheckoutPage = () => {

    const { fetchSauces } = bindActionCreators(actionCreators.saucesActions, useDispatch())
    const { checkout } = bindActionCreators(actionCreators.cartActions, useDispatch())
    const sauces = useSelector((state: State) => state.sauces)
    const cart = useSelector((state: State) => state.cart)

    useEffect(() => {
        if (!sauces.isLoaded) {
            fetchSauces()
        }
    }, [sauces, cart, fetchSauces]);

    const startCheckout = () => {
        const pizza: PartialOrderPizzaDto[] = []
        const sauce: PartialOrderSauceDto[] = []

        for (const sauceId in cart.sauces) {
            sauce.push({
                id: sauceId,
                count: cart.sauces[sauceId]
            })
        }

        for (const id in cart.pizzas) {
            const currentPizza = cart.pizzas[parseInt(id)];
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

        console.log({
            pizza: pizza,
            sauce: sauce,
            total: cart.total
        })

        checkout({
            pizza: pizza,
            sauce: sauce,
            total: cart.total
        })
    }

    const pizzaListUi = Object.keys(cart.pizzas).map((key, index) => {
        return <CartPizzaItem
                    key={key}
                    cartPizzaId={parseInt(key)}
                    pizza={cart.pizzas[parseInt(key)].pizza}
                    ingredients={cart.pizzas[parseInt(key)].ingredients}
        />
    })

    const sauceListUi = sauces.data.map((item) => {
        return <CartSauceItem
            key={item.id}
            sauce={item}
            count={(cart.sauces[item.id]) ? cart.sauces[item.id] : 0}
        />
    })

    return (
        <div>
            <h1 className="text-center font-semibold text-2xl">Zamówienie</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <h2 className="text-center font-semibold text-xl">Koszyk</h2>
                    <ul className="list-none">
                        {pizzaListUi}
                    </ul>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <h2 className="text-center font-semibold text-xl">Sosy</h2>
                    <ul className="list-none">
                        {sauceListUi}
                    </ul>
                </div>
                <div className="col-span-1 md:col-span-6">
                    <h2 className="text-center font-semibold text-xl">Dane zamówienia</h2>
                    <Button onClick={() => startCheckout()} body={"Zamów"}/>
                </div>
            </div>
        </div>
    )
};

CheckoutPage.propTypes = {};

CheckoutPage.defaultProps = {};

export default CheckoutPage;
