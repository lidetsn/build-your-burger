import React from 'react'
import Button from '../../../Button/Button'
import Aux from '../../../hoc/Auxiliary'
import classes from './purchaseConfermation.module.css'

function PurchaseConfirmation(props) {
    return (
        <Aux>
        <strong className={classes.TextColor}>Thank you for your order {props.name.toUpperCase()}</strong>
        <p className={classes.TextColor}>Enjoy your Burger:</p>
      
        <Button btnType="Success" clicked={props.confirmationSeen}>OK</Button>
    </Aux>
    )
}

export default PurchaseConfirmation
