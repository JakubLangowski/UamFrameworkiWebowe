import React from 'react';
import PropTypes from 'prop-types';
import './PizzaCard.css';
import {useParams} from "react-router-dom";

const PizzaCard = () => {

    let { pizzaId } = useParams();

    return (
        <div className="w-full">
            <div className="grid grid-cols-12 gap-2 mb-4 rounded-lg shadow-2xl bg-white">
                <img src="https://via.placeholder.com/150" className="col-span-3 max-h-40 w-full object-cover"/>
                <div className="col-span-9">
                    <p className="text-indigo-500 text-2xl font-medium">
                        Should You Get Online Education?
                    </p>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                        A comprehensive guide about online education.
                    </p>
                    <p className="text-gray-600 font-light text-md">
                        It is difficult to believe that we have become so used to having instant access to
                        information at...
                        <a className="inline-flex text-indigo-500" href="#">Read More</a>
                    </p>
                </div>
            </div>
            <div className="flex flex-col mb-4 rounded-lg shadow-2xl bg-white">
                <h3>Ingredients</h3>
                <ul>
                    <li>Ingredient 1</li>
                    <li>Ingredient 2</li>
                </ul>
            </div>
        </div>
    )
};

PizzaCard.propTypes = {};

PizzaCard.defaultProps = {};

export default PizzaCard;
