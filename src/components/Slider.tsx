"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const data = [
  {
    id:1,
    title:"always fresh & always crispy & always hot",
    image:"/slide1.png",
  },
  {
    id:1,
    title:"we deliver your order wherever you are in NY",
    image:"/slide2.png",
  },
  {
    id:3,
    title:"the best pizza to share with your family",
    image:"/slide3.jpg",
  },
];

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
   useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
   }, []);

  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-0 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full relative h-[300px] sm:h-[400px] md:flex-1 md:h-auto">
        <Image src={data[currentSlide].image} alt="" fill className='object-cover' />
      </div>
    </div>
  )
}

export default Slider