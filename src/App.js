import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Meals from "./views/Meals";
// import MealDetails from "./views/MealDetails";
import Browse from "./views/Browse";
// import Ingredients from "./views/Ingredients";
// import Countries from "./views/Country";

// import Categories from "./views/Categories";


import NotFound from "./views/NotFound";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const MealDetails = React.lazy(() => import('./views/MealDetails'));
const Ingredients = React.lazy(() => import('./views/Ingredients'));
const Countries = React.lazy(() => import('./views/Country'));
const Categories = React.lazy(() => import('./views/Categories'));

  function App() {
    return (

      <Router>

        <Switch>
          <Route exact path='/'> <Meals /></Route>
          <Route path='/product/:id'> 
          <React.Suspense fallback={<div>Загрузка...</div>}>
          <MealDetails />
          </React.Suspense>
         </Route>
          <Route path='/browse/:name'> <Browse /></Route>
          <Route path='/ingredient/:name'> 
          <React.Suspense fallback={<div>Загрузка...</div>}>
          <Ingredients />
          </React.Suspense>
          </Route>
          <Route path='/country/:name'> 
          <React.Suspense fallback={<div>Загрузка...</div>}>
          <Countries/>
          </React.Suspense>
          </Route>
          <Route path='/categories/:name'>
          <React.Suspense fallback={<div>Загрузка...</div>}>
          <Categories />
          </React.Suspense>
           </Route>
          <Route path='*'><NotFound /></Route>
        </Switch>

      </Router>


    );
  }

export default App;
