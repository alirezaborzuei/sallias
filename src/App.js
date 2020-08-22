import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbars from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>
                <Navbars/>
                <div className="container">
                <Switch>
                    <Route path="/" exact={true} component={Dashboard}/>


                </Switch>
                </div>
            </BrowserRouter>

  );
}

export default App;
