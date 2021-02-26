import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    let transformedIngredients = Object.keys( props.ingredients )
                                            .map( igKey => {
                                                 return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                                                              return <BurgerIngredient key={igKey + i} type={igKey} />;
                                                                } );
                                                           } )
                                                              .reduce((arr, el) => {
                                                                   return arr.concat(el)
                                                               }, []);


    if (transformedIngredients.length === 0) {
            transformedIngredients = <span>Hi<span className={classes.Greeting}>{props.name.toUpperCase()},</span>start adding ingredients!</span>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                    {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;