import React from 'react'

import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Accessories from '../pages/Accessories';

const Routes = () => {
    return (
        <Switch>
            <Route path = '/' exact component={Home}/>
            <Route path = '/catalog/:slug'  component={Product}/>
            <Route path = '/catalog'  component={Catalog}/>
            <Route path = '/cart' component={Cart}/>
            <Route path = '/accessories' component={Accessories}/>
        </Switch>
    )
}

export default Routes
