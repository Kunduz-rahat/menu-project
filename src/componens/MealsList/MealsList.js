import React from "react";
import {Link} from "react-router-dom";
const MealsList =({meals})=>{
  return (
    <div className='row'>

      {
        meals.map(item => (
            <div key={item.idMeal}>

              <Link to={`/product/${item.idMeal}`} clasName='link'>
                <img src={item.strMealThumb} alt="" className='meals_img'/>
                <div>{item.strMeal}</div>
              </Link>
            </div>
          )
        )
      }


    </div>
  )
}
export default MealsList