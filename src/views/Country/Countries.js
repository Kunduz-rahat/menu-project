import React, {useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom"
import MealsList from "../../componens/MealsList/MealsList";


const Countries = () => {
  const [meals, setMeals] = useState([])
  const params = useParams()
  axios(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.name}`)
    .then(({data}) => setMeals(data.meals))
  return (
  <div>
   <MealsList meals={meals}/>
  </div>
  )
}
export default Countries