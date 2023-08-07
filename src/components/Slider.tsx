import Image from 'next/image'
import React from 'react'

const data = [
    {
        id: 1,
        title : 'Always fresh & Always CRISPY & Always HOT',
        image : '/slide1.png'
    },
    {
        id: 2,
        title : "We deliver your order whenever you're in NY",
        image : '/slide2.png'
    },
    {
        id: 3,
        title : 'The best PIZZA to share with your family & friends',
        image : '/slide3.png'
    }
]

const Slider = () => {
    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
            {/* Text Container */}
            <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
                <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>Test</h1>
                <button className='bg-red-500 text-white py-4 px-8 delay-75 hover:bg-violet-400'>Order Now</button>
            </div>
            {/* Image Container */}
            <div className='h-1/2 relative w-full'>
                <Image className='object-cover' src='/slide1.png' alt='Slider Image' fill />
            </div>
        </div>
    )
}

export default Slider
