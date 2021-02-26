const express=require ("express")
const path=require( "path")

const dotenv=require("dotenv")
const connectDb=require("./config/db")
const errorHandler=require("./middleware/errorMiddleware.js") 


dotenv.config()
connectDb()


const app=express()

const PORT=process.env.PORT|| 1000

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/api/order/", require("./routes/orderRoutes"))
app.use("/api/user/",require("./routes/userRoutes"))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
   
    app.get('*', (req, res) =>
       res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
     )
   } else {
    app.get('/', (req, res) => {
       res.send('API is running....')
     })
   }

//app.use(notFound())
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`app is now running at http://localhost:${PORT}`)
})