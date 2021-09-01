import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

import IngredientsList from "../../componens/IngredientsList/IngredientsList";
import YoutubeVideo from "../../componens/YoutubeVideo/YoutubeVideo";

const MealDetails = () => {

  const [meal, setMeal] = useState({})
  const [ingredients, setIngredients] = useState([])
  const {id} = useParams()
  const [youtube, setYoutube] =useState('')

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({data}) => {
        const obj = data.meals[0]
        const ings = Array(20).fill(0).reduce((acc, item, idx) => {
          const ingredient = obj[`strIngredient${idx + 1}`]
            return ingredient ? [...acc, ingredient] :acc
        }, [])
        const str = obj.strYoutube.slice(obj.strYoutube.indexOf('v=')+2, obj.strYoutube.length)
        console.log(str)
        setYoutube(str)
        setIngredients(ings)
        setMeal(obj)
      })
  }, [id])

  return (
    <div>
      <div className='info'>
        <div>
          <div className='title'>{meal.strMeal}</div>
          <img src={meal.strMealThumb} alt="" className='img_meal'/>
          <div className='descreption_meal'>{meal.strInstructions}</div>
         <YoutubeVideo  youtube={youtube}/>
        </div>
       <IngredientsList  ingredients={ingredients}/>
      </div>
    </div>
  )

}
export default MealDetails