import React from 'react';

import { Link } from "react-router-dom";

const CategoriesList = ({ meals }) => {

  return (
    <div className='container '>
      < div className='flex flex-wrap justify-center mb-5'>
        
          {
            meals.map(item => (
              <div key={item.idMeal} className='flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300'  key={item.idCategory} >
                <Link to={`/categories/${item.strCategory}`} className='link'>
                  <button className='text-xs font-normal leading-none max-w-full flex-initial'>{item.strCategory}</button>
                </Link>
              </div>
            )
            )
          }
        


      </div>


    </div>
  )
};

export default CategoriesList;