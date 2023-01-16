import React from 'react'
import Messages from './Messages'
import Input from './Input';

export default function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Username</span>
        <div className='chatIcons'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png" alt="camera" />
            <img src="https://cdn-icons-png.flaticon.com/512/6911/6911758.png" alt="add friend" />
            <img src="https://cdn-icons-png.flaticon.com/512/152/152529.png" alt="more" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}
