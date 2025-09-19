import { memo,useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
const toggleSignInForm = ()=>{
setIsSignInForm(!isSignInForm);
}
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
        alt ="logo"/>
      </div>
      <form className ="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input type ="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 '/>}
        <input type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700 '/>
        <input type="text" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>

        <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign up Now" :"Already registered?SignIn Now"}</p>

      </form>
    </div>
  );
};

export default memo(Login);