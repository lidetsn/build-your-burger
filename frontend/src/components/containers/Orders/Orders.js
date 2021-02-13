import React, {useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'

import Order from '../../Order/Order';
import Spinner from '../../Spinner/Spinner'

import * as actions from '../../../store/actions/index';


const Orders=()=>{

           const dispatch = useDispatch()
           const order = useSelector(state => state.order)
           const {orders,loading}=order
       
        
       useEffect(() => {
           dispatch(actions.fetchOrders())
           
       }, [])

        return (
            <div>
                {loading? <Spinner/>:
                   <>
                        {orders.map(order => (
                            <Order 
                                key={order.id}
                                ingredients={order.ingredients}
                                price={order.price} />
                         ))}
                   </>
                }
            </div>
        );
    }

export default Orders;
