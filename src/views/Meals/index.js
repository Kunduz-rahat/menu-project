import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import MealsList from "../../componens/MealsList";
import CountriesList from "../../componens/CountriesList";


const Meals = () => {
  const [meals, setMeals] = useState([])
  const [seacrh, setSearch] = useState('')
  const history = useHistory()

  const handleSeacrh = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = () => {
    if (seacrh.trim()) {
      history.push(`/browse/${seacrh}`)
    }
  }
  useEffect(() => {
    axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
      .then(({data}) => setMeals(data.meals))
  }, [])
  return (
    <div>
      <h1 className="text-7xl">Top Recipes of the day</h1>
      <form className='form'>
        <input type="text" onKeyPress={event => {if(event.key === "Enter")handleClick()}} onChange={handleSeacrh} placeholder='Search...' className='form_search'/>
        <button type="button" onClick={handleClick} className='form_search'>Search</button>
      </form>
      <MealsList meals={meals}/>
      <CountriesList meals={meals}/>
    </div>
  )
}
export default Meals