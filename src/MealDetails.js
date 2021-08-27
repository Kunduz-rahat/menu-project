import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const MealDetails = () => {

  const [meal, setMeal] = useState({})
  const [ingredients, setIngredients] = useState([])
  const params = useParams()
  const [youtube, setYoutube] =useState('')

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then(({data}) => {
        const obj = data.meals[0]
        const ings = Array(20).fill(0).reduce((acc, item, idx) => {
          if (obj[`strIngredient${idx + 1}`]) {
            return ([...acc, obj[`strIngredient${idx + 1}`]])
          }
          return acc
        }, [])
        const str = obj.strYoutube.slice(obj.strYoutube.indexOf('v=')+2, obj.strYoutube.length)
        console.log(str)
        setYoutube(str)
        setIngredients(ings)
        setMeal(obj)
      })
  }, [params.id])

  return (
    <div>
      <div className='info'>
        <div>
          <div className='title'>{meal.strMeal}</div>
          <img src={meal.strMealThumb} alt="" className='img_meal'/>
          <div className='descreption_meal'>{meal.strInstructions}</div>
          <iframe width="360" height="315" src={`https://www.youtube.com/embed/${youtube}/" title="YouTube video player`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
        </div>

        <div className='card'>
            {ingredients.map((it) => (
              <div key={it}>
                <Link to={`/ingredient/${it}`}>{it}
                <img src={`https://www.themealdb.com/images/ingredients/${it}.png`} alt="" className='img_ingredient'/>
                </Link>
              </div>
            ))}

        </div>
      </div>
    </div>
  )

}
export default MealDetails