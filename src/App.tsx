import './App.css';

import React, {FC, useEffect} from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Layout from "./layout/layout";
import PizzaListPage from "./pages/PizzaListPage/PizzaListPage.lazy";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.lazy";
import CheckoutPage from "./pages/Checkout/CheckoutPage.lazy";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "./store";
import {useDispatch, useSelector} from "react-redux";
import AppLoader from "./components/AppLoader/AppLoader";

const withLayout = (Component: FC<any>) => (props: any) => (
    <Layout>
        <Component {...props} />
    </Layout>
);

const App:FC<any> = () => {

    const { fetchPizzas } = bindActionCreators(actionCreators.pizzasActions, useDispatch())
    const { fetchIngredients } = bindActionCreators(actionCreators.ingredientsActions, useDispatch())
    const { fetchSauces } = bindActionCreators(actionCreators.saucesActions, useDispatch())
    const pizzasLoaded = useSelector((state: State) => state.pizzas.isLoaded)
    const ingredientsLoaded = useSelector((state: State) => state.ingredients.isLoaded)
    const saucesLoaded = useSelector((state: State) => state.sauces.isLoaded)


    useEffect(() => {
        if (!pizzasLoaded) fetchPizzas()
        if (!ingredientsLoaded) fetchIngredients()
        if (!saucesLoaded) fetchSauces()
    }, [pizzasLoaded, ingredientsLoaded, saucesLoaded])


    if (!pizzasLoaded || !ingredientsLoaded || !saucesLoaded) {
       return <AppLoader />
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={withLayout(PizzaListPage)}/>
                    <Route path="/pizza" component={withLayout(PizzaListPage)}/>
                    <Route path="/checkout" component={withLayout(CheckoutPage)}/>
                    <Route component={withLayout(NotFoundPage)}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
