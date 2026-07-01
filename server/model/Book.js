import mongoose from "mongoose";


   const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required : [true,"Book title is Required"]
    },
    author:{
        type:String,
        required : [true,"Book author is Required"]
    },
    isbn:{
        type:String,
        required : [true,"Book ISBN is Required"],
    },
    genre:{
        type:String,
        required : [true,"Book genre is Required"]
    },
    publishYear:{
        type:Number,
        required : [true,"Book publish year is Required"]
    },
    totalCopies:{
        type:Number,
        required : [true,"Total copies available is Required"]
    }
   })

export default  mongoose.model("book", bookSchema)