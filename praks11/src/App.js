import React, { useState, useEffect } from 'react'
import './index.css'
import {BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";

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







    

const RecipeList = ({recipe}) => {
  return(
      <div>  
         {recipe.map((recipe, index) => {
             return (
                 <div class="recipe">
                     <h2>{recipe.name}</h2>
                      <p class ="text-center">{recipe.duration} min</p>
                      <Link class ="link-center" to={`/recipes/${index}`}>Vaata lähemalt</Link>
                      
                    
                 </div>
             )
         })}
      </div>

  )
}


const Recipe = ({recipes}) => {
  const id = useParams().id;
      console.log(recipes)
      return (
        <div class="recipe-box">
             <Link to={`/`} class="return">tagasi</Link>
              <h2>{recipes[id].name}</h2>
              <p>{recipes[id].duration} min</p>
              <ul>
     {recipes[id].ingredients.map((ingredient, index) => {
       return <li key={ingredient}>{ingredient}</li>;
     })}
   </ul>
   
              <p>{recipes[id].preparation}</p>
        </div>
      )
    }
  
  
export default App;
