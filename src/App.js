import {BrowserRouter as Router, Route} from "react-router-dom";

import Meals from "./views/Meals/Meals";
import MealDetails from "./views/MealDetails/MealDetails";
import Browse from "./views/Browse/Browse";
import Ingredients from "./views/Ingredients/Ingredients";
import Countries from "./views/Country/Countries";
import Header from "./views/Header/Header";
function App() {
  return (
    <Router>
      <main className='main'>
        <Header></Header>
        <Route exact path='/'> <Meals/></Route>
        <Route  path='/product/:id'> <MealDetails/></Route>
        <Route  path='/browse/:name'> <Browse /></Route>
        <Route  path='/ingredient/:name'> <Ingredients /></Route>
        <Route  path='/country/:name'> <Countries /></Route>
      </main>

    </Router>
  );
}

export default App;
