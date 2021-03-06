import React from "react";
import { Link } from "react-router-dom";

const MealsList = ({ meals }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">

        {
          meals.map(item => (
            <div className="p-4 md:w-1/3" key={item.idMeal}>
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <Link to={`/product/${item.idMeal}`} >
                  <img className='lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100' alt="example" src={item.strMealThumb} />
                  <div className="p-6">
                    <h2 className="title-font text-lg font-medium text-gray-600 mb-3">{item.strMeal}</h2>
                    <div className="flex gap-x-3 sm:items-center sm:flex-row sm:gap-x-6">
                    <div className="flex items-center gap-x-1.5">
                      <span className="w-7 h-7 flex items-center justify-center p-2 flex-shrink-0 text-white bg-red-600 rounded-full dark:bg-orange-800">
                        <svg
                          className="w-full"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M0 96C0 60.65 28.65 32 64 32H512C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96zM160 256C160 238.3 145.7 224 128 224C110.3 224 96 238.3 96 256C96 273.7 110.3 288 128 288C145.7 288 160 273.7 160 256zM160 160C160 142.3 145.7 128 128 128C110.3 128 96 142.3 96 160C96 177.7 110.3 192 128 192C145.7 192 160 177.7 160 160zM160 352C160 334.3 145.7 320 128 320C110.3 320 96 334.3 96 352C96 369.7 110.3 384 128 384C145.7 384 160 369.7 160 352zM224 136C210.7 136 200 146.7 200 160C200 173.3 210.7 184 224 184H448C461.3 184 472 173.3 472 160C472 146.7 461.3 136 448 136H224zM224 232C210.7 232 200 242.7 200 256C200 269.3 210.7 280 224 280H448C461.3 280 472 269.3 472 256C472 242.7 461.3 232 448 232H224zM224 328C210.7 328 200 338.7 200 352C200 365.3 210.7 376 224 376H448C461.3 376 472 365.3 472 352C472 338.7 461.3 328 448 328H224z"></path>
                        </svg>
                      </span>
                      <span className="flex space-x-1 space-x-reverse text-sm font-medium text-slate-600 dark:text-slate-300">
                        {item?.strCategory}
                      </span>
                    </div>
                    <div className="flex items-center gap-x-1.5">
                      <span className="w-7 h-7 flex items-center justify-center p-2 flex-shrink-0 text-white bg-green-600 rounded-full dark:bg-green-800">
                        <svg
                          className="w-full"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM57.71 192.1l9.36 17.3a64.042 64.042 0 0 0 38.03 29.8l57 16.5c18.1 4.9 29.9 20.6 29.9 38.5v39.9c0 11 6.2 21 16 25 9.8 5.8 16 15.8 16 26.8v39c0 15.6 14.9 26.8 29.9 22.5 16.2-4.6 28.6-18.3 32.7-33.7l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40.1l8.1-4.6c15-8.5 24.2-24.4 24.2-41.7v-8.2c0-12.8-5.1-25-14.1-34l-3.8-3.8c-9-9-21.3-15-34-15h-44c-10.2 0-21.2-2-30.9-7.5l-34.5-19.8c-4.3-2.4-7.6-6.4-9.1-11.1-3.2-9.6 1.1-20 10.1-24.6l6-2.9c6.6-3.3 14.2-3.9 20.4-1.5l24.1 7.7c8.1 2.7 17.1-.4 21.9-7.5 4.7-7.1 4.2-16.4-1.2-22.9l-13.6-16.2c-10-12-9.9-29.5.3-41.3l15.7-18.38c8.8-10.27 10.2-24.96 3.5-36.7l-2.4-4.16c-4.3-.17-6.9-.26-10.4-.26-92.9 0-171.6 60.9-198.29 144.1zm379.89-37.6L412 164.8c-15.7 6.3-23.8 23.7-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 21l29.2 7.2c1.2-9 1.8-18.2 1.8-27.5 0-36.8-9.6-71.4-26.4-101.5z"></path>
                        </svg>
                      </span>
                      <span className="flex space-x-1 space-x-reverse text-sm font-medium text-slate-600 dark:text-slate-300">
                        {item?.strArea}
                      </span>
                    </div>
                    </div>
                   
                  </div>

                </Link>
              </div>

            </div>
          )
          )
        }


      </div>

    </div>
  )
}
export default MealsList