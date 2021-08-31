import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import MealsList from "../../componens/MealsList/MealsList";

const Ingredients = () => {
  const params = useParams()
  const [meal, setMeal] = useState([])
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
      .then(({data}) => setMeal(data.meals))
  }, [params.name])

  return (
    <div>
      <div className='info'>
        <div className='ingredient_card'>
          <div className='ing_title'>{params.name}</div>
          <img src={`https://www.themealdb.com/images/ingredients/${params.name}.png`} className='img_meal' alt=""/>
        </div>
        <MealsList meals={meal}/>
      </div>

    </div>
  )
}

export default Ingredients