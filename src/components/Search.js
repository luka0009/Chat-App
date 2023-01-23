import React from 'react'

export default function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input className='search-friends' type="text" placeholder='Search for friends'/>
      </div>
      <div className="userChat mainAcc">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile pic" />
        <div className="userChatInfo">
          <span>Anonymous account</span>
        </div>
      </div>
    </div>
  )
}
