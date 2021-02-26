import * as actionTypes from './actionTypes';
import axios from 'axios';


export const addIngredient = ( name ) => {
            return {
                type: actionTypes.ADD_INGREDIENT,
                ingredientName: name
            };
};

export const removeIngredient = ( name ) => {
            return {
                type: actionTypes.REMOVE_INGREDIENT,
                ingredientName: name
            };
};

export const setIngredients = ( ingredients ) => {
            return {
                type: actionTypes.SET_INGREDIENTS,
                ingredients: ingredients
            };
};
export const reSetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
        
    };
};


export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
      };
};

// export const initIngredients = () => (dispatch)=>{
    
//       const  ingredients= {
//                         salad: 0,
//                         bacon: 0,
//                         cheese: 0,
//                         meat: 0
//                 }
//         dispatch(setIngredients(ingredients));
   
// };