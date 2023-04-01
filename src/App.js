import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import Home from './home';
import ContactUS from './Contact US';
import Courses from './Courses';
import Stuff from './Stuff';
import Navbar from './navbar';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="App">
<Routes>
<Route path='/home' Component={Home}></Route>
          <Route path='/Courses' Component={Courses}></Route>
          <Route path='/Stuff' Component={Stuff}></Route>
          <Route path='/Contact US' Component={ContactUS}></Route>
          <Route path='/Login' Component={Login}></Route>


</Routes>
      </div>
    );
  }
}
 
export default App;
