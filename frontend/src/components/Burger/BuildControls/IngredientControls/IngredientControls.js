import React from 'react';

import classes from './IngredientControls.module.css';
import IngredientControl from '../IngredientControl/IngredientControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const IngredientControls = (props) => (

    <div className={classes.BuildControls}>
        <h4 className={classes.Lable}>welcome {props.name.toUpperCase() || "Guest"}</h4>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <IngredientControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} 
                modify={props.modify}/>
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isLogedIn? "ORDER NOW":"LOGIN TO ORDER"}</button>
    </div>
);

export default IngredientControls;