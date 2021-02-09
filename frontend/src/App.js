import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './components/containers/Checkout/Checkout';
import Orders from './components/containers/Orders/Orders'


const App =()=>{
  
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/" exact component={BurgerBuilder} />
               </Switch>
            </Layout>
        </div>
    );
  
}

export default App;
