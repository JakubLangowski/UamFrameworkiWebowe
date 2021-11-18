import './CheckoutPage.css';
import React, {useEffect, useState} from 'react';
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import CartSauceItem from "../../components/Cart/CartSauceItem/CartSauceItem";
import CartPizzaItem from "../../components/Cart/CartPizzaItem/CartPizzaItem";
import Button from "../../components/Shared/Button/Button";
import CheckoutService from "../../api/services/CheckoutService";
import {useHistory} from "react-router";

const CheckoutPage = () => {

    const history = useHistory();
    const [checkoutDisabled, setCheckoutDisabled] = useState(false)
    const { clearCart, lockCart, unlockCart } = bindActionCreators(actionCreators.cartActions, useDispatch())
    const sauces = useSelector((state: State) => state.sauces)
    const cart = useSelector((state: State) => state.cart)

    useEffect(() => {}, [cart, checkoutDisabled]);

    const startCheckout = () => {
        setCheckoutDisabled(true)
        lockCart()

        CheckoutService.checkout(cart)
            .then(() => {
                clearCart()
                history.push('/')
            })
            .catch(() => {
                console.log("Checkout Failed")
                history.push('/')
            })
            .finally(() => unlockCart())
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
                    <Button
                        onClick={() => startCheckout()}
                        disabled={checkoutDisabled}
                        loading={checkoutDisabled}
                    >
                        Zamów
                    </Button>
                </div>
            </div>
        </div>
    )
};

CheckoutPage.propTypes = {};

CheckoutPage.defaultProps = {};

export default CheckoutPage;
