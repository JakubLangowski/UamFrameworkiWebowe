import React, {useEffect} from 'react';
import './PizzaCard.css';
import {useParams} from "react-router-dom";
import IngredientsService from "../../api/services/IngredientsService";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../store";
import {useDispatch, useSelector} from "react-redux";

const PizzaCard = () => {

    let { pizzaId } = useParams<{pizzaId: string}>();

    const { fetchIngredients } = bindActionCreators(actionCreators, useDispatch())
    const pizzas = useSelector((state: State) => state.pizzas)
    const ingredients = useSelector((state: State) => state.ingredients)


    useEffect(() => {
        if (ingredients.isLoaded) return
        fetchIngredients()
    }, [ingredients.isLoaded]);

    const currentPizza = pizzas.data.find(x => x.id === pizzaId)

    if (!ingredients.isLoaded || currentPizza === undefined)
        return <p>Loadnig...</p>

    const pizzaIngredientsUi = currentPizza.ingredients.map((ingredientId) => {
        return <p key={ingredientId}>{ingredients.data[ingredientId].name}</p>
    })

    return (
        <div className="w-full">
            <div className="grid grid-cols-12 gap-2 mb-4 rounded-lg shadow-2xl bg-white">
                <img src="https://via.placeholder.com/150" className="col-span-3 max-h-40 w-full object-cover"/>
                <div className="col-span-9">
                    <p className="text-indigo-500 text-2xl font-medium">
                        { currentPizza.name }
                    </p>
                </div>
            </div>
            <div className="flex flex-col mb-4 rounded-lg shadow-2xl bg-white">
                <h3>Ingredients</h3>
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
