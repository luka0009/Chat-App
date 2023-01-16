import React from 'react'

export default function Chats() {
  return (
    <div className='chats'> 
      <div className="userChat">
        <img src="https://media.gettyimages.com/id/99853680/photo/slavoj-zizek-a-slovenian-continental-philosopher-and-critical-theorist-working-in-the.jpg?s=612x612&w=0&k=20&c=P-M2CuMC4USnAXIojGWCIReoE_90EWvdsVApOFJFM8A=" alt="profile pic" />
        <div className="userChatInfo">
          <span>Slavoj Zizek</span>
          <p>
            And this is ideology  &nbsp;&nbsp;
            <span style={{textDecoration: 'underline', color: 'whitesmoke', fontSize: '12px' }}>5 minutes ago</span>  
          </p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://media.gettyimages.com/id/953506332/photo/peter-sloterdijk-german-philosopher.jpg?s=612x612&w=0&k=20&c=4MKONhOoC6xc19Ltjg4pj7HGVROdp1BSN-SSC_XAx1E=" alt="profile pic" />
        <div className="userChatInfo">
          <span>Peter Sloterdijk</span>
          <p>Don't be such a cynicist  &nbsp;&nbsp;
            <span style={{textDecoration: 'underline', color: 'whitesmoke', fontSize: '12px' }}>An hour ago</span>
          </p>
        </div>
      </div>
      {/* <div className="userChat">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile pic" />
        <div className="userChatInfo">
          <span>Gottlob Frege</span>
          <p>let's get a bit more analytical</p>
        </div>
      </div> */}
    </div>
  )
}
