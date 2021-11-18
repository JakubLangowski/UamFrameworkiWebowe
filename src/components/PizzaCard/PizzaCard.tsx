import React, {useEffect} from 'react';
import './PizzaCard.css';
import {useParams} from "react-router-dom";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import Button from "../Shared/Button/Button";
import ListItem from "../Shared/ListItem/ListItem";

const PizzaCard = () => {

    let { pizzaId } = useParams<{pizzaId: string}>();

    const { addToCart } = bindActionCreators(actionCreators.cartActions, useDispatch())
    const pizzas = useSelector((state: State) => state.pizzas)
    const ingredients = useSelector((state: State) => state.ingredients)

    useEffect(() => {}, [pizzaId])

    const currentPizza = pizzas.data.find(x => x.id === pizzaId)

    if (typeof currentPizza === "undefined")
        return <p>Pizza not found</p>

    const pizzaIngredientsUi = currentPizza.ingredients.map((ingredientId) => {
        return <ListItem key={ingredientId}>{ingredients.data[ingredientId].name}</ListItem>
    })

    return (
        <div className="w-full">
            <div className="grid grid-cols-12 gap-2 mb-4 rounded-lg shadow-2xl bg-white">
                <img src="https://via.placeholder.com/150" className="col-span-3 max-h-40 w-full object-cover" alt=""/>
                <div className="col-span-9 flex flex-col">
                    <div>
                        <h2 className="text-red-500 text-2xl font-medium">
                            { currentPizza.name }
                        </h2>
                        <h3>Cena: { currentPizza.price } zł</h3>
                    </div>
                    <div className="max-w-xl">
                        <Button onClick={() => addToCart(currentPizza, ingredients.data)}>Dodaj do koszyka</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-4">
                <h3 className="text-center font-semibold text-lg pb-3">Składniki</h3>
                <ul>
                    { pizzaIngredientsUi }
                </ul>
            </div>
        </div>
    )

};

PizzaCard.propTypes = {};

PizzaCard.defaultProps = {};

export default PizzaCard;
