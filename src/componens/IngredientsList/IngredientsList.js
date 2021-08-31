import React from "react";
import {Link} from "react-router-dom";

const IngredientsList =({ingredients}) =>{
  return (
    <div className='card'>
      {ingredients.map((it) => (
        <div key={it}>
          <Link to={`/ingredient/${it}`}>{it}
            <img src={`https://www.themealdb.com/images/ingredients/${it}.png`} alt="" className='img_ingredient'/>
          </Link>
        </div>
      ))}

    </div>
  )
}

export default IngredientsList