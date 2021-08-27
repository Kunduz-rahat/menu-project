import {BrowserRouter as Router, Route} from "react-router-dom";

import Meals from "./Meals";
import MealDetails from "./MealDetails";
import Browse from "./Browse";
import Ingredient from "./Ingredient";
function App() {
  return (
    <Router>
      <main className='main'>
        <Route exact path='/'> <Meals/></Route>
        <Route  path='/product/:id'> <MealDetails/></Route>
        <Route  path='/browse/:name'> <Browse /></Route>
        <Route  path='/ingredient/:name'> <Ingredient /></Route>
      </main>

    </Router>
  );
}

export default App;
