import React from 'react';
import {useSelector} from 'react-redux'
import { Route,Redirect } from 'react-router-dom';

import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../Order/CheckoutSummary/CheckoutSummary';
import './checkout.css'

const Checkout=(props)=>{

       const burgerBuilder= useSelector(state => state.burgerBuilder)
       const {ingredients,totalPrice}=burgerBuilder
       const order= useSelector(state => state.order)
       const {purchased}=order

    /*
class Checkout extends Component {
     state = {
       ingredients: null,
        price: 0
    }
           componentWillMount() {
                const query = new URLSearchParams(this.props.location.search);
                // console.log("===========")
                // console.log(this.props)
                // console.log(query)
                const ingredients = {};
                let price=0

                for (let param of query.entries()) {
                    // ['salad', '1']
                   // console.log(param)
                    if (param[0] === 'price') {
                         price = param[1];
                    } else {
                    ingredients[param[0]] = +param[1];
                }
            }
                this.setState({ingredients: ingredients,totalPrice: price });
            
        
            }
      */
    const checkoutCancelledHandler = () => {
                    props.history.goBack();
                }

    const checkoutContinuedHandler = () => {
                    props.history.replace('/checkout/contact-data');
                }

    //render() {
        console.log(totalPrice)
        return (
            <>
            {totalPrice>4?
            <div className="checkout">       
                {purchased?<Redirect to="/"/> : null}
                <CheckoutSummary 
                            ingredients={ingredients}
                            checkoutCancelled={checkoutCancelledHandler}
                            checkoutContinued={checkoutContinuedHandler}/>
              
               <Route 
                    path={props.match.path + '/contact-data'} 
                     component={ContactData}
                    // render={(props) => (<ContactData ingredients={this.state.ingredients} 
                    //                                  price={this.state.totalPrice} {...props} 
                    //                        />)} 
                />
            </div>:<Redirect to="/"/>}
            </>
        );
  //  }
}

export default Checkout;