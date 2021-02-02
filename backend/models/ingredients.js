const mongoose=require("mongoose")

const ingredientSchemma=new mongoose.Schema({
name:{
    type:String

}
})

module.exports=Ingredients=mongoose.model("ingredient",ingredientSchemma)