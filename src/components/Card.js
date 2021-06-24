import React, { useState } from 'react';
import './Card.css';
import Ingredients from './Ingredients'

const Card = ({recipe}) => {

    const [show, setShow] = useState(false)
    const [heart, setHeart] = useState(0)

    const showIngredients = () => {
          setShow(!show)
    }

    const heartButton = () => {
        // setHeart((count) => count + 1)
        console.log((count) => count + 10)
        
  }

    return(
          
        <div className="">
            <div className="card">
                <img className="card-img-top img-fluid" src={recipe.image} alt="Card"/>
                <h2 className="card-text">{recipe.label.toUpperCase()}</h2>
                <button onClick={() => showIngredients()}>Show ingredients</button>
                {show &&  <Ingredients ingredients={recipe.ingredients}/>}
                <button className="like-btn" onClick={() => heartButton()}> 💗</button>
            </div>
        </div>
    )
}

export default Card;