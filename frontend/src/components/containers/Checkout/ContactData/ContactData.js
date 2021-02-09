import React, { Component,useState } from 'react';

import Button from '../../../Button/Button';
import Spinner from '../../../Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from 'axios'
//import axios from '../../../axios-orders';

const ContactData=(props)=> {
    
     const [customerInf,setCustomerInfo]=useState( {
                                                name: '',
                                                email: '',
                                                address: {
                                                    street: '',
                                                    postalCode: ''
                                                }})   
     const [loading,setLoading]=useState(false)
   const orderHandler = ( event ) => {
        event.preventDefault();
       // this.setState( { loading: true } );
       setLoading(true)

       //sample order for test reason
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        const config= {
            headers:{
                "content-Type":"application/json"
            }
        }

        axios.post( '/api/order', order,config )
            .then( response => {
             setLoading(false)
                props.history.push('/');    
                
            } )
            .catch( error => {

             setLoading(false)
               
            } );
    }
  
        let form = (
                    <form>
                        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                        <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                        <input className={classes.Input} type="text" name="street" placeholder="Street" />
                        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                        <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
                    </form>
                    );
        
        return (
            loading?<Spinner/>:
               ( <div className={classes.ContactData}>
                    <h4>Enter your Contact Data</h4>
                            {form}
                </div>)
        );
    }


export default ContactData;