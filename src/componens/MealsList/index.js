import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
const MealsList = ({ meals }) => {
  return (
    <div className="container">
      <div className="row">
        {
          meals.map(item => (
            <div className="meal_card" key={item.idMeal}>
              <Link to={`/product/${item.idMeal}`} >
                  <img className='meal_img' alt="example" src={item.strMealThumb} />
                <h2 className="meal_title">{item.strMeal}</h2>
              </Link>
            </div>
          )
          )
        }
      </div>

    </div>
  )
}
export default MealsList