import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Message(props) {
  const [someClass, setSomeClass] = useState(false); 

  function handleClickOutside(event) {
    if (!event.target.closest('img')) {
      setSomeClass(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div className={`message ${props.class}`}>
        <div className="messageInfo">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile pic" />
          <span>{props.time}</span>
        </div>  
        <div className="messageContent">
            <p>{props.text}</p>
            {/* <img src="https://images.unsplash.com/photo-1537123547273-e59f4f437f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cnVubmluZyUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="sent image" /> */}
          {  props.image && <img onClick={() => setSomeClass(true)} className={someClass && 'scale'} src={props.image} alt="sent image" />}
        </div>
    </div>
  )
};
