import React from 'react'
import typing from "../assets/typing.png";

const about = () => {
  return (
    <div class="flex justify-center items-center h-4/6 mt">
      <div className='flex mt-12  '>
      
        <img src={typing} alt="typing image" />
        <div className=' '>
        <h1 className='kanit-extrabold text-green-800'>ABOUT ME</h1>
      <p class="">I'm a self-taught web developer who loves building websites. I enjoy coding and creating cool stuff online. Let's make the web a better place together!</p> 
       </div>
      </div>
    </div>
  
  
  )
}

export default about
