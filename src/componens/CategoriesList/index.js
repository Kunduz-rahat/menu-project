import React from 'react';
import { Link } from "react-router-dom";

const CategoriesList = ({ meals }) => {
  return (
    <div className='container '>
      <div className='flex h-screen'>
        {
          meals.map(item => (
            <div className='m-auto' key={item.idCategory} >
              <Link to={`/categories/${item.strCategory}`} className='link'>
                <button className='p-2 pl-5 pr-5 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-blue-500 hover:text-gray-100 focus:border-4 focus:border-blue-300'>{item.strCategory}</button>
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