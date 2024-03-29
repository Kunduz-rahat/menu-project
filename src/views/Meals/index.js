import React, { useState, useEffect } from "react";
import axios from "axios";

import MealsList from "../../componens/MealsList";
import CountriesList from "../../componens/CountriesList";
import CategoriesList from "../../componens/CategoriesList";
import Layout from "../../componens/Layout";
import Spinner from "../../componens/Spinner";
import NotFound from "../NotFound";


const Meals = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false)



  useEffect(() => {
    axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
      .then(({ data }) => {
        setMeals(data.meals)
        setLoading(false)
      }).catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [])
  if (loading) {
    return <Spinner />
  }
  if (notFound) {
    return <NotFound />
  }
  return (
    <Layout>
      <section className="pt-16 mx-auto">
        <div className="container">
          <h1 className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-3 text-4xl font-bold md:text-5xl md:leading-tight md:font-extrabold">
            <span className="text-amber-500 dark:text-slate-300 ">
              Welcome to
            </span>
            <span className="flex gap-x-1 text-lime-500">
              Recipes
            </span>
          </h1>
        </div>
      </section>
      <MealsList meals={meals} />
      <section >
        <div className="container">
          <CountriesList meals={meals} />
          <CategoriesList meals={meals} />
        </div>
      </section>



    </Layout>

  )
}
export default Meals