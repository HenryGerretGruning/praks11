import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";

const NewRecipe = (props) => {
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [tags, setTags] = useState("");
    const [preparation, setPreparation] = useState("");
    const [whole, setWhole] = useState({});

    const combineRecipe = (event) => {
        event.preventDefault(event);

        const ingredientsList = ingredients.split(",")
        const tagsList = tags.split(",")
      
        

        setWhole({
            name: name,
            duration: duration,
            ingredients: ingredientsList,
            tags: tagsList,
            preparation: preparation,
        });
    }

    useEffect(() => {
        if (Object.keys(whole).length !== 0) {
          props.addRecipe(whole);
          props.history.push("/");
          setWhole({});
        }
      }, [whole, props]);

    return (
        <div>
            
            <h1>Lisa uus retsept</h1>
            <Link to={`/`} class="return">TAGASI</Link>
            <form class= "newrecipebox" onSubmit={event => combineRecipe(event)}>
                <label for="name" className="input-name">Nimi</label>

                <input type='text'
                 id='name'
                 onInput = {(event) => {
                     setName(event.target.value)
                 }}
                 />


                <label className="name">Valmistamisaeg(min)</label>

                <input type='number'
                 id='number'
                 onInput = {(event) => {
                    setDuration(event.target.value)
                 }}/>

                <label className="name">Koostisained</label>
                <input type='next'
                 id='text'
                 onInput = {(event) => {
                     setIngredients(event.target.value)
                 }}/>


                <label className="name">Tags</label>
                <input type='next'
                 id='text'
                 onInput = {(event) => {
                     setTags(event.target.value)
                 }}/>



                <label className="name">Valmistamine</label>

                <textarea name='valmistamine'
                 rows='5' 
                 cols='50'
                 onInput = {(event) => {
                     setPreparation(event.target.value)
                 }}/>

                <input type="submit" class ="submit" value="Salvesta"></input>
            </form>
        </div>
    )
}




export default withRouter(NewRecipe);