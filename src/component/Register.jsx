import firebase from 'firebase/compat/app';
import React from 'react'
import { Link } from 'react-router-dom'


function SignIn({ SetPass, SetEmail,create,google,toggle }) {



   
    return (
        <div className='register'>
    <div className="containerr">
        <div className="cardr">
            <h1>Create Account</h1>
            {/* <form onSubmit={}> */}
                <div className="form-groupr">
                    <i className="fas fa-enveloper"></i>
                    <input type="email" className="form-controlr" id="email" onChange={(e)=>SetEmail(e.target.value)}/>
                    <label className="form-labelr" htmlFor="email">Your Email</label>
                </div>
                <div className="form-groupr">
                    <i className="fas fa-lockr"></i>
                    <input type="password" className="form-controlr" id="password"
                        onChange={(e)=>SetPass(e.target.value)}/>
                    <label className="form-labelr" htmlFor="password">Password</label>
                </div>
                <button type="submit" onClick={(e)=>create(e)} className="btnr">Create</button>

                <center><button className="btnr " style={{ width: '40%', backgroundColor: 'red',marginTop:'4%' }} onClick={google}>Google </button></center>

                {/* <center> <Link to="/login">SignIn</Link></center> */}
            {/* </form> */}
            <button onClick={toggle}>Login</button>
        </div>
    </div>

    </div>
    )
}

export default SignIn