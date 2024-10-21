import React ,{useState}from 'react'
import './register.css';
import { Link } from 'react-router-dom';
function Sign({SetEmail,SetPass,check,google,toggle}) {


    const guesthandle=()=>{
        SetEmail('guest@gmail.com')
        SetPass('guestlogin')
    }

   
  return (
    <div className='register'>
    <div className="containerr">
        <div className="cardr">
            <h1>Sign up</h1>
            <form onSubmit={(e)=>check(e)}>
                <div className="form-groupr">
                    <i className="fas fa-enveloper"></i>
                    <input type="email" className="form-controlr" id="email" onChange={(e)=>SetEmail(e.target.value)} />
                    <label className="form-labelr" htmlFor="email">Your Email</label>
                </div>
                <div className="form-groupr">
                    <i className="fas fa-lockr"></i>
                    <input type="password" className="form-controlr" id="password"
                        onChange={(e)=>SetPass(e.target.value)} />
                    <label className="form-labelr" htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btnr">Sign In</button>

                <center>
                    <button className="btnr " style={{ width: '40%', backgroundColor: 'red',margin:'4%' }} onClick={google}>Google </button>
                    <button className="btnr " style={{ width: '40%', backgroundColor: 'red',margin:'4%' }} onClick={guesthandle}>Guest  </button>
                </center>
                <button onClick={toggle}>create account</button>
                
            </form>
        </div>
    </div>

    </div>
  )
}

export default Sign