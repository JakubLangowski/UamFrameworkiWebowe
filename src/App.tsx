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
    const pizzas = useSelector((state: State) => state.pizzas)
    const ingredients = useSelector((state: State) => state.ingredients)
    const sauces = useSelector((state: State) => state.sauces)


    useEffect(() => {
        if (!pizzas.isLoaded && !pizzas.isLoading) fetchPizzas()
        if (!ingredients.isLoaded && !ingredients.isLoading) fetchIngredients()
        if (!sauces.isLoaded && !sauces.isLoading) fetchSauces()
    }, [pizzas, ingredients, sauces, fetchPizzas, fetchIngredients, fetchSauces])


    if (!pizzas.isLoaded || !ingredients.isLoaded || !sauces.isLoaded) {
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
