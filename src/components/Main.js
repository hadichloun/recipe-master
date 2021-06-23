import React from 'react';
import '../components/Main.css'

const Main = props => {
    return(
        <div className="Main">
            <h1>{props.message}</h1>
            {props.showbutton === "false" ? 
                <p>hope you enjoyed our recipes </p>  : 
                <button type="button" className="btn btn-primary btn-lg">Sign In</button> }
        </div>
    )
}

export default Main;