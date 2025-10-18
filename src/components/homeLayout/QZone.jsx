import React from 'react'
import swimmingImage from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playgroundImg from "../../assets/playground.png"


const Qzone = () => {
  return (
    <div className='bg-base-200 p-3'>
        <h2 className='font-bold mb-4'>QZone</h2>
        <div className='flex flex-col'>
            <img src={swimmingImage} alt="" />
            <img src={classImg} alt="" />
            <img src={playgroundImg} alt="" />
        </div>
    </div>
  )
}

export default Qzone