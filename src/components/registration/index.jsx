import { Formik, Field, Form, ErrorMessage  } from 'formik'
import * as yup from "yup";
import { Link } from "react-router-dom"

const LoginSchema = yup.object({
    email: yup.string().email().required("Email is required"),
    phone: yup.string().required("Phone No is required"),
   password: yup.string().required("Password is required").min(8,"Password is too short- should be 8 characters minimum"),
   connpassword: yup.string().required("Password is required").min(8,"Password is too short- should be 8 characters minimum")
  }); 

const Register = () => (
  <>
    <Formik
      initialValues={{
        email: '',
        phone: '',
        password: '',
        connpassword:''
      }}
      
      validationSchema={LoginSchema}
      onSubmit={(values,{resetForm}) => {
        alert("Registered Successfully");
        resetForm({values:""});
      }}

    >
    

<div className='form'>
    <div className='py-12 flex-1'>
      <div className='flex flex-wrap rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4l'>
        
      <div className='pl-4 py-3 '>
           <h1 className=' w-full ml-4 mt-3 text-center text-3xl text-gray-600 font-bold'>
           Registration Page 
           </h1>
           <h2 className=' w-full ml-4 mt-3 text-center text-3xl text-gray-600 font-bold'>
           Hey User!!! Please Enter Your Details 
           </h2>
         </div><div className='pl-8'> 
      <Form>
        
        <div>
        <label className="text-black m-2" htmlFor='Email'>
          Email
        </label>
        <Field className="text-black mx-3 my-2  border border-gray rounded" type='email' id='email' name='email'/>
        </div>
        <ErrorMessage
          component='a'
          className="text-[#ff0000] text-[12px] mx-3 " 
          name='email'
        />

        <div>
        <label className="text-black m-2" htmlFor='phone'>
          Contact No.
        </label>
        <Field className="text-black mx-3 my-2 border border-gray rounded" type='phone' id='phone' name='phone' />
        </div>
        <ErrorMessage
          component='a'
          className="text-[#ff0000] text-[12px] mx-3 " 
          name='phone'
        />

        <div>
        <label className="text-black m-2" htmlFor='password'>
          Password
        </label>
        <Field className="text-black mx-3 my-2 border border-gray rounded" type="password" id='password' name='password' />
        </div>
        <ErrorMessage
          component='a'
          className="text-[#ff0000] text-[12px] mx-3 " 
          name='password'
        />
        
        <div>
        <label className="text-black m-2" htmlFor='connpassword'>
          confirm password
        </label>
        <Field className="text-black mx-3 my-2 border border-gray rounded" type="connpassword" id='connpassword' name='connpassword' />
        </div>
        <ErrorMessage
          component='a'
          className="text-[#ff0000] text-[12px] mx-3 " 
          name='connpassword'
        />
        <div class='mt-3'>
          <button type='submit' className=" cursor-pointer text-center px-3 py-1.5 text-white bg-gray-800 rounded-lg shadow-md w-45">
            Register
          </button>
          <h4 className='m-4'>Already registered?<Link to='/login'><span className='font-bold'>
            Login Now</span></Link></h4>
        </div>
      </Form>
      </div>
      </div>
      </div>
      </div>
    </Formik>
  </>
)

export default Register