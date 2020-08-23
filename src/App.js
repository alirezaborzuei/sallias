import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbars from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import About from "./component/About";
import Contact from "./component/Contact";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoMatch from "./component/NoMatch";
import Product from './component/Pages/product';
import Tehran from './component/CityFile/Tehran'
function App() {
  return (
    <BrowserRouter>
                <Navbars/>
                <div className="container">
                <Switch>
                    <Route path="/" exact={true} component={Dashboard}/>
                    <Route path="/1" exact={true} component={Tehran}/>
                    <Route path="/about" exact={true} component={About}/>
                    <Route path="/contact" exact={true} component={Contact}/>
                    <Route path="/product/:id" component={Product}/>
                    <Route component={NoMatch}/>
                </Switch>
                </div>
            </BrowserRouter>

  );
}

export default App;
