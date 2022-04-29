import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import MealsList from '../../componens/MealsList';






const Categories = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/categories.php`)

      .then(({ data }) => (setMeals(data.categories)))

  }, [])

  return (
    <div>
      {
        meals.map(item => (
          <div key={item.idCategory} >

            <Link to={`/categories/${item.idCategory}`} className='link'>
              <img src={item.strCategoryThumb} alt="" className='meals_img' />
              <p>{item.strCategory}</p>
            </Link>

          </div>
        )
        )
      }


    </div>
  )
};

export default Categories;