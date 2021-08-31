import React, {useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom"
import CountriesList from "../../componens/CountriesList/CountriesList";


const Countries = () => {
  const [meals, setMeals] = useState([])
  const params = useParams()
  axios(`www.themealdb.com/api/json/v1/1/filter.php?a=${params.name}`)
    .then(({data}) => setMeals(data.meals))
  return (
  <div>
   <CountriesList country={meals}/>
  </div>
  )
}
export default Countries