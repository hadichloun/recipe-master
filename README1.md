import React, { useState } from 'react'
import Card from './Card';
import './Recipes.css';
import banana from '../images/banana.jpg';
import mango from '../images/mango.jpg';
import orange from '../images/orange.jpg';
import apple from '../images/apple.jpg';
import chicken from '../images/chicken.jpg';
import pizza from '../images/pizza.jpg';
import soup from '../images/soup.jpg';
import chicken2 from '../images/chicken-2.jpg';
import Recipes from './Recipes';
import loading from '../images/generating.gif';

// const APP_ID = "<e611d02c>";
// const APP_KEY = "<38238dec05708b8eace0c736af5c48db>";

const Recipe = (props) => {

    const [state, setState] = useState({
        displayCategories: true,
        displayRecipes: false,
        recipes: ""
    })


    const onImageClick = (searchKey) => {
        console.log(searchKey)
        loadData(searchKey);
        console.log(state.recipes);

        setState({
            ...state, displayCategories: false,
            displayRecipes: true
        })

    }
    // https://api.edamam.com/search?q=chicken&app_id=${ee9f05e8}&app_key=${b50790d9280c52b55b568e35c4ee2f2a}&from=0&to=3&calories=591-722&health=alcohol-free
    const loadData = (searchKey) => {
        console.log(searchKey)
        
        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=d40a72fc&app_key=%20eba7ed2c3be1ac845fde5f17f28bae4c'
            )
            .then(response => response.json())
            .then(data => {
                console.log(data, "<====data")
                setState({...state,
                    recipes: formatRecipe(data.hits),
                    displayCategories: false,
                    displayRecipes: true
                })
            })
    }

    const formatRecipe = (recipes) => {
        let tempRecipes = recipes.map(recipe => {
            let image = recipe.recipe.image;
            let name = recipe.recipe.source;
            let ingredients = recipe.recipe.ingredients.map(ingredient => ingredient.text).join(', ');
            let calories = recipe.recipe.calories.toFixed(2);
            let healthLabels = recipe.recipe.healthLabels;

            let tempRecipe = { image, name, ingredients, calories, healthLabels }
            return tempRecipe;
        });

        return tempRecipes;
    }


    return (
        <>
            {state.displayCategories ?
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <h1>Try our award wining Recipies</h1>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row">
                            <Card itemName={banana} searchItem="banana" onImageClick={onImageClick} />
                            <Card itemName={apple} searchItem="apple" onImageClick={onImageClick} />
                            <Card itemName={mango} searchItem="mango" onImageClick={onImageClick} />
                            <Card itemName={orange} searchItem="orange" onImageClick={onImageClick} />
                        </div>
                        <div className="row">
                            <Card itemName={chicken} searchItem="chicken" onImageClick={onImageClick} />
                            <Card itemName={pizza} searchItem="pizza" onImageClick={onImageClick} />
                            <Card itemName={soup} searchItem="soup" onImageClick={onImageClick} />
                            <Card itemName={chicken2} searchItem="chicken" onImageClick={onImageClick} />
                        </div>
                    </div>
                </div>
                : null
            }

            {
                state.displayRecipes && state.recipes ?
                    <div className="container">
                        {state.recipes.map((recipe, id) => {
                            return <Recipes key={id} recipe={recipe} />
                        })}
                        <a className="backbutton" href="/recipes"><button type="button" className="btn btn-primary btn-lg">Back</button></a>
                    </div>
                    : (state.displayRecipes ? <img className="loading" src={loading} alt="loading.." /> : null)
            }
        </>
    )

}

export default Recipe