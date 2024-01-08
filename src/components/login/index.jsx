import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, redirect, useNavigate , useHistory} from "react-router-dom"
import * as yup from "yup";
import '/projects/my-app/src/App.css'
import '../registration/index1'
import '../Home'
const LoginSchema = yup.object({
  username: yup.string().required("Please enter correct username"),
  
  Password: yup.string().required("Please enter correct password").min(8,"Password is too short- should be 8 characters minimum")
  }); 
  

  
 

const Login = () => {
  const navigate = useNavigate();
  
  
    <Formik
      initialValues={{
        username: '',
        Password: '',
      }}
      
      validationSchema={LoginSchema}
      onSubmit={(values,{resetForm},{Redirect} ) => {
        alert("Successfully logged in");
        resetForm({values:""});
        
       
      }}

        
    >
    

<div className='form'>
    <div className='py-12 flex-1'>
      <div className='flex flex-col rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4l'>
        
       <div className=' heading'>
           <h1 className=' w-5/6 text-center text-3xl text-gray-600 font-bold'>
           Login Page 
           </h1>
           <h2 className=' heading'>
           Hey User!!! Please Enter your Login Details 
        ◘   </h2>
         </div>
         <div className='px-8 pb-7'>
      <Form>
        <label className="text-black mx-2" htmlFor='name'>
          Username<span className='text-[#ff0000]'>*</span>
        </label>
        <div>
          <Field className="text-black pl-2 border border-gray rounded"type='name' id='username' name='username' />
        </div>
        <ErrorMessage className="text-[#ff0000] text-[12px]" component='a' name='username' />
        <div><label className="text-black mx-2" htmlFor='Password'>
          Password<span className='text-[#ff0000]'>*</span>
        </label>
        </div>
        <div>
        <Field className="text-black pl-2 border border-gray rounded " type="password" id='Password' name='Password' />
        </div>
        <ErrorMessage
          component='a'
          className="text-[#ff0000] text-[12px]" 
          name='Password'
        />
        <div className='my-3'>
          <button type='submit' className="cursor-pointer text-center px-3 py-1.5 text-white bg -gray-800 rounded-lg shadow-md w-45"  onClick={()=>{navigate('/registration/index.js')}}
        > 
            Login
         </button> 
        </div>

        
      </Form>
      </div>
      </div>
      </div>
      </div>
    </Formik>
  
};

export default Login