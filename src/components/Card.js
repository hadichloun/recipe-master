import React, { useState } from 'react';
import './Card.css';
import Ingredients from './Ingredients'

const Card = ({recipe}) => {

    const [show, setShow] = useState(false)

    const showIngredients = () => {
          setShow(!show)
    }
    return(
          
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid" src={recipe.image} alt="Card"/>
                <h2 className="card-text">{recipe.label.toUpperCase()}</h2>
                <button onClick={() => showIngredients()}>Show ingredients</button>
              {show &&  <Ingredients ingredients={recipe.ingredients}/>}
            </div>
        </div>
    )
}

export default Card;