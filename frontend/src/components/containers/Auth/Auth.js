import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import Button from '../../Button/Button';
import * as actions from '../../../store/actions/index';
import classes from './Auth.module.css';




function AuthR() {

       const [formInput,setFormInput] =useState({email:"",password:""})
       const dispatch=useDispatch()


       const inputChangedHandler = (event) => {
                 //  const [name,value]=event.target
                 const {name,value}=event.target
                   setFormInput({...formInput,[name]:value})
       
            }

    const  submitHandler = (event) => {
                        event.preventDefault();
                               dispatch(actions.auth(formInput.email,formInput.password))
                        }
     


                      
    return (
        <div className={classes.Auth}>
            <form  onSubmit={submitHandler}>
                <input className={classes.Input, classes.InputElement}   type="text" name="email" value={formInput.email} onChange={inputChangedHandler}  placeholder="enter your email here"/>
                <input className={classes.Input,classes.InputElement}  type="password" name="password" value={formInput.password} onChange={inputChangedHandler} placeholder="password"/>
                <Button btnType="Success">SUBMIT</Button>
            </form>
        </div>
    )
}

export default AuthR
