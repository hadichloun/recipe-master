import React from 'react';
import '../components/Main.css'
import { useHistory } from 'react-router-dom';



const Main = props => {

    const history = useHistory();

    const signIn = () => {
        localStorage.setItem('token', 'xdjswjw34867675')
         window.location = '/recipes'
    }
    return(
        <div className="Main">
            <h1>{props.message}</h1>
            {props.showbutton === "false" ? 
                <p>hope you enjoyed our recipes </p>  : 
               <>
               <input type='text' placeholder='email' />
               <input type='text' placeholder='password' />
                <button type="button" onClick={signIn} className="btn btn-primary btn-lg">Sign In</button>
                </>
                 }
        </div>
    )
}

export default Main;