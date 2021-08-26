import {BrowserRouter as Router, Route} from "react-router-dom";

import Meals from "./Meals";
import MealsDetails from "./MealsDetails";
function App() {
  return (
    <Router>
      <Route exact path='/'> <Meals/></Route>
      <Route  path='/product/:id'> <MealsDetails/></Route>
    </Router>
  );
}

export default App;
