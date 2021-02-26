import React, { Component ,useState,useEffect} from 'react';
//import axios from "axios"
import {useDispatch,useSelector} from 'react-redux'
import Aux from '../../hoc/Auxiliary';
import Burger from '../../Burger/Burger';
import IngredientControls from '../../Burger/BuildControls/IngredientControls/IngredientControls';
import Modal from '../../Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Spinner from '../../Spinner/Spinner';
import * as actions from '../../../store/actions/index';
import '../Checkout/checkout.css'

// const INGREDIENT_PRICES = {
//                 salad: 0.5,
//                 cheese: 0.4,
//                 meat: 1.3,
//                 bacon: 0.7
//             };
//class BurgerBuilder extends Component{
       // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
const BurgerBuilder =(props)=>{
   
      const   burgerBuilder = useSelector(state => state.burgerBuilder)
      const   {ingredients,totalPrice,numOfIngredints, error}=burgerBuilder
      const auth = useSelector(state => state.auth)
      const {userInfo}=auth
      const   order = useSelector(state => state.order)
      const [purchasing,setPurchasing]=useState(false)
      const [modify,setModify]=useState(false)
      const dispatch=useDispatch()
             //replaced with redux   
    // const [ingredients,setIngredints]=useState({salad:0,bacon:0,cheese:0,meat:0})
    // const [totalPrice,setTotalPrice]=useState(4)
    // const [purchasable,setPurchasable]=useState(false)
    // const [loading,setLoading]=useState(false)


            // useEffect(() => {
            //         dispatch(actions.initIngredients() )
            
            // }, [])

   const updatePurchaseState =(ingredients)=> {
                const sum = Object.keys( ingredients )
                                    .map( igKey => {
                                        return ingredients[igKey];
                                    } )
                                    .reduce( ( sum, el ) => {
                                        return sum + el;
                                    }, 0 );
            //  this.setState( { purchasable: sum > 0 } );
            //   console.log(sum)
            //   setPurchasable(sum>0)
           return sum>0
    }

    const onIngredientAdded=(type)=>{
            if(numOfIngredints<8){
              //  setNumOfIngredints(numOfIngredints+1)
            
             dispatch(actions.addIngredient(type))
            }
       }
/*   //moved to redux 
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
          //this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
            updatePurchaseState(updatedIngredients);
    }
*/

const  onIngredientRemoved=(type)=>{
  //  setNumOfIngredints(numOfIngredints-1)
       dispatch(actions.removeIngredient(type))
       setModify(false)
}
const reSetIngredients=()=>{
    //    dispatch(actions.reSetIngredients())
       setModify(true)
     //  setNumOfIngredints(0)

 }
/*   moved to redux
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
*/

    const purchaseHandler = () => {
          if(userInfo !==null)  { 
              setPurchasing(true)
               }
               else{
                   dispatch(actions.setAuthRedirectPath("/checkout"))
                   props.history.push("/login")
               }
            }

    const purchaseCancelHandler = () => {
            setPurchasing(false)        
        }

    const purchaseContinueHandler = () => {
          dispatch(actions.purchaseInit())
          props.history.push('/checkout');
         
          /*   const queryParams = [];
            for (let i in ingredients) {
                  queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
             }
             queryParams.push('price=' + totalPrice);
             const queryString = queryParams.join('&');

             props.history.push({
                                 pathname: '/checkout',
                                search: '?' + queryString
                           });  */
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
            <Aux >

                 <Modal show={purchasing || numOfIngredints===8 && !modify} modalClosed={purchaseCancelHandler}>

                       {/* {loading?<Spinner/>: */}
                                <OrderSummary 
                                            ingredients={ingredients}
                                            purchaseCancelled={purchaseCancelHandler}
                                            purchaseContinued={purchaseContinueHandler} 
                                            reSetIngredients={reSetIngredients}
                                            price={totalPrice}
                                            numOfIngredints={numOfIngredints}
                                            isLogedIn={userInfo!==null}
                                            ordered={purchaseHandler}
                                            modify={modify}
                                          />
                                            {/* } */}
                  </Modal>
                

                  <div className="checkout">
               <Burger ingredients={ingredients} 
                       name={userInfo===null? "Guest":userInfo.userName}/>
                <IngredientControls
                            //ingredientAdded={addIngredientHandler}
                            ingredientAdded={onIngredientAdded}
                            // ingredientRemoved={removeIngredientHandler}
                            ingredientRemoved={onIngredientRemoved}

                            disabled={disabledInfo}
                            modify={modify}
                            // purchasable={purchasable}
                            purchasable={updatePurchaseState(ingredients)}

                            ordered={purchaseHandler}
                            price={totalPrice} 
                            isLogedIn={userInfo!==null}
                            name={userInfo===null?"Guest":userInfo.userName}
                    /></div>
                           
             </Aux>
        );
    
}
//}

export default BurgerBuilder;