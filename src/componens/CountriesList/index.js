import React from "react";
import {Link} from "react-router-dom";

const CountriesList =({meals}) =>{
  return (
    <div className='name_country'>
      {/* {
        meals.map(item =>
          <div >
            <Link className='link' to={`/country/${item.strArea}`}>{item.strArea}</Link>
          </div>)
      } */}
    </div>
  )
}

export default CountriesList