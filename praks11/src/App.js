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


  function addRecipe(newRecipe) {console.log(newRecipe)
    newRecipe.id = recipes.length
    console.log(newRecipe)
    setRecipes(recipes.concat([newRecipe]));
  }

  return (
    <BrowserRouter>
   <Switch>
     <Route path="/" exact>
       <h1>Retseptiraamat</h1>
       <Link to={`/NewRecipe`} className="new-recipe">Lisa uus retsept</Link>
       <RecipeList recipe={recipes} />
     </Route>
     <Route path="/recipes/:id">
       <Recipe recipes={recipes} />
     </Route>
     <Route path= "/NewRecipe" exact>
       <NewRecipe addRecipe={addRecipe}/>
     </Route>
   </Switch>
 </BrowserRouter>
  )
}







  
export default App;
