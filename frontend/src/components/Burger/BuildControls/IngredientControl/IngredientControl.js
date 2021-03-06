import React from 'react';

import classes from './IngredientControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>
            {props.label}
        </div>
        <button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>
            Less
        </button>
        <button 
            className={classes.More} 
            onClick={props.added}
            disabled={props.modify}>
           More
         </button>
    </div>
);

export default buildControl;