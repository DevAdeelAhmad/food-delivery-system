"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id: 1,
        title: 'always fresh & always crispy & always hot',
        image: '/slide1.png'
    },
    {
        id: 2,
        title: "we deliver your order whenever you're in NY",
        image: '/slide2.png'
    },
    {
        id: 3,
        title: 'the best pizza to share with your family & friends',
        image: '/slide3.jpg'
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1)), 2000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className='flex flex-col h-[calc(100vh-2rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh)] lg:flex-row bg-fuchsia-50'>
            {/* Text Container */}
            <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2'>
                <h1 className='text-center uppercase p-3 md:p-9 text-2xl md:text-5xl lg:text-5xl xl:text-5xl'>
                    {data[currentSlide].title}
                </h1>
                <button className='bg-red-500 text-white py-4 px-8 delay-75 hover:bg-violet-400'>Order Now</button>
            </div>
            {/* Image Container */}
            <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
                <Image className='object-cover' src={data[currentSlide].image} alt="" fill />
            </div>
        </div>
    )
}

export default Slider
