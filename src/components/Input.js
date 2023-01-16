import React from 'react'

export default function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something' />
      <div className='send'>
        {/* <img src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-attach-file_90371.png" alt="atach files" /> */}
        <input type="file" style={{display: 'none'}} id='file'/>
        <label htmlFor="file">
          <img src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" alt="image" />
        </label>
        <button className='send-button'>Send</button>
      </div>
    </div>
  )
}
