import React from "react";
import { withRouter, Link, useParams } from "react-router-dom";


const Recipe = ({recipes, props}) => {
    const id = useParams().id;
        console.log(recipes)
        return (
          <div class="recipe-box">
               <Link to={`/`} class="return">TAGASI</Link>
               
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
    

      export default Recipe;