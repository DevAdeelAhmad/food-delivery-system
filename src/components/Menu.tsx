"use client";

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import Cart from './Cart';

const links = [
  { id: 1, title: 'HomePage', url: '/' },
  { id: 2, title: 'Menu', url: '/' },
  { id: 3, title: 'Working Hours', url: '/' },
  { id: 4, title: 'Contact', url: '/' }
]

const Menu = () => {
  const [open, setOpen] = useState(false);
  //temporary
  const user = false;
  return (
    <div>
      {!open ? (
        <Image alt='Open Icon' src="/open.png" width={20} height={20} onClick={() => setOpen(true)} />
      ) : (
        <Image alt='Close Icon' src="/close.png" width={20} height={20} onClick={() => setOpen(false)} />
      )}
      {open && (<div className='bg-red-500 text-white z-10 absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl'>
        {links.map(item => (
          <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>{item.title}</Link>
        ))}
        {!user ? <Link href='/login' onClick={() => setOpen(false)}>Login</Link> : <Link onClick={() => setOpen(false)} href='/orders'>My Orders</Link>}
        <Link href='/cart' onClick={() => setOpen(false)}>
          <Cart />
        </Link>
      </div>)}
    </div>
  )
}

export default Menu
