import React, { useState, useEffect } from 'react'


const App = () => {
  
  const [recipes , setRecipes] = useState(0);
  useEffect(() => {
    getRecipes();
  }, []);

  function getRecipes(){
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {console.log(response)

        return response.json();
    })
      // response.text() returns a new promise that resolves with the full response text
      // when it loads
    .then((data) => {

      setRecipes(data);
    })
  }
  
  return (
    
    <main>
      <h1>Retseptiraamat</h1>
      <RecipeList recipes={recipes}></RecipeList>
      
    </main>
  )
}





const Recipe = (props) => {
  
  return(
    
    <div>
      <h1>smile</h1>
      
      <h2>{props.recipe.name} </h2>
      <p> {props.recipe.duration} </p>
      
      <p>{props.recipe.preparation}</p>
    </div>
    
  )
}

const RecipeList = (props) => {
  console.log(props.recipes)
  const recipes = props.recipes

  return(
    
      <div>
        
       <div>

        <h2> </h2>
        <p>  </p>

       </div>

      </div>
    
  )
}

export default App;
