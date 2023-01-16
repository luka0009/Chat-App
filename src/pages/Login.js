import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'> MyChatApp </span>
            <span className='title'> Log In </span>
            <form action="">
                <input type="email" placeholder='your email'/>
                <input type="password" placeholder='Password'/>
                <button>Sign In</button>
            </form>
            <p>Don't have an account? <Link className="link" to="/register"> Register Here </Link></p>
        </div>
    </div>
  )
};
