const router=require("express").Router()

const Order=require("../models/orders")
const auth=require("../middleware/auth")


router.post("/",auth,async (req,res)=>{
      const data=req.body
        const neworder={
                   ...req.body,
                   user:req.user
        }
      //console.log(data)
           const order=new Order(neworder)
            const ress=await order.save()
         res.send("recieved")


})

router.get("/",auth, async(req,res)=>{
     const data=await Order.find({user:req.user}).sort({ orderDate: 'desc' })
    // console.log(data) 
     res.json(data)
    
  

})



module.exports=router

