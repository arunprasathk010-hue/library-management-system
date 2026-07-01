import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router";
import api from '../../Api/api.js';
import { useEffect } from 'react';
const MemberForm = () => {

  const{id}=useParams()

  const editMode =!!id
  const [formData,setFormData]=useState({fName:"",email:"",ph:"",department:"",members:""})

  const navigate = useNavigate()
  
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name] : e.target.value})
   }
   
     const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      
      if(editMode){
        const res = await api.put(`/members/${id}`, formData)
        console.log(res)
      }else{
        await api.post("/members", formData)
      }
      navigate("/members")
    }catch(err){
      console.log(err.message)
    }

  }

  useEffect(()=>{
    if(editMode){

      const fetchMembers =  async()=>{
       try{
         const res =  await api.get(`/members/${id}`)
         const member =  res.data.data

         setFormData({
          fName:member.fName,
          email : member.email,
          ph:member.ph,
          department:member.department,
          members:member.members
         })
       }catch(err){
        console.log(err.message)
       }
      }
      fetchMembers()
    }
  },[id, editMode])
 
 
  return (
    <div className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg border border-gray-300 shadow-sm">
      
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-700">
          {editMode ? "Edit Member" : " Add  New Members"}

        </h1>

        <Link to="/members" className="text-blue-500 hover:underline">
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
              Member Name *
            </label>

            <input
              type="text"
              name="fName"
              value={formData.fName}
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
              Member Email *
            </label>

            <input
              type="text"
              name="email"
               onChange={handleChange}
              value={formData.email}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Phone Number *
            </label>

            <input
              type="text"
              name="ph"
               onChange={handleChange}
              value={formData.ph}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Department
            </label>

            <input
              type="text"
              name="department"
               onChange={handleChange}
              value={formData.department}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-gray-700 font-semibold mb-1"
            >
              Members
            </label>

            <input
              type="text"
              name="members"
               onChange={handleChange}
              value={formData.members}
              id=""
              className="w-full border border-gray-300 p-2.5 rounded"
            />
          </div>

          
          </div>


        <div className="pt-4 flex justify-end gap-3">
          <Link to= "/members" className="bg-gray-100 font-semibold hover:bg-gray-300 text-gray-500 px-5 py-2.5 border border-gray-300">
            Cancel
          </Link>

          <button className='bg-blue-500 px-2.5 py-3 rounded-lg text-white font-bold'>
          {editMode ? "Update Member" : "Add Member"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;