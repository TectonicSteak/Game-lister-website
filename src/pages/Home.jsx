import React from 'react'

function Home() {
  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block">Genre</div>
      <div className="coll-span-4 md:col-span-3">Game List</div>
    </div>
  )
}

export default Home