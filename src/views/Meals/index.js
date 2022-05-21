import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import MealsList from "../../componens/MealsList";
import CountriesList from "../../componens/CountriesList";
import CategoriesList from "../../componens/CategoriesList";
import Layout from "../../componens/Layout";
import Spinner from "../../componens/Spinner";
import NotFound from "../NotFound";


const Meals = () => {
  const [meals, setMeals] = useState([])

  const history = useHistory();
  const [loading, setLoading]=useState(true);
  const [notFound, setNotFound]= useState(false)



  useEffect(() => {
    axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
      .then(({ data }) => {
        setMeals(data.meals)
        setLoading(false)
      }).catch(()=>setNotFound(true))
      .finally(()=>setLoading(false))
  }, [])
  if(loading){
    return <Spinner/>
  }
  if(notFound){
    return <NotFound/>
  }
  return (
    <Layout>
      <div className="container">
        <h1 className="recipes_title">Top Recipes of the day</h1>
        <MealsList meals={meals} />
        <CountriesList meals={meals} />
        <CategoriesList meals={meals} />
      </div>
    </Layout>

  )
}
export default Meals