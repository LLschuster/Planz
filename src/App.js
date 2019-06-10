import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Details from './components/projects/Details';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component ={Dashboard}></Route>
        <Route path='/project/:id' component = {Details}></Route>
        <Route path='/signin' component = {Signin}></Route>
        <Route path='/signup' component = {Signup}></Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
