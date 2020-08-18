import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import Search from "./component/search/search";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact={true} component={Dashboard}/>
                    <Route path="/h" exact={true} component={Search} />
                </Switch>
            </BrowserRouter>
  );
}

export default App;
