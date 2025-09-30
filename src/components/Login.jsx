import { memo,useRef,useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage] = useState();
// const fullName = useRef(null);
const email = useRef(null);
const password = useRef(null);
const name = useRef(null);
const navigate = useNavigate();
const handleButtonClick = ()=>{
//validate the data 
  const message = checkValidData(email.current.value,password.current.value);
  setErrorMessage(message);

  if(message) return;

  if(!isSignInForm){
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value,
}).then(() => {
  navigate("/browse");
}).catch((error) => {
  setErrorMessage(error.message);
});
    navigate("/browse");
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }else {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }
}
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
      <form onSubmit = {(e)=> e.preventDefault()}
      className ="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input ref = {name} type ="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 '/>}
        <input ref = {email} type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700 '/>
        <input ref = {password} type="text" placeholder="Password" className='p-4 my-4 w-full bg-gray-700'/>
        <p className ="text-red-600 font-bold text-lg py-4">{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'onClick = {handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>

        <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign up Now" :"Already registered?SignIn Now"}</p>

      </form>
    </div>
  );
};

export default memo(Login);