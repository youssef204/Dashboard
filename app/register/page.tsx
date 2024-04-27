"use client";
import React from 'react'
import Register from '../components/Register'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'next/navigation'
const page = () => {
    const searchPar = useSearchParams()
    const loggedin = searchPar.has("loggedin") ? searchPar.get("loggedin") === "true" ? true : false : false
  return (
    <div className='text-center mb-10'>
        <Navbar loggedin={loggedin}/>
        <Register/>
    </div>
  )
}

export default page