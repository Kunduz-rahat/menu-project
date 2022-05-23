import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";






const Header = () => {
  const [seacrh, setSearch] = useState('');
  const history = useHistory()
  const handleSeacrh = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = () => {
    if (seacrh.trim()) {
      history.push(`/browse/${seacrh}`)
    }
  }
  return (
    <header className="bg-yellow-300 border-b border-transparent py-4 dark:bg-slate-900 dark:border-b-slate-300/10">
      <div className="container flex flex-wrap items-center justify-center" >
       
          <NavLink to="/" className='font-medium text-2xl tracking-wide text-slate-700 transition-colors duration-200 py-2 px-3 rounded hover:bg-yellow-400 hover:text-white focus:bg-yellow-500 focus:text-white dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700/50 dark:focus:bg-slate-700 dark:focus:text-slate-200'>Home</NavLink>
      
        <div  className="mx-auto md:flex md:gap-x-2 md:max-w-2xl">
        <form className='m-4 flex'>
          <input type="text" 
          onKeyPress={event => { if (event.key === "Enter") handleClick() }} onChange={handleSeacrh} placeholder='Search for a meal...' 
          className='rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white' />
          <button type="button" onClick={handleClick} className='px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r'>Search</button>
        </form>
        </div>
      </div>


    </header>
  )
}
export default Header




