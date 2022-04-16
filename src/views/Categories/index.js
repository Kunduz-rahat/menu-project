import React, {useState, useEffect} from 'react';
import axios from "axios";
import MealsList from "../../componens/MealsList";




const Categories = () => {
  const [meals, setMeals] = useState([])
  
  useEffect(() => {
    axios(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(({data}) =>setMeals (data.categories))
  }, [])
  return (
  <div>
   <MealsList meals={meals}/>
  олжлжлжлjlljl
  </div>
  )
};

export default Categories;