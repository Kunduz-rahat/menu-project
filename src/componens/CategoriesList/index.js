import React from 'react';
import { Link } from "react-router-dom";

const CategoriesList = ({ meals }) => {
  return (
    <div className='container flex justify-around py-8 mx-auto bg-white  '>
      <div className='hidden w-full md:block md:w-auto" id="mobile-menu mx-auto'>
        <div className='space-x-8'>
          {
            meals.map(item => (
              <div className='m-auto'  key={item.idCategory} >
                <Link to={`/categories/${item.strCategory}`} className='link'>
                  <a className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>{item.strCategory}</a>
                </Link>
              </div>
            )
            )
          }
        </div>


      </div>


    </div>
  )
};

export default CategoriesList;