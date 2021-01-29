import React from "react";
import { withRouter, Link, useParams } from "react-router-dom";


const RecipeList = ({ recipe }) => {

  return (
    <div class="recipe-collection">
      {recipe.map((recipe, index) => {
        return (
          <div class="recipe-list">
            <h2>{recipe.name}</h2>
            <p className="tags">{recipe.tags[0]}, {recipe.tags[1]}</p>
            <p class="text-center">{recipe.duration} min</p>
            <Link class="return" class="link-center" to={`/recipes/${index}`}>
              Vaata lähemalt
            </Link>
            
          </div>
        );
      })}
    </div>
  );
};
  export default RecipeList;