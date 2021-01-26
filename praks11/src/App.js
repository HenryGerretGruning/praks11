import React, { useState, useEffect } from 'react'
import './index.css'
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";

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
    
    <main>
      <h1>Retseptiraamat</h1>
      <RecipeList recipe={recipes}/>
      
    </main>
  )
}





const Recipe = (recipe) => {
  return (
    <div>
      {recipe.map((recipe, index) => {
        return (
          <div class="recipe">
            <h2>{recipe.name}</h2>
            <p>{recipe.duration}</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
            </ul>
            <p>{recipe.preparation}</p>
          </div>
        );
      })}
    </div>
  );
};

const RecipeList = ({recipe}) => {
  return(
      <div >  
         {recipe.map((recipe, index) => {
             return (
                 <div class="recipe">
                     <h2>{recipe.name}</h2>
                      <p class ="text-center">{recipe.duration} min</p>
            
                      
                    
                 </div>
             )
         })}
      </div>

  )
}

export default App;
