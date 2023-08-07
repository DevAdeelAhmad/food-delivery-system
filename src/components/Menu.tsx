"use client";

import Image from 'next/image'
import React, { useState } from 'react'

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image alt='Open Close Icon' src="/open.png" width={20} height={20}/>
    </div>
  )
}

export default Menu
