import React from 'react'
import Navbar from './Navbar'
import {Outlet } from 'react-router-dom'
const Layouts = () => {
  return (
    <div>
      <Navbar />
      <main className='flex-grow max-w-6xl w-full mx-auto px-4 py-8'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layouts