import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    // console.log(props)
    return (
        <div className={classes.CheckoutSummary}>
            <strong >We hope it tastes well!</strong>
                <Burger ingredients={props.ingredients}/>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;