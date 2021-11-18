import './PizzaListPage.css';
import React from 'react';
import { useEffect } from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import {Pizza} from "../../api/services/PizzaService";
import {useSelector} from "react-redux";
import {State} from "../../store"
import ListItem from "../../components/Shared/ListItem/ListItem";

const PizzaListPage = () => {

    let {path} = useRouteMatch();

    const pizzas = useSelector((state: State) => state.pizzas)

    useEffect(() => {

    }, [pizzas]);

    const pizzaListUi = pizzas.data.map((pizza: Pizza) => {
        return (
            <ListItem key={pizza.id} linkTo={`/pizza/${pizza.id}`}>
                { pizza.name }
            </ListItem>
        )
    })

    return (
        <div className="PizzaListPage grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-1 md:col-span-4">
                <ul className="divide-y-2 divide-gray-100">
                    <li className="PizzaListItem text-center font-semibold text-xl">
                        <h2>Menu</h2>
                    </li>
                    { pizzaListUi }
                </ul>
            </div>
            <Switch>
                <Route exact path={`${path}/:pizzaId`}>
                    <div className="col-span-1 md:col-span-8">
                        <PizzaCard />
                    </div>
                </Route>
            </Switch>
        </div>
    )
};

PizzaListPage.propTypes = {};

PizzaListPage.defaultProps = {};

export default PizzaListPage;
