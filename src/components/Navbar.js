import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">MyChatApp</span>
      <div className="user">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile pic" />
        <span>Anonymous</span>
        <Link className="link" to="/login"> <button>Log Out</button> </Link>
        {/* <button>Log Out</button> */}
      </div>
    </div>
  )
}
