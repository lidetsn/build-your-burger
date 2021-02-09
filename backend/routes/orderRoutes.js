const router=require("express").Router()

const Order=require("../models/orders")


router.post("/",async (req,res)=>{
      const data=req.body
      console.log(data)
           const order=new Order(data)
         const ress=await order.save()
         res.send("recieved")


})

router.get("/", async(req,res)=>{
     const data=await Order.find({})
     console.log(data) 
     res.json(data)
    
  

})



module.exports=router

