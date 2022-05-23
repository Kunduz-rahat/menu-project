import React ,{useState} from "react";
import { NavLink, useHistory } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import './index.scss';




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
    <header className="header container">
      <div className="header__wrap" >
        <div className="logo">
          <img src={logo} alt='' />
         
        </div>
        <nav className="header__nav">
            <NavLink to="/" className='text-xl font-bold underline'>Home</NavLink>
          </nav>
          <form className='form'>
        <input type="text" onKeyPress={event => {if(event.key === "Enter")handleClick()}} onChange={handleSeacrh} placeholder='Search...' className='form_search'/>
        <button type="button" onClick={handleClick} className='border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'>Search</button>
      </form>
      
      </div>


    </header>
  )
}
export default Header




