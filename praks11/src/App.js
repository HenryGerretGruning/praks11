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

  recipes.sort((a, b) => (a.duration > b.duration) ? 1 : -1)

  console.log(recipes)


  function addRecipe(newRecipe) {console.log(newRecipe)
    newRecipe.id = recipes.length
    console.log(newRecipe)
    setRecipes(recipes.concat([newRecipe]));
  }

  return (
    <BrowserRouter>
   <Switch>
     <Route path="/" exact>
       <h1 class ="center-page">Retseptiraamat</h1>
       <Link to={`/NewRecipe`} className="link-align">Lisa uus retsept</Link>
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
