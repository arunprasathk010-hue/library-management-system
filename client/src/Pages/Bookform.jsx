import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router";
import api from '../../Api/api.js';
import { useEffect } from 'react';
const BookForm = () => {


  const {id} = useParams()

   const editMode =  !!id


  const [formData, setFormData] = useState({title:"", author:"", isbn:"", genre:"", publishYear:"", totalCopies:""})

  const navigate = useNavigate()

 const handleChange = (e)=>{

    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      
      if(editMode){
        const res = api.put(`/books/${id}`, formData)
        console.log(res)
      }else{
        await api.post("/books", formData)
      }
      navigate("/books")
    }catch(err){
      console.log(err.message)
    }

  }

  useEffect(()=>{
    if(editMode){

      const fetchBooks =  async()=>{
       try{
         const res =  await api.get(`/books/${id}`)
         const book =  res.data.data

         setFormData({
          title : book.title,
          author : book.author,
          isbn : book.isbn,
          genre : book.genre,
          publishYear : book.publishYear,
          totalCopies : book.totalCopies
         })
       }catch(err){
        console.log(err.message)
       }
      }
      fetchBooks()
    }
  },[id, editMode])


  return (
    <div className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg border border-gray-300 shadow-sm">
      
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-700">
          {editMode ? "Edit a Book" : " Add a New Book"}
        </h1>

        <Link to="/books" className="text-blue-500 hover:underline">
          Back to List
        </Link>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-5">

          <div className="md:col-span-2">
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Book Title *
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Author *
            </label>

            <input
              type="text"
              name="author"
              onChange={handleChange}
              value={formData.author}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              ISBN *
            </label>

            <input
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Genre / Category
            </label>

            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Publish Year
            </label>

            <input
              type="text"
              name="publishYear"
              value={formData.publishYear}
              onChange={handleChange}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Total Copies
            </label>

            <input
              type="text"
              name="totalCopies"
              value={formData.totalCopies}
              onChange={handleChange}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Link to="/books" className="bg-gray-100 font-semibold hover:bg-gray-300 text-gray-500 px-5 py-2.5 border border-gray-300">
            Cancel
          </Link>

          <button className='bg-blue-500 px-2.5 py-3 rounded-lg text-white font-bold'>
          {editMode ? "Update Book" : "Add  Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;