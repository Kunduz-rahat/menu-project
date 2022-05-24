import React from "react";
import { Link } from "react-router-dom";


const IngredientsList = ({ ingredients }) => {
  return (
    <div className="">
      {/* <div className='w-full md:w-7/12'> */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-5 mt-10 dark:text-slate-200">  Ingredients</h2>
          <div  className="grid grid-cols-2 auto-rows-fr gap-4 sm:grid-cols- lg:grid-cols-3 xl:grid-cols-4">
          {ingredients.map((it) => (
          <div className="flex flex-col gap-y-1 text-center text-xl bg-gray-100 p-4 rounded-xl transition hover:bg-lime-300 hover:drop-shadow-md hover:-translate-y-1 dark:bg-slate-800 dark:hover:bg-slate-700" key={it}>
            <Link to={`/ingredient/${it}`}>
            <img src={`https://www.themealdb.com/images/ingredients/${it}.png`} alt="" className='w-full' />
              <div className='dark:text-slate-200' >{it}</div>
             
            </Link>
          </div>
        ))}
          </div>
          
        </div>
      

      {/* </div> */}
    </div>

  )
}

export default IngredientsList