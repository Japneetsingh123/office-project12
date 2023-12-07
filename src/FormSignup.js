import React from 'react'
import validate from './validateinfo'
import useForm from './useForm'
import './Form.css'
import {Form} from 'formik'
import {Link} from "react-router-dom"
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
    
  ); 
  
   

  return (

    
    <div className='form-content-right'>
      

      <Form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Hey !!  Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='conpassword'
            placeholder='Confirm your password'
            value={values.conpassword}
            onChange={handleChange}
          />
          {errors.conpassword && <p>{errors.conpassword}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <h4 className='m-4'>Already a member?<Link to='/login'><span className='font-bold'>
        LogIn Now</span></Link></h4>
      
        
      
      </Form>
      

    </div>
  );
};

export default FormSignup;
