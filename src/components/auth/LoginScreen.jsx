import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {
  const {loading} = useSelector(state =>state.ui)


const dispatch = useDispatch();

const [formValues,handleInputChange] = useForm()

const {email,password} =formValues;

const handleLogin=(e)=>{
   e.preventDefault();
    dispatch(startLoginEmailPassword(email,password));
}

const handleGoogleLogin=()=>{
      
  dispatch(startGoogleLogin())
}

  return <>
      <h3 className="auth__litle">Login</h3>

      <form onSubmit={handleLogin} className="animate__animated animate__fadeIn animate__faster">

        <input type="text" placeholder="Email" name="email" className="auth__input"  autoComplete='off'   onChange={handleInputChange}/>

        <input type="password" placeholder="Password" name="password"  className="auth__input"  onChange={handleInputChange} />

        <button type="submit" className="btn btn-primary" disabled={loading}   >
          Login
        </button>

           <hr />

           <div className="auth__social-media">
            

             <div 
    className="google-btn"  onClick={handleGoogleLogin}
>
    <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
    </div>
    <p className="btn-text">
        <b>Sign in with google</b>
    </p> 
      </div>
         
      </div>
             <Link  to="/auth/register" className="link">
                 <h4>Create new Account</h4>
             </Link>

          </form>
  </>
};
