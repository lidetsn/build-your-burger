import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import Button from '../../../Button/Button';
import Spinner from '../../../Spinner/Spinner';
import classes from './ContactData.module.css';
import * as actions from '../../../../store/actions/index';


function ContactData() {
     const [conactInfo,setContactInfo]=useState({name:"",street:"",zipcode:"",country:"",email:"",deliveryMethod:"fastest"})
     const burgerBuilder = useSelector(state => state.burgerBuilder)
     const {ingredients,totalPrice}=burgerBuilder
     const order = useSelector(state => state.order)
     const {loading}=order
     const dispatch = useDispatch()



    const orderHandler=()=>{
    const orderdata={
                    ingredients,
                    price:totalPrice,
                    customer:conactInfo
        }
        dispatch(actions.purchaseBurger(orderdata))
    }
    const handleChange=(event)=>{
    const {name,value}=event.target
        setContactInfo({...conactInfo,[name]:value})
        
    }
    return (
        <div className={classes.ContactData}>
         <h4>Enter your Contact Data</h4>

        <form  onSubmit={orderHandler}>
            <input  className={classes.InputElement} name="name" value={conactInfo.name} onChange={handleChange} type="text" placeholder="your Name" />
            <input   className={classes.InputElement} name="street" value={conactInfo.street} onChange={handleChange} type="text" placeholder="Sreet" />
            <input   className={classes.InputElement} name="zipcode" vaue={conactInfo.zipcode} onChange={handleChange}  type="text" placeholder="ZipCode"/>
            <input   className={classes.InputElement} name="country" value={conactInfo.country} onChange={handleChange} type="text" placeholder="Country" />
            <input   className={classes.InputElement} name="email" value={conactInfo.email} onChange={handleChange}  type="text"  placeholder="your Email"/>
            <select className={classes.InputElement} name="deliveryMethod" value={conactInfo.deliveryMethod} onChange={handleChange}>
                <option value="fastest">fastest</option>
                <option value="cheapest">cheapest</option>
                
            </select>
            <Button btnType="Success">ORDER</Button>
        </form>
    </div>
    )
}

export default ContactData
