import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import MealsList from "../../componens/MealsList";
import CountriesList from "../../componens/CountriesList";
import CategoriesList from "../../componens/CategoriesList";


const Meals = () => {
  const [meals, setMeals] = useState([])

  const history = useHistory()


  
  useEffect(() => {
    axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
      .then(({data}) => setMeals(data.meals))
  }, [])
  return (
    <div className="container">
      <h1 className="recipes_title">Top Recipes of the day</h1>
    
      <CountriesList meals={meals}/>
      <CategoriesList  meals={meals}/>
      <MealsList meals={meals}/>
     
    </div>
  )
  }
export default Meals