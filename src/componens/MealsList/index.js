import React from "react";
import { Link } from "react-router-dom";
const MealsList = ({ meals }) => {
  return (
    <div >
      
        {
          meals.map(item => (
            <div key={item.idMeal}>
              <Link to={`/product/${item.idMeal}`} >
               
                <img alt="example" src={item.strMealThumb} />
                
                  <h2>{item.strMeal}</h2>
               
              </Link>
            </div>
          )
          )
        }
    </div>
  )
}
export default MealsList