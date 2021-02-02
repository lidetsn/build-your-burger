const router=require("express").Router()

const Order=require("../models/orders")


router.post("/",(req,res)=>{


})

router.get("/", (req,res)=>{
    res.send("WELCOME TO EXPRESS ORDER")

})



module.exports=router

