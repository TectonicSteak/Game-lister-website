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
        })
    }

    return (
        <div className='text-[30px] font-bold dark:text-white'>Genre</div>
    )
}

export default GenreList