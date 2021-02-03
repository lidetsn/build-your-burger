import React, { Component ,useState} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../Burger/Burger';


//class BurgerBuilder extends Component{
const BurgerBuilder =()=>{
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    const [ingredients,setIngredints]=useState({salad:0,bacon:0,cheese:0,meat:0})
    // state = {
    //     ingredients: {
    //         salad: 0,
    //         bacon: 0,
    //         cheese: 0,
    //         meat: 0
    //     }
    // }
 //render(){
        return (
            <Aux>
                <Burger ingredients={ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    
}
//}

export default BurgerBuilder;