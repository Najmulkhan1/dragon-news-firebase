import React from 'react'
import logo from "../assets/logo.png"
import { format } from 'date-fns'

const Header = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 mt-4'>
        <img className='w-[400px]' src={logo} alt="" />
        <p className='text-accent'>Journalism Without Fear or Favour</p>
        <p className='text-accent'> <span className='text-black'>{format(new Date(), "EEEE")}</span> {format(new Date(), " MMMM MM, yyyy")}</p>
    </div>
  )
}

export default Header