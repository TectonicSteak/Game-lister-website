import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

const GenreList = () => {

    useEffect(() => {
        getGenreList()
    },[])
    const getGenreList = () => {
        GlobalApi.getGenreList.then((response)=>{
            console.log(response)
        })
    }

    return (
        <div>GenreList</div>
    )
}

export default GenreList