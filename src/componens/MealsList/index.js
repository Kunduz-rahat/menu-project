import React from "react";
import { Link } from "react-router-dom";
const MealsList = ({ meals }) => {
  return (
    <div className='h-screen flex items-center justify-center bg-white'>
      <div className="grid grid-cols-12 px-18 gap-5">
        {
          meals.map(item => (
            <div key={item.idMeal}>

              <Link to={`/product/${item.idMeal}`} className='col-span-3 bg-rose-700 rounded-xl h-52 md:h-80'>
                <img src={item.strMealThumb} alt="" className='rounded-t-xl max-h-44' />
                <p className='text-xl md:text-3xl text-gray-50 pt-5 pl-3'>{item.strMeal} </p>
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