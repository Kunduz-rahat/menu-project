import {useState, useEffect} from "react";
import axios from "axios";

import {useParams} from 'react-router-dom'
import MealsList from "../../componens/MealsList/MealsList";

const Browse = () => {
  const [searchMeals, setSearchMeals] = useState([])
  const [error, setError] =useState('')

  const params = useParams()
useEffect(() =>{
  axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
    .then(({data})=> {
     data.meals? setSearchMeals(data.meals) : setError('DISH NOT FOUND')
    })
}, [params.name])
  return (
    <div >
      {!error.length? <MealsList meals={searchMeals}/> :error}

    </div>
  )
}

export default Browse