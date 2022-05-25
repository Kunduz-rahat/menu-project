import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import YoutubeVideo from "../../componens/YoutubeVideo";
import IngredientsList from "../../componens/IngredientsList";
import Layout from "../../componens/Layout";
const MealDetails = () => {

  const [meal, setMeal] = useState({})
  const [ingredients, setIngredients] = useState([])
  const { id } = useParams()
  const [youtube, setYoutube] = useState('')


  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(({ data }) => {
        const obj = data.meals[0]

        const ings = Array(20).fill(0).reduce((acc, item, idx) => {
          const ingredient = obj[`strIngredient${idx + 1}`]
          return ingredient ? [...acc, ingredient] : acc

        }, [])
        const str = obj.strYoutube.slice(obj.strYoutube.indexOf('v=') + 2, obj.strYoutube.length)
        console.log(str)
        setYoutube(str)
        setIngredients(ings)
        setMeal(obj)
      })
  }, [id])

  return (
    <Layout>
      <div className='container p-10'>
        <div className="flex flex-wrap">
          <div className="w-full mb-7 md:w-5/12 md:pr-10 sm:mb-0">
            <h2 className='text-3xl sm:text-4xl font-bold mt-6 mb-6 dark:text-slate-200'>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt="" className='w-full rounded' />
            <div className='text-base leading-relaxed dark:text-slate-300'>{meal.strInstructions}</div>
            <div className="mb-10 mt-10">
            <YoutubeVideo youtube={youtube} />
            </div>
          
             
          </div>
          <div className="w-full md:w-7/12 mb-4">
          <IngredientsList ingredients={ingredients} />
          </div>
        
        </div>

      </div>


    </Layout>
  )

}
export default MealDetails