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
    <header className="header">
      <div className="header__wrap" >
        <div className="logo">
          <img src={logo} alt='' />
         
        </div>
        <nav className="header__nav">
            <NavLink to="/" className='header__nav item'>Home</NavLink>
          </nav>
          <form className='form'>
        <input type="text" onKeyPress={event => {if(event.key === "Enter")handleClick()}} onChange={handleSeacrh} placeholder='Search...' className='form_search'/>
        <button type="button" onClick={handleClick} className='form_search'>Search</button>
      </form>
      </div>


    </header>
  )
}
export default Header




