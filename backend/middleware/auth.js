const jwt=require("jsonwebtoken")
const User=require('../models/users')


const auth=async (req,res,next)=>{
    let token
    try {
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token=req.headers.authorization.split(" ")[1]
            const decoded=jwt.verify(token,process.env.JWTSECRET)
            req.user=await User.findById(decoded.data.customerId).select("-password")
            // req.user=decoded
            console.log(req.user)
            console.log(decoded)
          return   next()
        }
        else
        res.status(401) 
        throw new Error("not authorized, no token found")
    } catch (error) {
        const err=new Error('not authorized Token failed')
        next(err)
    }
}

module.exports=auth