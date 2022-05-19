import React from "react";
import { Link } from "react-router-dom";

const CountriesList = ({ meals }) => {
  return (
    <div className='container'>
      <div className='link'>
        {
          meals.map(item =>
            <div >
              <Link  to={`/country/${item.strArea}`}>{item.strArea}</Link>
            </div>)
        }
      </div>

    </div>
  )
}

export default CountriesList