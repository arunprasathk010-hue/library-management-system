import mongoose from "mongoose";


   const memberSchema = mongoose.Schema({
    fName:{
        type:String,
        required : [true,"Member name  is Required"]
    },
    email:{
        type:String,
        required : [true,"Member email is Required"]
    },
    ph:{
        type:Number,
        required : [true,"Member Ph is Required"],
    },
    department:{
        type:String,
        required : [true,"Member Department is Required"]
    },
    members:{
        type:String,
        required : [true," Member year is Required"]
    }
   })

export default  mongoose.model("member", memberSchema)