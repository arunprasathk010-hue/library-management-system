import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectedDB from "./config/db.js"
import BooksRouter from "./Router/Book.js" 
import MemberRouter from "./Router/Member.js" 

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req,res)=>{
    res.status(200).json("Server Running Successfully")
})
 app.use("/api/books", BooksRouter)
 app.use("/api/members", MemberRouter)

connectedDB()
const port=process.env.PORT

app.listen(port,()=>{
    console.log("Server Running on",port)
})