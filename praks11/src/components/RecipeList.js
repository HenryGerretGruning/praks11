import React from "react";
import { withRouter, Link, useParams } from "react-router-dom";


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
  export default RecipeList;