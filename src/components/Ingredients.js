import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Ingredients = ({ingredients}) => {
    return (
        <div>
           {ingredients.map(ingredient => (
               <ul key={uuidv4()}>
                   <li>{ingredient.text}</li>
                   <li>{ingredient.weight}</li>
               </ul>
           ))}
        </div>
    )
}

export default Ingredients
