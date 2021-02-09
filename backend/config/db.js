const mongoose=require("mongoose")



const connectDb=async ()=>{
                try {
                  const connected= await mongoose.connect(process.env.MONGODB,{ useNewUrlParser: true, useUnifiedTopology: true})
                        if(connected){
                            console.log("db connected successfuly")
                        }
                        else{
                            console.log("something went wrong")
                        }
                
                    
                } catch (error) {
                    console.log("internal server error")
                    
                }


}

module.exports=connectDb