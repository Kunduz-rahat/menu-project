import React from 'react';
import {Link} from "react-router-dom";
import './index.scss'

const CategoriesList = ({meals}) => {
  console.log(meals)
  return (
    <div>
        {
        meals.map(item => (
            <div key={item.idCategory}>

              <Link to={`/categories/${idCategory}`} clasName='link'>
                <img src={item.strCategoryThumb} alt="" className='meals_img'/>
                <p>{item.strCategory}</p>
              </Link>
            </div>
          )
        )
      }

     
<p>sfsfjsljfs</p>
    </div>
  );
};

export default CategoriesList;