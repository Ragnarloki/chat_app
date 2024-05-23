import React, { useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'
function Chat() {
  const [open,setOprn]=useState(false);
  const [text,setText]=useState("");
  const handleEmoji = e=>{
    setText((prev) =>prev +e.emoji);
    
  }
  console.log(text)
  return (
    <div className='chat'>
      <div className="top">
          <div className="user">
            <img src="./avatar.png" alt="" />
            <div className="text">
              <span>Jane dow</span>
              <p>Lorem, ipsum dolor sit amet .</p>

            </div> 
          </div>
         
          <div className="icons">
            <img src="./phone.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./info.png" alt="" />
          </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               repellat sed molestias, at iusto harum! Tenetur voluptatibus
                ducimus quod quia ipsum perspiciatis laboriosam similique? Quaerat, consequuntur. Sit in blanditiis rerum!</p>
            <span>1 min ago</span>

          </div>
        </div>
        
        <div className="message own">
         
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               repellat sed molestias, at iusto harum! Tenetur voluptatibus
                ducimus quod quia ipsum perspiciatis laboriosam similique? Quaerat, consequuntur. Sit in blanditiis rerum!</p>
            <span>1 min ago</span>

          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               repellat sed molestias, at iusto harum! Tenetur voluptatibus
                ducimus quod quia ipsum perspiciatis laboriosam similique? Quaerat, consequuntur. Sit in blanditiis rerum!</p>
            <span>1 min ago</span>

          </div>
        </div>
        
        
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               repellat sed molestias, at iusto harum! Tenetur voluptatibus
                ducimus quod quia ipsum perspiciatis laboriosam similique? Quaerat, consequuntur. Sit in blanditiis rerum!</p>
            <span>1 min ago</span>

          </div>
        </div>


        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               repellat sed molestias, at iusto harum! Tenetur voluptatibus
                ducimus quod quia ipsum perspiciatis laboriosam similique? Quaerat, consequuntur. Sit in blanditiis rerum!</p>
            <span>1 min ago</span>

          </div>
        </div>

        
        <div className="message own">
       
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
               repellat sed molestias, at iusto harum! Tenetur voluptatibus
                ducimus quod quia ipsum perspiciatis laboriosam similique? Quaerat, consequuntur. Sit in blanditiis rerum!</p>
            <span>1 min ago</span>

          </div>
        </div>

      </div>


      <div className="bottom">
          <div className="icons">
          <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./mic.png" alt="" />
          </div>
          <input type="text" value={text} placeholder='type a message...' onChange={(e) => setText(e.target.value)}/>
          <div className="emoji">
            <img src="./emoji.png" alt="" onClick={()=>setOprn((prev)=> !prev)}/>
           <div className="picker">
                    
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          
           </div>
           </div>
          <button className='sendButton'>send</button>
      </div>
    </div>
  )
}

export default Chat