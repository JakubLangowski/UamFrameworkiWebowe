import './PizzaListPage.css';
import React from 'react';
import { useEffect } from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import {Pizza} from "../../api/services/PizzaService";
import PizzaListItem from "../../components/PizzaListItem/PizzaListItem";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../../store/index"

const PizzaListPage = () => {

    let {path} = useRouteMatch();

    const { fetchPizzas } = bindActionCreators(actionCreators.pizzasActions, useDispatch())
    const pizzas = useSelector((state: State) => state.pizzas)

    useEffect(() => {
        if (pizzas.isLoaded) return
        fetchPizzas()
    }, [pizzas, fetchPizzas]);


    if (!pizzas.isLoaded) {
        return <p>Loading...</p>
    }

    const pizzaListUi = pizzas.data.map((pizza: Pizza) => {
        return <PizzaListItem key={pizza.id} pizza={pizza} />
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
