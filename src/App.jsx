


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Navbar';
import LeetCode from './LeetCode';
import HackerRank from './HackerRank';
import CodingNinja from './CodingNinja';
import Gfg from './Gfg';
import Footers from './Footers';
// Home import removed since you want Gfg as home

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import { app } from "./store/firebase"
import SignIn from './component/Register';
import Sign from './component/SignIn';
import User from './component/User';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {



  //for user
  const [user, setuser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user); 
      } else {
        setuser(null);
      }
    })
  }, []);
 
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const check = (e) => {
    e.preventDefault();
    console.log("check");
    signInWithEmailAndPassword(auth, email, pass).then((value) => console.log("success"));
    setEmail('');
    setPass('');
  }

  const create = (e) => {
    e.preventDefault();
    console.log("create");
    createUserWithEmailAndPassword(auth, email, pass).then((value) => console.log(value))
    setEmail('');
    setPass('');
  }

  const google = () => {
    signInWithPopup(auth, googleProvider);
  }
  const signouthandle = () => {
    signOut(auth)
  }


  const [showRegister, setShowRegister] = useState(false);
  const [showlogin, setShowlogin] = useState(true);
  const toggleRegister = () => {
      setShowRegister(prevState => !prevState);
     setShowlogin(prevState => !prevState);
    }
  
  if (user === null) {
    return (
     <>
     
        {showlogin && ( 
        <Sign
          SetEmail={setEmail}
          SetPass={setPass}
          check={check}
          google={google}
        /> 
      )}
      <center>
       <button style={{ cursor:'pointer',width: '14%', backgroundColor: 'red',color:'white' }} onClick={toggleRegister}>
        {showRegister ? 'Login' : 'Register'}
      </button>
      </center>
      
      {showRegister && (
        <SignIn SetEmail={setEmail} SetPass={setPass} create={create} google={google} />
      )}

     <Router>
      <Routes>
      
        
        <Route path="/registers" element={<SignIn SetEmail={setEmail} SetPass={setPass} create={create} google={google} />}/>
       
      </Routes>
    </Router>
      </>
    )
  }

  return (
    <>

      <Router>
        <Navbar />
        <div>

          <Routes>
         
            <Route path="/user" element={<User
              user={user}
              signouthandle={signouthandle}
            />} />
            {/* <Route path="/registers" element={ } />
            <Route path="/login" element={ } /> */}
            <Route path="/leetcode" element={<LeetCode />} />
            <Route path="/hackerrank" element={<HackerRank />} />
            <Route path="/codingninja" element={<CodingNinja />} />
            <Route path="/GFG" element={<Gfg />} />
            {/* Redirect root path to Gfg. No need for exact, as Routes chooses the first matching route */}
            <Route path="/" element={<Navigate replace to="/GFG" />} />
            {/* Optionally, if you want to still have a Home route, you can include it with its path */}
            {/* <Route path="/home" element={<Home />} /> */}
          </Routes>
          <Footers />

        </div>
      </Router>
    </>
  );
}

export default App;



