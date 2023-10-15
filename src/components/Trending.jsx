import React from 'react'

function Trending({gameList}) {

    return (
        <div className="mt-5 hidden md:block">
            <h2 className='font-bold text-[30px] dark:text-white'>Trending</h2>
            <div className='hidden md:grid grid-cols-3 md:grid-cols-6 gap-5'>
                {gameList.map((item,index)=>index<6 &&(
                    <div className="bg-[#76a8f75e] rounded-lg hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer mt-5">
                        <img className='h-[270px] rounded-t-lg object-cover' src={item.background_image}/>
                        <h2 className='dark:text-white p-2 text-[20px] font-bold'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending