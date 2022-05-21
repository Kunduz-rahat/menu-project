import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'

import MealsList from "../../componens/MealsList";
import './index.scss'
import Layout from "../../componens/Layout";

const Ingredients = () => {
  const params = useParams()
  const [meal, setMeal] = useState([])
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
      .then(({data}) => setMeal(data.meals))
  }, [params.name])

  return (
    <Layout>
  <div className="container">
      <div className='ingredient_info'>
        <div className='ingredient_card'>
          <h2 className='ingredient_title'>{params.name}</h2>
          <img src={`https://www.themealdb.com/images/ingredients/${params.name}.png`} className='img_meal' alt=""/>
          <MealsList meals={meal}/>
        </div>
      
      </div>

    </div>
    </Layout>
  
  )
}

export default Ingredients