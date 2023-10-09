import React, { useContext, useEffect, useState } from 'react'
import gameLogo from './../Images/gameLogo.png'
import { HiMagnifyingGlass,HiMoon,HiSun } from "react-icons/hi2";
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const [toggle,setToggle] = useState(false)

  const {theme,setTheme} = useContext(ThemeContext)

  useEffect(()=>{
    setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')
  })

  return (
    <div className='flex items-center p-3'>
        <img src={gameLogo} width={70} height={70}/>
        <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
          <HiMagnifyingGlass/>
          <input type='text' placeholder='Search Games' className='px-2 bg-transparent outline-none'/>
        </div>
        <div className="">
          {theme == 'light'?(
            <HiMoon className='text-[35px] bg-slate-200
            text-black p-1 rounded-full' onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}/>
          ):(
            <HiSun className='text-[35px] bg-black
            text-white p-1 rounded-full' onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}/>
          )}
        </div>
    </div>    
  )
}

export default Header