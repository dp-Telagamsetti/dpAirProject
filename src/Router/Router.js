import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../WebPages/HomePage/HomePage';
import LoginPage from '../WebPages/LoginPage/LoginPage';
import CartPage from '../WebPages/CartPage/CartPage';

class MyRouter extends Component{
    render() {
        return(
           <Router>                                 

               <Switch>                                           
                    <Route exact path="/Cart" component={CartPage}/>
                    <Route exact path="/Home" component={HomePage}/>  
                    <Route exact path="/" component={LoginPage}/>    
               </Switch>  
                           
           </Router>   
        );
    }
}
export default MyRouter;