import './App.css';

import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import Layout from "./layout/layout";
import PizzaListPage from "./pages/PizzaListPage/PizzaListPage.lazy";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.lazy";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.lazy";

const withLayout = (Component: any) => (props: any) => (
    <Layout>
        <Component {...props} />
    </Layout>
);

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={withLayout(PizzaListPage)} />
                  <Route path="/pizza" component={withLayout(PizzaListPage)} />
                  <Route exact path="/about-us" component={withLayout(AboutUsPage)}/>
                  <Route component={withLayout(NotFoundPage)}/>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
