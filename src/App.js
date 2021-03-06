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
import Addproduct from './component/Addproduct'
function App() {
  return (
    <BrowserRouter>
                <Navbars/>
                <Switch>
                    
                    <Route path="/a" exact={true} component={Addproduct}/>
                    <Route path="/" exact={true} component={Dashboard}/>
                    <Route path="/city/1" exact={true} component={Tehran}/>
                    <Route path="/about" exact={true} component={About}/>
                    <Route path="/contact" exact={true} component={Contact}/>
                    <Route path="/city/product/:id" component={Product}/>
                    <Route component={NoMatch}/>
                </Switch>           
            </BrowserRouter>

  );
}

export default App;
