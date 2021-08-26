import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const MealsDetails = () => {

  const [meal, setMeal] = useState({})
  const params = useParams()

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then(({data}) => setMeal(data.meals[0]))
  }, [])
  return (
    <div>
      <div className='info'>
        <img src={meal.strMealThumb} alt="" className='meal_img'/>
        <div>{meal.strMeal}</div>

        <div>Description:{meal.strInstructions}</div>
      </div>
    </div>
  )
}
export default MealsDetails