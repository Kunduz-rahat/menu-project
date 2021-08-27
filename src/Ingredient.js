import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import {Link} from "react-router-dom";

const Ingredient = () => {
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
          <img src={`https://www.themealdb.com/images/ingredients/${params.name}.png`}  className='img_meal' alt=""/>
        </div>

        <div className='box'>
          {
            meal.map(item => (
              <div key={item.idMeal} >

                <Link to={`/product/${item.idMeal}`}>
                  <div className='product_name'>{item.strMeal}</div>
                  <img src={item.strMealThumb} alt="" className='img_meals'/>
                </Link>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Ingredient