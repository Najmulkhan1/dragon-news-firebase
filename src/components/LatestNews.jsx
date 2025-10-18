import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
  return (
    <div className='flex items-center gap-5 bg-base-200 p-2'>
        <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p> 
        <Marquee>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto minima repellendus esse numquam? Unde obcaecati est, mollitia quos nesciunt non harum praesentium vero ab facilis nihil, illum fuga temporibus!</p> 
        </Marquee>
        
    </div>
  )
}

export default LatestNews