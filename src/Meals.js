import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Meals =() =>{
const [meals, setMeals] = useState([])
  useEffect(() =>{
    axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
      .then(({data})=> setMeals(data.meals))
  }, [])
  return (
    <div>
      <h1>Menu</h1>
      <div className='row'>

        {
          meals.map(item => (
              <div key={item.idMeal}>
                <img src={item.strMealThumb} alt="" className='meals_img'/>
                <Link  to={`/product/${item.idMeal}`} clasName='link'><div>{item.strMeal}</div></Link>
              </div>
            )
          )
        }

      </div>
    </div>
  )
}
  export default Meals