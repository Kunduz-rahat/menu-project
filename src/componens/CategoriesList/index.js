import React from 'react';
import { Link } from "react-router-dom";

const CategoriesList = ({ meals }) => {
  return (
    <div className='container'>
      <div className='link'>
        {
          meals.map(item => (
            <div key={item.idCategory} >
              <Link to={`/categories/${item.strCategory}`} className='link'>
                <p>{item.strCategory}</p>
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