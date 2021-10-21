import React from 'react';
import PropTypes from 'prop-types';
import './PizzaListItem.css';
import {Link} from "react-router-dom";

const PizzaListItem = ({pizza}) => {

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
