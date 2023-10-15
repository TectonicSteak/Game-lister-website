import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const GenreList = ({genreID}) => {

    const [genreList,setGenreList] = useState()
    const [activeIndex,setActiveIndex] = useState(0)

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
            <h1 className='text-[30px] font-bold dark:text-white mb-3'>Genre</h1>
            {genreList?.map((item,index) => (
                <div
                onClick={()=>{setActiveIndex(index);genreID(item.id)}}
                className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 hover:dark:bg-gray-600 p-2 rounded-lg group ${activeIndex == index?'bg-gray-300 dark:bg-gray-600':null}`}
                >
                    <img src={item.image_background} className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex == index ?"scale-105":null} `}/>
                    <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex == index ?"font-bold":null}`}>{item.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default GenreList