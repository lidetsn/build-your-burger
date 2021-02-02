const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
   name:{
       type:String
   },
   email:{
       type: String,
       required:true

   },
   passord:{
       type:String,
       required:true
   }

})

module.exports=User= mongoose.model("user",userSchema)

