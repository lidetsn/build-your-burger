const router=require("express").Router()
const User=require("../models/users")



router.post("/",(req,res)=>{

})

router.get("/",(req,res)=>{
    res.send("WELCOME TO EXPRESS USER")
})

module.exports=router