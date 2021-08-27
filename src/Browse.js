import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom'

const Browse = () => {
  const [name, setName] = useState([])
  const [error, setError] =useState('')

  const params = useParams()
useEffect(() =>{
  axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
    .then(({data})=> {
      if(data.meals){
        setName(data.meals)
      }else {
        setError('Такого блюда нет, введите другое блюдо пожалуйста')
      }


    })
}, [params.name])
  return (
    <div className='row'>

      {
        name.map(item =>(
          <div key={item.idMeal}>

            <Link to={`/product/${item.idMeal}`}>{item.strMeal}
              <img src={item.strMealThumb} alt="" className='meals_img'/>
            </Link>
          </div>
        ))
      }
      <div>{error}</div>
    </div>
  )
}

export default Browse