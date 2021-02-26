import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './components/containers/Checkout/Checkout';
import Orders from './components/containers/Orders/Orders'
import Login from './components/containers/Auth/Login'
import Logout from './components/containers/Auth/Logout'
import Register from './components/containers/Auth/Register'
import PrivateRoute from './components/containers/Auth/PrivateRoute'


const App =()=>{
  
    return (
        <div>
            <Layout>
                <Switch>
                    <PrivateRoute path="/checkout" component={Checkout} />
                    <PrivateRoute exact path="/orders" component={Orders} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/logout" component= {Logout} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/" exact component={BurgerBuilder} />
                    
                    <Route  path="/*"  render={props=>(<Redirect to={{
                                                              pathname:"/"
                                          }}/> )} 
                                 />

               </Switch>
            </Layout>
        </div>
    );
  
}

export default App;
