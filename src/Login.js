import React, { useEffect, useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential.user);
        navigate('/'); 
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User registered:", userCredential.user);
        navigate('/');
      })
      .catch((error) => {
        console.error("Error during registration:", error.message);
        alert(error.message);
      });
  };

  return (
    <div className='login'>
      <Link to="/">
        <img className='login_logo' src='https://purepng.com/public/uploads/large/amazon-logo-s3f.png' alt="Amazon Logo" />
      </Link>
      <div className='login_container'>
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login_signInButton'
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to our Conditions of Use and Sale. Please see
          our Privacy Notice, our Cookies Notice, and our Interest-Based Ads
          Notice.
        </p>
        <button
          onClick={register}
          className='login_registerButton'
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
