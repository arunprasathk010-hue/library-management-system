import Book from "../Model/Book.js"


   export const creatBooks =(req,res) => {
       try{
        const {title,author,isbn,genre,publishYear,totalCopies} =req.body
        const book = Book.create({
            title,
            author,
            isbn,
            genre,
            publishYear,
            totalCopies
        })    
        res.status(200).json({message:"Book created successfully"})
    
    }catch(err){
        console.log(err.message)
    }
   }


   export const getAllBooks = async(req,res)=>{
    try{
        const book = await Book.find().sort({createdAt:1})
        res.status(200).json({message:"Book get successfully", data:book})
    }catch(err){
        console.log(err.message)
    }
   }

    export const getOneBooks = async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id)
        res.status(200).json({message:"Book get successfully", data:book})
    }catch(err){
        console.log(err.message)
    }
   }

   export const Update = async(req,res)=>{
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,  {returnDocument:"after"})
        res.status(200).json({message:"Book Updated successfully", data:book})
    }catch(err){
        console.log(err.message)
    }
   }

    export const Delete = async(req,res)=>{
    try{
        const book = await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Book Deleted successfully", data:book})
    }catch(err){
        console.log(err.message)
    }
   }