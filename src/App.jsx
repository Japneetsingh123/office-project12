import React from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import Login from '../src/login';
import AddEmployee from '../src/register';
import './App.css';
function App() {
  return (
    <Routes>
      
      <Route path='/Login' Component={Login}/>
      <Route path='/' Component={AddEmployee}/>
          
  </Routes>
  );
}

export default App;