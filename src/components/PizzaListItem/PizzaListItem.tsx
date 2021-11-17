import React from 'react';
import './PizzaListItem.css';
import {Link} from "react-router-dom";
import {Pizza} from "../../api/services/PizzaService";

const PizzaListItem = ({pizza} : {pizza: Pizza}) => {

    return (
        <Link to={`/pizza/${pizza.id}`}>
            <li className="PizzaListItem">
                { pizza.name }
            </li>
        </Link>
    )
};

PizzaListItem.propTypes = {};

PizzaListItem.defaultProps = {};

export default PizzaListItem;
