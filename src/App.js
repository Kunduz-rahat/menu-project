import { BrowserRouter as Router, Route } from "react-router-dom";

import Meals from "./views/Meals";
import MealDetails from "./views/MealDetails";
import Browse from "./views/Browse";
import Ingredients from "./views/Ingredients";
import Countries from "./views/Country";

import Categories from "./views/Categories";
import './App.scss'
import Layout from "./componens/Layout";
function App() {
  return (
    <Router>

      <Layout>
        <Route exact path='/'> <Meals /></Route>
        <Route path='/product/:id'> <MealDetails /></Route>
        <Route path='/browse/:name'> <Browse /></Route>
        <Route path='/ingredient/:name'> <Ingredients /></Route>
        <Route path='/country/:name'> <Countries /></Route>
        <Route path='/categories/:name'> <Categories /></Route>
      </Layout>



    </Router>
  );
}

export default App;
