import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Item from "./pages/Item";
import Create from "./pages/Create";
import Footer from "./components/Footer";

const App = () => (
  <>
    <BrowserRouter>
      <div className="vh-100 d-flex flex-column">
        <Header />
        <div className="flex-grow-1 d-flex flex-column overflow-auto">
          <div className="flex-grow-1">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/home" exact component={Home} />
              <Route path="/item" exact component={Item} />
              <Route path="/create" exact component={Create} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </>
);

export default App;
