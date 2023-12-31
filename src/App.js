// import React, { Component } from 'react';
// import './App.css';
// import Routes from './components/Routers';

// class App extends Component {
//   render() {
//     return (
//       <div>
//       	<div className='topdiv'>
//         	<h1>Eng Minds</h1>
//         </div>
//         <div className='content'>
//         <br/><br/><br/>
//           <Routers />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
// import HomePage from "./components/homePage/homePage";
// import LoginPage from "./components/login/index";
// import {useSelector} from "react-redux";

// function App() {
//   const isAuth = useSelector((state) => state.user); 
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <Routes>
//           <Route path = "/" element = {<LoginPage />} />
//           <Route path = "/home" element = {isAuth ? <HomePage /> : <Navigate  to = "/" />} /> 
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import Login from '../src/components/login/index1';
import AddEmployee from '../src/components/registration/index1';
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

// import React from 'react';
// import { Routes,Route } from 'react-router-dom';
// import FormSignup from './FormSignup';
// import Formsignin from './Formsignin';
// import FormSuccess from './FormSuccess';
// function App() {
//   return (
//     <Routes>
      
//       <Route path='/' Component={FormSignup}/>
//       <Route path='/Formsignin' Component={Formsignin}/>
//       <Route path='/Formsuccess' Component={FormSuccess}/>  
//     </Routes>
//   );
// }

// export default App;

// import React from 'react';
//  import './App.css';
//  import Form from './form'

//  function App() {
//    return <Form />;
  
//  }

//  export default App


// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import Login from './components/Login';
// import Details from './components/Details';
// import Errror from './components/Errror';
// import {Routes,Route} from "react-router-dom"

// function App() {
//   return (
//   <>
//     <Header />
//     <Routes>
//       <Route path='/' element={<Details />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='*' element={<Errror />} />
//     </Routes>
//   </>
//   );
// }

// export default App;

// import React from 'react';
// import { Routes, Route } from "react-router-dom";
// import Home from "./home.js";

// function App() {
//   return (
//     <>
//       <Home />
//     </>
//   )
//   }
// export default App;

// import React from "react";
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Routes
// } from "react-router-dom";
// import "./App.css";
// import Edit from "./edit-employee";
// import Home from "./home";
// import Create from "./create-employee";
// function App() {
// 	return (
// 		<div className="App">
// 			<h1 className="Detail">Employee Details </h1>
// 			<h3>Enter Data</h3>
// 			<Router>
// 				<Routes>
// 					<Route exact path="/" element={<Home />}></Route>
// 					<Route
// 						exact path="/create-employee"
// 						element={<Create />}
// 					/>
// 					<Route
// 						exact path="/edit-employee"
// 						element={<Edit />}
// 					/>
// 				</Routes>
// 			</Router>
// 		</div>
// 	);
// }

// export default App;

// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import Navbaar from './components/Navbaar';
// import Home from './components/Home';
// import Register from './components/Register';
// import Edit from './components/Edit';
// import Details from './components/Details';
// import {Route, Routes} from "react-router-dom"
// import router from '../Routes/router';




// function App() {
//   return (
//    <>
//     <Navbaar />
//     <Routes>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/register" component={Register} />
//       <Route exact path="/edit/:id" component={Edit} />
//       <Route exact path="/view/:id" component={Details} />
//     </Routes>
   
//    </>
//   );
// }

// export default App;
