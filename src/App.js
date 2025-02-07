
import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from "./Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { type } from '@testing-library/user-event/dist/type';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Qo6q1FJ6IUFWGFmi9strrFqbzWthDzR2CqHFMKW9RJvtP19QvrPCG4k4aU6YgZGVclhdULzX2oZLwtJa6uO1QYn00Zi9Xjy1M');


function App() {
  const[{basket}, dispatch]=useStateValue();
  useEffect(()=>{
      auth.onAuthStateChanged(authUser =>{
        console.log("user" , authUser);
        if (authUser) {
            dispatch({
              type:"SET_USER",
              user: authUser,
            })
        } else {
          dispatch({
            type: "SET_USER",
            user: null,
          })

        }
      })
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route
            path="/login"
            element={
              <>
                <Login/>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout/>
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                <Payment/>
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
