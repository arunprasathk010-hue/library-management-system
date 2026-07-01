import{ useState }from 'react'
import { Link, useParams } from "react-router";
import api from '../../Api/api.js';
import { useEffect } from 'react';
const BookList = () => {

   const {id} =  useParams()

    const [books, setBooks] = useState([]);


    const fetchBooks = async()=>{
        try {
         const res =  await api.get("/books")
         console.log(res.data.data)  
         setBooks(res.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }



    useEffect(()=>{
        fetchBooks()
    },[])



    const handleDelete = (id)=>{
        try {

         api.delete(`/books/${id}`)
         fetchBooks()
            
        } catch (error) {
            console.log(error.message)
        }
    }



    return (
        <div
            className="max-w-5xl mx-auto p-6 space-y-6 bg-white shadow-sm border border-gray-100"
        >
            <div
                className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4"
            >
                <h2 className="text-2xl font-bold text-gray-500">
                    Manage Books
                </h2>

                <Link
                    to="/books/add"
                    className="bg-blue-600 font-bold text-white p-3 rounded"
                >
                    + Add New Books
                </Link>
            </div>

            <div className="overflow-x-auto border border-b border-gray-200 rounded-md">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="p-4 font-semibold text-gray-700">
                                Book Name
                            </th>

                            <th className="p-4 font-semibold text-gray-700">
                                ISBN & Category
                            </th>

                            <th className="p-4 font-semibold text-gray-700">
                                Stock Status
                            </th>

                            <th className="p-4 font-semibold text-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-200'>
                        {books.length > 0 ? (
                            books.map((b) => ( 
                                <tr key={b._id} className='hover:bg-gray-50'>
                                    <td className='p-4'>
                                        <div className='font-bold text-gray-800'>{b.title}</div>
                                        <div className='text-sm text-gray-500'>{b.author}</div>
                                    </td>

                                    <td className='text-sm text-gray-500'>
                                        <div className='font-mono text-gray-500'>{b.isbn}</div>
                                        <div className='font-mono text-gray-500'>{b.genre}</div>
                                    </td>

                                    <td className='p-4 text-sm'>
                                        <div>Publish year- {b.publishYear} </div>
                                        <div>
                                            Total Copies - {b.totalCopies}
                                        </div>
                                    </td>

                                    <td className='p-4 tetx-right space-x-3'>
                                        <Link to={`/books/edit/${b._id}`} className=' text-blue-900'>
                                            Edit
                                        </Link>

                                        <button onClick={()=>{
                                            handleDelete(b._id)
                                        }} className='text-red-900'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="">
                                <td
                                    colSpan="4"
                                    className="p-8 text-center text-gray-600 font-semibold"
                                >
                                    No Books Registered in the Category yet.
                                </td>
                            </tr>
                        )}
                    </tbody>

                    
                </table>
            </div>
        </div>
    );
};

export default BookList;