import Member from "../Model/Member.js"


   export const creatMembers =(req,res) => {
       try{
        const {fName,email,ph,department,members} =req.body
        const member = Member.create({
           fName,
           email,
           ph,
           department,
           members
        })    
        res.status(200).json({message:"Member registered successfully"})
        console.log(member)
    
    }catch(err){
        console.log(err.message)
    }
   }


   export const getAllmember = async(req,res)=>{
       try{
           const member = await Member.find().sort({createdAt:1})
           res.status(200).json({message:"Member get successfully", data:member})
        //    console.log(data.members)
       }catch(err){
           console.log(err.message)
       }
      }

    export const getOneMembers = async(req,res)=>{
    try{
        const member = await Member.findById(req.params.id)
        res.status(200).json({message:"Member get successfully", data:member})
    }catch(err){
        console.log(err.message)
    }
   }

   export const Update = async(req,res)=>{
    try{
        const member = await Member.findByIdAndUpdate(req.params.id, req.body,  {returnDocument:"after"})
        res.status(200).json({message:"Member Updated successfully", data:member})
    }catch(err){
        console.log(err.message)
    }
   }

    export const Delete = async(req,res)=>{
    try{
        const member= await Member.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Book Deleted successfully", data:member})
    }catch(err){
        console.log(err.message)
    }
   }