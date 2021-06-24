import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Callback from './components/Callback';
import Recipes from './components/Recipes';
import Main from './components/Main';
import Login from './components/Login';



function App() {
const [isloggedIn, setIsLoggedIn ] = useState(false);

const token = localStorage.getItem('token')

  return (
    <div className="App">
      <Header />
      <Router>
    <Switch>
      <Route exact path="/">
          <Main message="Welcome to Recipe Master" showbutton="true"/>
      </Route>
      <Route exact path="/about">
          <Main message="Thank you for visiting us" showbutton="false"/>
      </Route>
      <Route exact path="/callback">
          <Callback />
      </Route>
      <Route exact path="/notfound">
          <Main message="404 Page Not Found" showbutton="false"/>
      </Route>
      <Route exact path="/recipes">
         {token ?  <Recipes message="Welcome to recipes" showbutton="false"/> : <Redirect to='/' />}
      </Route>
      <Route exact path="/loginFailed">
          <Main message="Login Failed. Try Again" showbutton="true"/>
      </Route>
  </Switch>
    </Router>
    </div>
  );
}

export default App;