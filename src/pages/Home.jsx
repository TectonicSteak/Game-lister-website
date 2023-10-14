import React from 'react'
import GenreList from '../components/GenreList'

function Home() {
  return (
    <div className="grid grid-cols-6 px-5">
      <div className="hidden md:block">
        <GenreList/> 
      </div>
      <div className="coll-span-6 md:col-span-5">Game List</div>
    </div>
  )
}

export default Home