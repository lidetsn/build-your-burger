const router=require("express").Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require("../models/users")




router.post("/login",async (req,res,next)=>{
    console.log(req.body)
    const {email,password}=req.body
    try {
        const user=await User.findOne({email:email})
        console.log(user)
            
     
        if(!user){

            res.status(401)
                     throw new Error("Invalid email or password")
                   }
             else{
                 const match=await bcrypt.compare(password,user.password)
                 if(!match){
                    res.status(401)

                         throw new Error("Invalid email or password")

                 }
                 else{
                      const customer={
                              customerId:user._id
                             }
                const token=await jwt.sign({data:customer},process.env.JWTSECRET,{ expiresIn: 60 * 60 })
                if(token)
                    return res.json({idToken:token,userName:user.name})
                    

                 }
             }
    } catch (error) {
        
     next(error)
    }


})

router.post("/register",async (req,res,next)=>{
    console.log(req.body)
    const {name,email,password}=req.body
    try {
        const user =await User.findOne({email})
               if(user){
                    res.status(401)
                    throw new Error("the email already exist")
               }
               else{
                const salt=await bcrypt.genSalt(10)
                const newPassword=await bcrypt.hash(password,salt)
                const newUser={
                                name,
                                password:newPassword,
                                email
                                }
                const user=new User(newUser)
                     user.save()
                     const customer={
                        customerId:user._id
                       }
                  const token=await jwt.sign({data:customer},process.env.JWTSECRET,{ expiresIn: 60 * 60 })
                  if(token)
                  return res.json({idToken:token,userName:user.name})
                          
 
               }
       
    } catch (error) {
        next(error)
        
    }
   
     
})

module.exports=router