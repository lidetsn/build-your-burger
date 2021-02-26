const mongoose=require("mongoose")


const orderSchema=new mongoose.Schema({
    ingredients:{},
    customer: {
                name: {type: String},      
                street:{type: String},
                zipCode: {type: String},
                country: {type: String},      
                email: {type: String},
                deliveryMethod:{  type:String  }
    },
    price:{
        type:Number,
        required:true,
        default:0.0
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"user"
    },
    orderDate: {
        type: Date,
        default: Date.now,
      },
       
})
module.exports=Order=mongoose.model("order",orderSchema)

