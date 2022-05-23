import React from "react";
import { Link } from "react-router-dom";
import './index.scss'
const MealsList = ({ meals }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
     
       {
            meals.map(item => (
              <div  className="p-4 md:w-1/3" key={item.idMeal}>
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <Link to={`/product/${item.idMeal}`} >
                  <img className='lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100' alt="example" src={item.strMealThumb} />
                  <div className="p-6">
                  <h2 className="title-font text-lg font-medium text-gray-600 mb-3">{item.strMeal}</h2>
                  </div>
                
                </Link>
              </div>
               
              </div>
            )
            )
          }
     
         
           </div>

    </div>
  )
}
export default MealsList