import React from 'react'

function GamesbyGenreID({gameList}) {

  return (
    <div className=''>
        <h1 className='mb-5 mt-5 text-[30px] font-bold dark:text-white'>Popular Games</h1>
        <div className='grid gird-cols-1 md:grid-cols-3 gap-5'>
            {gameList?.map((item,index)=>(
                <div className='bg-[#76a8f75e] rounded-xl p-4 mb:pb-20 hover:scale-105 transition-all ease-in-out duration-300'>
                    <img className='object-cover rounded-lg h-[80%] w-full mb-2' src={item.background_image}/>
                    <h2 className='font-bold dark:text-white'>{item.name}<span className='rounded-sm ml-2 text-[10px] font-medium bg-green-100 text-green-700 p-1'>{item.metacritic}</span></h2>
                    <h2 className='text-gray-500 dark:text-gray-400 font-bold'>⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default GamesbyGenreID