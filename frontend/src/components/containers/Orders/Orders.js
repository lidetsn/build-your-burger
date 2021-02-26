import React, {useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'

import Order from '../../Order/Order';
import Spinner from '../../Spinner/Spinner'

import * as actions from '../../../store/actions/index';
import classes from "./order.module.css"


const Orders=()=>{

           const dispatch = useDispatch()
           const order = useSelector(state => state.order)
           const auth = useSelector(state => state.auth)
           const {userInfo}=auth
           const {orders,loading}=order
       
        
       useEffect(() => {
           dispatch(actions.fetchOrders(userInfo.idToken))
           
       }, [])

        return (
            <div>
                {loading? <Spinner/>:
                   <> 
                   <h3 className={classes.Head}>your order History</h3>
                   {orders.length===0?<h4 className={classes.Info}>you haven't made any order</h4>:<>
                        {orders.map(order => (
                            <Order 
                                key={order.id}
                                ingredients={order.ingredients}
                                price={order.price} 
                                orderDate={order.orderDate}/>
                         ))}</>}
                   </>
                }
            </div>
        );
    }

export default Orders;
