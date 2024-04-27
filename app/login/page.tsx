"use client";
import React from 'react'
import Link from 'next/link'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'next/navigation'

const page = () => {
    const searchPar = useSearchParams()
    const loggedin = searchPar.has("loggedin") ? searchPar.get("loggedin") === "true" ? true : false : false
  return (
    <div className='text-center mb-10'>
    <Navbar loggedin={loggedin}/>
    <Login />
    </div>
  )
}

export default page