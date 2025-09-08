import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
export default function Login({ setLogin }) {

    const [state, setState] = useState("Sign Up")

    return (
        <div className='login'>
            <form className='form'>
                <div className='title'>
                    <h2>{state}</h2>
                    <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="input">
                    {state === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{state === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="condition">
                    <input type="checkbox" required />
                    <p>By continuing,i agree to the term of use & privacy policy</p>
                </div>
                {state==="Sign Up"
                ?<p>Already have account?<span onClick={()=>setState("Login")}> Login here</span></p>
                : <p>Create new account? <span onClick={()=>setState("Sign Up")}> Click here</span></p>
                }
         
            </form>
        </div>
    )
}
