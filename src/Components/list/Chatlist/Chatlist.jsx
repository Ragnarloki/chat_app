import React, { useState } from 'react'
import "./chatlist.css"
function Chatlist() {
  const [addMode,setAddmode]=useState(false)
  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="search" />
          <input type="text" name="" placeholder="search"id="" />

        </div>
        <img src={addMode ? "./minus.png":"./plus.png"} onClick={()=>setAddmode((prev)=>!prev)} alt="" className='add' />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
       
    </div>

  )
}

export default Chatlist