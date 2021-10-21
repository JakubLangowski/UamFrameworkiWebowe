import React from 'react';
import { useState, useEffect } from "react";
import './PizzaListPage.css';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import PizzaCard from "../../components/PizzaCard/PizzaCard";
import Api from '@api/api'
import PizzaListItem from "../../components/PizzaListItem/PizzaListItem";

const PizzaListPage = () => {

    let {path, url} = useRouteMatch();
    const [pizzaList, setPizzaList] = useState([]);


    useEffect(() => {

        Api.get('pizza')
            .then((response) => {
                setPizzaList(response.data);
            })
            .catch(error => console.log(error))

    }, []);

    const pizzaListUi = pizzaList.map((pizza) => {
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
