
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { NavLink ,Redirect} from 'react-router-dom';

import Button from '../../Button/Button';
import * as actions from '../../../store/actions/index';
import checkValidity from '../../../helper/inputValidation'
import Spinner from '../../Spinner/Spinner'

import classes from './Auth.module.css';

function Register() {

    const[errorMessage,setErrorMessage]=useState("")
    const [formInput,setFormInput] =useState({name:{value:"",validation:{required: true},
                                                              valid:false,touched:false},
                                              email:{value:"",validation:{required: true,
                                                      isEmail: true},valid:false,touched:false},
                                              password:{value:"",validation:{ required: true,
                                                         minLength: 6},valid:false,touched:false}})



     const dispatch=useDispatch()
     const auth = useSelector(state => state.auth)
     const {loading,error,userInfo,authRedirectPath}=auth

            useEffect(() => {
                
                return () => {
                    dispatch(actions.authReset())
                }
            }, [])
     const inputChangedHandler = (event) => {
              const {name,value}=event.target
              setFormInput({...formInput,
                             [name]:{...formInput[name],
                             value:value,
                             touched:true,
                             valid:checkValidity(value,formInput[name].validation)}})
                             setErrorMessage("")
    
         }
        
     const  submitHandler = (event) => {
                     event.preventDefault();
                     dispatch(actions.authReset())
                     if(!formInput.name.valid || !formInput.email.valid || !formInput.password.valid ){
                        setErrorMessage("please check the box in red")
                        setFormInput({...formInput,
                                            name:{...formInput.name,                          
                                                 touched:true,
                                                },
                                            email:{...formInput.email,                          
                                                    touched:true,
                                                  },
                                            password:{...formInput.password,                          
                                                   touched:true,
                                                }                                                           
                                    })
                            }
                  else{
                      const userData={
                              name:formInput.name.value,
                              email:formInput.email.value,
                              password:formInput.password.value
                            }
                     
                            dispatch(actions.registerUser(userData))
                  }
                     }
  
        let isvalidName=!formInput.name.valid && formInput.name.touched
        let isvalidEmail=!formInput.email.valid && formInput.email.touched
        let isvalidPassword=!formInput.password.valid && formInput.password.touched   
    return (
        <div className={classes.Auth}>
              {loading&&<Spinner/>}  
            {userInfo?<Redirect to={authRedirectPath}/>:<>
            
            <h4 className={classes.Label}>Register</h4>
            <span className={classes.Error}>{errorMessage}{error}</span>
            <form  onSubmit={submitHandler}>
               
                <input className={ `${classes.InputElement} ${classes.Input} ${isvalidName && classes.Invalid}`}   type="text" name="name" value={formInput.name.value} onChange={inputChangedHandler}  placeholder="enter your name here"/>             
                <input className={ `${classes.InputElement} ${classes.Input} ${isvalidEmail && classes.Invalid}`}   type="email" name="email" value={formInput.email.value} onChange={inputChangedHandler}  placeholder="enter your email here"/>
                <input className={ `${classes.InputElement} ${classes.Input} ${isvalidPassword && classes.Invalid}`}  type="password" name="password" value={formInput.password.value} onChange={inputChangedHandler} placeholder={isvalidPassword?"password must be 6 or more character ":"password(6 or more character)"}/>
                <Button btnType="Success">Submit</Button>
               <br/><strong className={classes.Label}>already a memeber?</strong> <NavLink to="/login"> Login</NavLink>

            </form></>
}
        </div>
    )
}

export default Register
