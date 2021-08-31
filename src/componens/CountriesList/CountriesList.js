import React from "react";
import {Link} from "react-router-dom";

const CountriesList =(meals) =>{
  return (
    <div>
      {
        meals.map(item =>
          <div>
            <Link  to={`/country/${item.strArea}`}>{item.strArea}</Link>
          </div>)
      }
    </div>
  )
}

export default CountriesList