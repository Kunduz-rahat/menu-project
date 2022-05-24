import { BrowserRouter as Router, Route } from "react-router-dom";

import Meals from "./views/Meals";
import MealDetails from "./views/MealDetails";
import Browse from "./views/Browse";
import Ingredients from "./views/Ingredients";
import Countries from "./views/Country";

import Categories from "./views/Categories";


import NotFound from "./views/NotFound";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <Router>
      <Switch>
  
          <Route exact path='/'> <Meals /></Route>
          <Route path='/product/:id'> <MealDetails /></Route>
          <Route path='/browse/:name'> <Browse /></Route>
          <Route path='/ingredient/:name'> <Ingredients /></Route>
          <Route path='/country/:name'> <Countries /></Route>
          <Route path='/categories/:name'> <Categories /></Route>
          <Route path='*'><NotFound /></Route>
      
      </Switch>




    </Router>
  );
}

export default App;
