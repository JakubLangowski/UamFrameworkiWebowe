import './App.css';

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import PizzaListPage from "./pages/PizzaListPage/PizzaListPage.lazy";
import PizzaPage from "./pages/PizzaPage/PizzaPage.lazy";

function App() {
  return (
      <div className="App">
          <Header />
          <main>
              <Router>
                  <Switch>
                      <Route path="/">
                          <PizzaListPage />
                      </Route>
                      <Route path="/pizza">
                          <PizzaListPage />
                      </Route>
                      <Route path="/pizza/:id">
                          <PizzaPage />
                      </Route>
                  </Switch>
              </Router>
          </main>
          <Footer />
      </div>
  );
}

export default App;
