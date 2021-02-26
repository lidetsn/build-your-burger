import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { NavLink,Redirect } from 'react-router-dom';
import Button from '../../Button/Button';
import * as actions from '../../../store/actions/index';
import classes from './Auth.module.css';
import checkValidity from '../../../helper/inputValidation'
import Spinner from '../../Spinner/Spinner'

function Login(props) {


          const auth = useSelector(state => state.auth)
          const {loading,error,userInfo,authRedirectPath}=auth
          const burgerBuilder = useSelector(state => state.burgerBuilder)
          const {building}=burgerBuilder

            const[errorMessage,setErrorMessage]=useState("")
            const [formInput,setFormInput] =useState({email:{value:"",validation:{required: true,
                                                                                  isEmail: true},valid:false,touched:false},
                                                      password:{value:"",validation:{ required: true,
                                                                                       },valid:false,touched:false}})
            const dispatch=useDispatch()
          //to clear up error 
             useEffect(() => {
                        return () => {
                    dispatch(actions.authReset())
                 }
             }, [])

       const inputChangedHandler = (event) => {
                 //  const [name,value]=event.target
                 const {name,value}=event.target
                   setFormInput({...formInput,
                                  [name]:{...formInput[name],
                                  value:value,
                                  touched:true,
                                  valid:checkValidity(value,formInput[name].validation)}})
                                  setErrorMessage("")
       
            }
            let isvalidEmail=!formInput.email.valid && formInput.email.touched
            let isValidPassword=!formInput.password.valid && formInput.password.touched   

    const  submitHandler =  (event) => {
        
        event.preventDefault();
        dispatch(actions.authReset())
                      if(!formInput.email.valid || !formInput.password.valid){
                           setErrorMessage("please check your email or password")

                             
                                        setFormInput({...formInput,
                                                    password:{...formInput.password,                          
                                                    touched:true,
                                                },
                                                    email:{...formInput.email,                          
                                                        touched:true,
                                                },
                                                                            
                                                })

                          
                        }
                      
                        else dispatch(actions.auth(formInput.email.value,formInput.password.value))
                    
                        }
                        
    return (
        <div className={classes.Auth}> 
            {userInfo?  <Redirect to={authRedirectPath}/>:<>
           
            {/* <h4>Login</h4> */}
            {loading?<Spinner/>: <h4 className={classes.Label}>Login</h4>}  
            <span className={classes.Error}> {errorMessage}{error}</span>         
  

            <form  onSubmit={submitHandler}>
                
                <input className={ `${classes.InputElement} ${classes.Input} ${isvalidEmail && classes.Invalid}`}   type="text" name="email" value={formInput.email.value} onChange={inputChangedHandler}  placeholder="enter your email here"/>
                <input className={`${classes.InputElement} ${classes.Input} ${isValidPassword && classes.Invalid}`}  type="password" name="password" value={formInput.password.value} onChange={inputChangedHandler} placeholder="password"/>
                <Button btnType="Success">Submit</Button>
               <br/><strong className={classes.Label}>not a memeber ?</strong> <NavLink to="/register"> Register</NavLink>
            </form></>
            }
        
        </div>
    
    )
}

export default Login
