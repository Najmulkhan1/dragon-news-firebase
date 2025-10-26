import React from 'react'
import SocialLogin from './SocialLogin'
import FindUs from './FindUs'
import Qzone2 from './Qzone2'


const RightAside = () => {
  return (
    <div className='space-y-6'>
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
       <Qzone2></Qzone2>
    </div>
  )
}

export default RightAside