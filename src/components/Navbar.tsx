import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Cart from './Cart'

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 md:h-24 uppercase lg:px-20 xl:px-40'>
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href='/'>HomePage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/contact'>Contact</Link>
      </div>
      {/* Logo */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href='/'>Cheezious</Link>
      </div>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 text-md items-center justify-end flex-1">
        <div className='md:absolute top-3 right-2 gap-1 lg:static flex items-center cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src='/phone.png' alt='Phone Icon' width={20} height={20} />
          <span >123456789</span>
        </div>
        {!user ? <Link href='/login'>Login</Link> : <Link href='/orders'>Orders</Link>}
        <Cart />
      </div>
    </div>
  )
}

export default Navbar
