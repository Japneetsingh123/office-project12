import React from 'react';
import './Form.css';
import './Formsignin';
import {NavLink} from 'react-router-dom';
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request! <p className='form-label'>Already Have an Account <span><NavLink to='/Formsignin'>sign in</NavLink></span> </p></h1>
      
      
    </div>
  );
};

export default FormSuccess;
