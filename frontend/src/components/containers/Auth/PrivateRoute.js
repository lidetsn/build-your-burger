import React from 'react'
import {useSelector} from "react-redux"
import { Redirect,Route } from 'react-router-dom'


 
const PrivateRoute=(props)=> {
                const {component:Component,...rest}=props                      
                const auth=useSelector(state=>state.auth)
                const { userInfo}=auth  

     
    return (
            
                  <Route
                        {...rest}  render={props=>(
                                       userInfo!==null? (
                                        <div>
                                          
                                          <Component {...props} />
                                         </div>            
                                         ) :
                                            <Redirect to={{
                                                    pathname:"/",
                                                        state:{
                                                            from:props.location
                                        }
                              }}/>

                            )}               
                />
            
        
           )
}

export default PrivateRoute
