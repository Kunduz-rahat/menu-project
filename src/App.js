import {BrowserRouter as Router, Route} from "react-router-dom";

import Meals from "./views/Meals";
import MealDetails from "./views/MealDetails";
import Browse from "./views/Browse";
import Ingredients from "./views/Ingredients";
import Countries from "./views/Country";
import Header from "./views/Header";
import Categories from "./views/Categories";
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
        <Route  path='/categories'> <Categories/></Route>
      </main>

    </Router>
  );
}

export default App;
