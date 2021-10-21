import React, {useEffect, useState} from 'react';
import './PizzaCard.css';
import {useParams} from "react-router-dom";
import Api from "@api/api";

const PizzaCard = () => {

    let { pizzaId } = useParams();
    const [currentPizza, setCurrentPizza] = useState({ingredients: []});
    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {

        async function fetchData() {
            const getPizza = Api.get(`/pizza/${pizzaId}`)
            const getIngredients = Api.get(`/ingredients`)

            const [pizzaResponse, ingredientsResponse] = await Promise
                .all([getPizza, getIngredients])
                .catch(error => console.log(error))

            setCurrentPizza(pizzaResponse.data);
            setIngredients(ingredientsResponse.data)
        }
        fetchData().then(() => {

            const localIngredients = currentPizza.ingredients;

            localIngredients.forEach((ingredientId, index) => {
                currentPizza.ingredients[index] = ingredients.find(x => x.id === ingredientId).name
            })

            currentPizza.ingredients = localIngredients
            setCurrentPizza(currentPizza)
        })

    }, [pizzaId]);

    if (currentPizza === undefined) {
        return <p>Loading</p>
    } else {

        const pizzaIngredientsUi = currentPizza.ingredients.map((ingredient) => {

            return <p key={ingredient}>{ingredient}</p>
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
                        {pizzaIngredientsUi}
                    </ul>
                </div>
            </div>
        )
    }

};

PizzaCard.propTypes = {};

PizzaCard.defaultProps = {};

export default PizzaCard;
