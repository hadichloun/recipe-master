import React, { useState } from 'react'
import Card from './Card';
import { v4 as uuidv4 } from 'uuid'
import './Recipes.css';


const Recipes = () => {

    const [query, setQuery] = useState('')
    const [recipes, setRecipes] = useState([])

    const APP_ID = "ee9f05e8";
    const APP_KEY = "b50790d9280c52b55b568e35c4ee2f2a";


    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const handleSubmit = e => {
        e.preventDefault();
        fetch(url)
            .then(response => response.json())
            .then(data => setRecipes(data.hits))
            .catch(err => console.log(err))
            setQuery('')
    }

    return (
        <div>


            <form onSubmit={handleSubmit}>
                <input type='text' value={query} placeholder='search recipes' onChange={(e) => setQuery(e.target.value)} />
                <input type='submit' value='search' />
            </form>

            <div className='recipes'>
            {
                recipes && recipes.map(recipe => <Card key={uuidv4()} recipe={recipe.recipe} />)
            }

            </div>

           
        </div>
    )
}

export default Recipes
