import React, { Component ,useState} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../Burger/Burger';
import IngredientControls from '../../Burger/BuildControls/IngredientControls/IngredientControls';




const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
//class BurgerBuilder extends Component{
const BurgerBuilder =()=>{
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    const [ingredients,setIngredints]=useState({salad:0,bacon:0,cheese:0,meat:0})
    const [totalPrice,setTotalPrice]=useState(4)
    const [purchasable,setPurchasable]=useState(false)

    // state = {
    //     ingredients: {
    //         salad: 0,
    //         bacon: 0,
    //         cheese: 0,
    //         meat: 0
    //     }
    // }
   const updatePurchaseState =(ingredients)=> {
                const sum = Object.keys( ingredients )
                                    .map( igKey => {
                                        return ingredients[igKey];
                                    } )
                                    .reduce( ( sum, el ) => {
                                        return sum + el;
                                    }, 0 );
            //  this.setState( { purchasable: sum > 0 } );
            console.log(sum)
        setPurchasable(sum>0)
    }
    console.log(purchasable)


   const addIngredientHandler = ( type ) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
                                ...ingredients
                               };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;
            setTotalPrice(newPrice)
            setIngredints(updatedIngredients)
        // this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
            updatePurchaseState(updatedIngredients);
    }
    const removeIngredientHandler = ( type ) => {
        const oldCount = ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...ingredients
            };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceDeduction;
        setTotalPrice(newPrice)
        setIngredints(updatedIngredients)
      //  this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        updatePurchaseState(updatedIngredients);
    }

 //render(){
    const disabledInfo = {
        ...ingredients
            };

    for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
         }

    console.log(disabledInfo)

        return (
            <Aux>
                <Burger ingredients={ingredients} />
                <IngredientControls
                            ingredientAdded={addIngredientHandler}
                            ingredientRemoved={removeIngredientHandler}
                            disabled={disabledInfo}
                            purchasable={purchasable}
                            price={totalPrice} />
            </Aux>
        );
    
}
//}

export default BurgerBuilder;