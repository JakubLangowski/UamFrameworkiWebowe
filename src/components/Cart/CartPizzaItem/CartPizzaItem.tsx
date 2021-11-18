import React, {useEffect, useState} from 'react';
import './CartPizzaItem.css';
import {CartIngredient, CartPizza} from "../../../store/reducers/cart/cartReducer";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../../store";
import {useDispatch} from "react-redux";
import { MdRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md";
import Button from "../../Shared/Button/Button";
import { MdEdit, MdDelete } from "react-icons/md";


interface Props {
    cartPizzaId: number,
    pizza: CartPizza,
    ingredients: Record<string, CartIngredient>
}

const CartPizzaItem = ({cartPizzaId, pizza, ingredients}: Props) => {

    const { toggleIngredientInPizza, removeFromCart } = bindActionCreators(actionCreators.cartActions, useDispatch())
    const [showIngredients, setShowIngredients] = useState(false)

    useEffect(() => {

    }, [showIngredients, toggleIngredientInPizza, ingredients]);

    let ingredientsListUi;

    if (showIngredients) {
        ingredientsListUi = Object.keys(ingredients).map((key, index) => {
            const icon = ingredients[key].active ? <MdOutlineRadioButtonChecked /> : <MdRadioButtonUnchecked />
            return <li
                key={key} onClick={() => toggleIngredientInPizza(cartPizzaId, ingredients[key])}
                className="cursor-pointer flex items-center justify-between"
            >
                <span className="flex items-center gap-x-2 ">{ icon }{ ingredients[key].name }</span>
                {!ingredients[key].default && <span> + { ingredients[key].price }</span>}
            </li>
        })
    }

    return (
        <li className="bg-white shadow-2xl rounded-xl p-3 my-2">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <span className="font-semibold text-lg">{ pizza.name }</span>
                    <span>Cena: { pizza.totalPrice }</span>
                </div>
                <div className="gap-x-4">
                    <Button onClick={() => setShowIngredients(!showIngredients)}>
                        <MdEdit />
                    </Button>
                    <Button onClick={() => removeFromCart(cartPizzaId)}>
                        <MdDelete />
                    </Button>
                </div>
            </div>
            {showIngredients && <div className="divide-y-2">
                <hr/>
                <ul>
                    { ingredientsListUi }
                </ul>
            </div>}
        </li>
    )
};

CartPizzaItem.propTypes = {};

CartPizzaItem.defaultProps = {};

export default CartPizzaItem;
