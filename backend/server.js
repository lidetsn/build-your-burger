const express=require ("express")
const dotenv=require("dotenv")
const connectDb=require("./config/db")

dotenv.config()
connectDb()


const app=express()

const PORT=process.env.PORT|| 1000

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use("/api/order/", require("./routes/orderRoutes"))
app.use("/api/user/",require("./routes/userRoutes"))


app.listen(PORT,()=>{
    console.log(`app is now running at http://localhost:${PORT}`)
})