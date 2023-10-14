import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const GenreList = () => {

    const [genreList,setGenreList] = useState()

    useEffect(() => {
        getGenreList()
    },[])
    const getGenreList = () => {
        GlobalApi.getGenreList.then((response)=>{
            setGenreList(response.data.results)
            console.log(response.data.results);
        })
    }

    return (
        <div>
            <h1 className='text-[30px] font-bold dark:text-white'>Genre</h1>
            {genreList?.map((item) => (
                <div className='flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-600 p-2 rounded-lg group'>
                    <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out'/>
                    <h3 className='dark:text-white text-[18px] group-hover:font-bold'>{item.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList