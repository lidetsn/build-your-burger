const mongoose=require("mongoose")

const orderDataSchema=new mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    deliveryMethod:{
        type:String,
        required:true

    },
    email:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    }

                 })

const orderSchema=new mongoose.Schema({
    ingredients:[{}],
    orderData:orderDataSchema,
    price:{
        type:Number,
        required:true,
        default:0.0
        
    },
     user:{
         type:mongoose.Schema.Types.ObjectId,
          ref:"user"
     }
})

module.exports=Order=mongoose.model("order",orderSchema)