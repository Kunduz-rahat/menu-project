import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'

import MealsList from "../../componens/MealsList";

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
  <div className="container px-5 py-4 mx-auto">
      <div className='items-center justify-center'>
        <div className=' text-center text-xl bg-gray-100 p-4 rounded-xl transition hover:bg-lime-300 hover:drop-shadow-md hover:-translate-y-1 dark:bg-slate-800 dark:hover:bg-slate-700'>
          <h2 className='text-3xl font-bold mb-5 mt-10 dark:text-slate-200'>{params.name}</h2>
          <img src={`https://www.themealdb.com/images/ingredients/${params.name}.png`} className='object-cover h-48 w-96' alt=""/>
         
        </div>
        <MealsList meals={meal}/>
      </div>
   
    </div>
    </Layout>
  
  )
}

export default Ingredients