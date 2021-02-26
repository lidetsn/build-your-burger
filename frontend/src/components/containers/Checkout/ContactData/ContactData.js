import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import Button from '../../../Button/Button';
import Spinner from '../../../Spinner/Spinner';
import classes from './ContactData.module.css';
import * as actions from '../../../../store/actions/index';
import Modal from "../../../Modal/Modal"
import PurchaseConfirmation from './PurchaseConfirmation'
import Aux from '../../../hoc/Auxiliary'
import checkValidity from '../../../../helper/inputValidation'



function ContactData(props) {
         const [purchased,setPurchased]=useState(false)
         const[errorMessage,setErrorMessage]=useState("")

        const [contactInfo,setContactInfo]=useState({name:{value:"",validation:{required: true},
                                                          valid:false,touched:false},
                                                    street:{value:"",validation:{required: true},
                                                          valid:false,touched:false},
                                                    zipcode:{value:"",validation:{ required: true,
                                                                                    minLength: 5,
                                                                                    maxLength: 5,
                                                                                    isNumeric: true},
                                                                                    valid:false,touched:false},
                                                    country:{value:"",validation:{required: true},
                                                              valid:false,touched:false}
                                                    ,email:{value:"",validation:{required: true, isEmail: true},
                                                            valid:false,touched:false},
                                                     deliveryMethod:{value:"fastest"}})
      
        const burgerBuilder = useSelector(state => state.burgerBuilder)
        const {ingredients,totalPrice}=burgerBuilder

        const auth = useSelector(state => state.auth)     
        const {userInfo}=auth
       
        const order = useSelector(state => state.order)
        const {loading}=order
        const dispatch = useDispatch()

        const orderHandler=(event)=>{
              event.preventDefault()
              if(!contactInfo.name.valid || !contactInfo.street.valid || !contactInfo.zipcode.valid|| !contactInfo.country.valid|| !contactInfo.email.valid ){
                setErrorMessage("PLEASE CHECK THE BOX IN THE RED")
                    setContactInfo({...contactInfo,
                                    name:{...contactInfo.name,                          
                                         touched:true,
                                        },
                                    street:{...contactInfo.street,                          
                                            touched:true,
                                          },
                                    zipcode:{...contactInfo.zipcode,                          
                                           touched:true,
                                        },
                                    country:{...contactInfo.country,                          
                                            touched:true,
                                         },
                                    email:{...contactInfo.email,                          
                                            touched:true,
                                         }                                                           
                            })
                    }
                    else{                  
                          setPurchased(true)
                         let  customer={}
                      for(let i=0;i<Object.keys(contactInfo).length;i++){
                          let key=Object.keys(contactInfo)[i]
                          customer[key]=contactInfo[key].value

                      }
                   
                        const orderdata={
                                        ingredients,
                                        price:totalPrice,
                                        customer
                                    }
                                    console.log(customer)
                                    console.log(orderdata)
                                dispatch(actions.purchaseBurger(orderdata,userInfo.idToken))
                           }
          
              }
                     
        const handleChange=(event)=>{

                const {name,value}=event.target
                setContactInfo({...contactInfo,
                             [name]:{...contactInfo[name],
                             value:value,
                             touched:true,
                             valid:checkValidity(value,contactInfo[name].validation)}})
                             setErrorMessage("")
            
        }
        const confirmationSeen=()=>{
            dispatch(actions.reSetIngredients())
            props.history.push('/');

        }
        let isvalidName=!contactInfo.name.valid && contactInfo.name.touched
        let isValidStreet=!contactInfo.street.valid && contactInfo.street.touched 
        let isValidZipcode=!contactInfo.zipcode.valid && contactInfo.zipcode.touched 
        let isValidCountry=!contactInfo.country.valid && contactInfo.country.touched 
        let isvalidEmail=!contactInfo.email.valid && contactInfo.email.touched 
    return (
       <Aux>
              <Modal show={purchased} modalClosed={confirmationSeen}>

                     {/* {loading?<Spinner/>: */}
                    <PurchaseConfirmation                         
                                confirmationSeen={confirmationSeen}                             
                                name={userInfo.userName}/>
                                {/* } */}
              </Modal>
               <div className={classes.ContactData}>
         <h4>Enter Contact Information</h4>
               <span className={classes.Error}> {errorMessage}</span>  
        <form  onSubmit={orderHandler}>
            <input  className={`${classes.InputElement} ${classes.Input} ${isvalidName && classes.Invalid}`} name="name" value={contactInfo.name.value} onChange={handleChange} type="text" placeholder="your Name" />
            <input   className={`${classes.InputElement} ${classes.Input} ${isValidStreet && classes.Invalid}`} name="street" value={contactInfo.street.value} onChange={handleChange} type="text" placeholder="Sreet" />
            <input   className={`${classes.InputElement} ${classes.Input} ${isValidZipcode&& classes.Invalid}`} name="zipcode" vaue={contactInfo.zipcode.value} onChange={handleChange}  type="text" placeholder="ZipCode"/>
            <input   className={`${classes.InputElement} ${classes.Input} ${isValidCountry && classes.Invalid}`} name="country" value={contactInfo.country.value} onChange={handleChange} type="text" placeholder="Country" />
            <input   className={`${classes.InputElement} ${classes.Input} ${isvalidEmail && classes.Invalid}`} name="email" value={contactInfo.email.value} onChange={handleChange}  type="text"  placeholder="your Email"/>
            <select className={`${classes.InputElement} ${classes.Input} `} name="deliveryMethod" value={contactInfo.deliveryMethod.value} onChange={handleChange}>
                <option value="fastest">fastest</option>
                <option value="cheapest">cheapest</option>               
            </select>
            <Button btnType="Success">ORDER</Button>
        </form>
    </div></Aux>
    )
}

export default ContactData





