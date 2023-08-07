import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'

const Navbar = () => {
  
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase'>
      {/* Logo */}
      <div className='text-lg '>
        <Link href='/'>Cheezious</Link>
      </div>
      {/* Mobile Menu */}
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
