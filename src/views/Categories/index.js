import React, { useState} from 'react';
import axios from "axios";
import { useParams} from "react-router-dom"
import MealsList from '../../componens/MealsList';
import Layout from '../../componens/Layout';







const Categories = () => {
  const [meals, setMeals] = useState([])
  const params = useParams()
  axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`)
    .then(({data}) => setMeals(data.meals))

  return (
    <Layout>
  <div className='container'>
     <MealsList meals={meals}/>
    </div>
    </Layout>
  
  )
};

export default Categories;