import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Button from '../../Button/Button';
import classes from './orderSummary.module.css'

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li> );
        } );

    return (
        <Aux>
            <div className={classes.TextColor}>
           {props.numOfIngredints===8 && !props.modify && <strong>Maximum ingredients reached</strong>}
            <h3>Your Order</h3>
            <p>A delicious burger !!</p>
           <strong> ingredients:</strong> 
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed( 2 )}</strong></p>
            <p>Continue to Checkout?</p>
            </div>
            
             {props.isLogedIn?
             <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>  :       
             <Button btnType="Success" clicked={props.ordered}>LOGIN TO ORDER</Button>}
             {props.numOfIngredints===8 && !props.modify?
            <Button btnType="Danger" clicked={props.reSetIngredients}>MODIFY</Button>:
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>} 
            
        </Aux>
    );
};

export default orderSummary;