import React from 'react'

function Banner({gameBanner}) {
  return (
    <div className='relative'>
        <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
            <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white p-1'>Get Now</button>
        </div>
        <img className='md:h-[320px] lg:h-[500px] w-full object-cover rounded-xl' src={gameBanner.background_image}/>
    </div>
  )
}

export default Banner