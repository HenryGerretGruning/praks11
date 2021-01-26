import React, { useState, useEffect } from 'react'
import './index.css'
import {BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";
import Recipe from "./components/Recipe";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
const App = () => {
  
  const [recipes, setRecipes] = useState([]);  
  function getRecipes() {
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {console.log(response);
      return response.json();
    })
    .then((data) => {
      setRecipes(data);
    })  
  }
  useEffect(() => {
    getRecipes();
  },[]);

  return (
    
    <BrowserRouter>
   <Switch>
     <Route path="/" exact>
       <h1>Retseptiraamat</h1>
       <RecipeList recipe={recipes} />
     </Route>
     <Route path="/recipes/:id">
       <Recipe recipes={recipes} />
     </Route>
        
     
   </Switch>
 </BrowserRouter>

  )
}







  
export default App;
