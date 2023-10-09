import React from 'react'
import GenreList from '../components/GenreList'

function Home() {
  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block">
        <GenreList/> 
      </div>
      <div className="coll-span-4 md:col-span-3">Game List</div>
    </div>
  )
}

export default Home