import React from "react";
import { Link } from "react-router-dom";
const MealsList = ({ meals }) => {
  return (
    <div className="container">
      <div className="row">
        {
          meals.map(item => (
            <div key={item.idMeal}>
              <Link to={`/product/${item.idMeal}`} >
                <div className="column">
                  <img className='meal_img' alt="example" src={item.strMealThumb} />
                </div>
               
                <h2>{item.strMeal}</h2>
              
              
              
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