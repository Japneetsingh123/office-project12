import React from 'react'
import App from './App'
import './index'
//*//code for authentication//*//
import {Form} from './form';
import {Navigation} from './navigation';
function App() {
  return (
    <div>
      <Form />
      <Navigation />
    </div>
  )
};

/*//code for CRUD //*/

//import './App2.css';
//import Read from './Read.jsx'
//import Create from './Create'
//import Update from './Update.jsx'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
//function App() {
 //return (
    //<div classname='main'>
     //<h2 className='main-header'>Enter Employee Details</h2>
     //<Create/>
     //<Read />
     //<Update/>
    //</div>
  //);
//}

export default App;
