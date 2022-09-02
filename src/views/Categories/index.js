import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom"
import MealsList from '../../componens/MealsList';
import Layout from '../../componens/Layout';
import Spinner from '../../componens/Spinner';








const Categories = () => {
  const [meals, setMeals] = useState([])
  const params = useParams()
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`)
      .then(({ data }) => {
        setMeals(data.meals)
        setLoading(false)
        console.log('render')
      })

  }, [params.name])
if(isLoading){
  return <div>
   <Spinner/>
  </div>
}
  return (
    <Layout>
      <div className='container'>
        <MealsList meals={meals} />
      </div>
    </Layout>

  )
};

export default Categories;