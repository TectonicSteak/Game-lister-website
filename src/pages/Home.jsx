import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner'
import Trending from '../components/Trending'
import GamesbyGenreID from '../components/GamesbyGenreID'


function Home() {

  const [allGamesList,setAllGamesList] = useState()
  const [gamesByGenre,setGamesByGenre] = useState()


  useEffect(()=>{
    getAllGames()
    getGamesByGenreID(4)
  },[])

  const getAllGames =() => {
    GlobalApi.getAllGames.then((response)=>{
      setAllGamesList(response.data.results)
    })
  }

  const getGamesByGenreID=(id)=>{
    GlobalApi.getGamelistbyGenreID(id).then((response)=>{
      setGamesByGenre(response.data.results)
    })
  }

  return (
    <div className="grid grid-cols-6 px-5 gap-5">
      <div className="hidden md:block">
        <GenreList genreID={(genreID)=>(getGamesByGenreID(genreID))}/> 
      </div>
      <div className="col-span-6 md:col-span-5">
          {allGamesList?.length>0 && gamesByGenre?.length>0?
          <div>
            <Banner gameBanner={allGamesList[Math.floor(Math.random()*allGamesList.length)]}/>
            <Trending gameList={allGamesList}/>
            <GamesbyGenreID gameList = {gamesByGenre}/>
          </div>
          :null}
      </div>
    </div>
  )
}

export default Home