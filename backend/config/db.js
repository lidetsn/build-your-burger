const mongoose=require("mongoose")



const connectDb=async ()=>{
                try {
                  const connected= await mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true})
                        if(connected){
                            console.log("db connected successfuly")
                        }
                        else{
                            console.log("something went wrong")
                        }
                
                    
                } catch (error) {
                    console.log(error)
                    
                }


}

module.exports=connectDb