import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams} from "react-router-dom"
import MealsList from '../../componens/MealsList';







const Categories = () => {
  const [meals, setMeals] = useState([])
  const params = useParams()
  axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`)
    .then(({data}) => setMeals(data.meals))

  return (
    <div>
     <MealsList meals={meals}/>
    </div>
  )
};

export default Categories;