import React from 'react';
import {useSelector} from 'react-redux'

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
               const auth = useSelector(state => state.auth)
               const {userInfo}=auth
return(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Build</NavigationItem>
        {userInfo===null ? null:<NavigationItem link="/orders">Orders</NavigationItem> }
        {userInfo===null
            ? <><NavigationItem link="/login">Login</NavigationItem>
              <NavigationItem link="/register">Sign Up</NavigationItem></>
            : <NavigationItem link="/logout" >Logout</NavigationItem>}
            


    
    </ul>)
}

export default NavigationItems;