import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="container">
      <div className='card_ingredient'>
        {ingredients.map((it) => (
          <div key={it}>
            <Link to={`/ingredient/${it}`}>
              <div className='name_ingredient' o>{it}</div>
              <img src={`https://www.themealdb.com/images/ingredients/${it}.png`} alt="" className='img_ingredient' />
            </Link>
          </div>
        ))}

      </div>
    </div>

  )
}

export default IngredientsList