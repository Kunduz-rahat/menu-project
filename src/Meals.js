import {useState, useEffect} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";


const Meals = () => {
  const [meals, setMeals] = useState([])
  const [seacrh, setSearch] = useState('')
  const history = useHistory()

  const handleSeacrh = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = () => {
    if (seacrh.trim()){
      history.push(`/browse/${seacrh}`)
    }
  }
  useEffect(() => {
    axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
      .then(({data}) => setMeals(data.meals))
  }, [])
  return (
    <div>
      <h1>Latest Meals</h1>
      <form className='form'>
        <input type="text" onChange={handleSeacrh} placeholder='Search...' className='form_search'/>
        <button type="button" onClick={handleClick} className='form_search'>Search</button>
      </form>


      <div className='row'>

        {
          meals.map(item => (
              <div key={item.idMeal}>

                <Link to={`/product/${item.idMeal}`} clasName='link'>
                  <img src={item.strMealThumb} alt="" className='meals_img'/>
                  <div>{item.strMeal}</div>
                </Link>
              </div>
            )
          )
        }


      </div>
    </div>
  )
}
export default Meals