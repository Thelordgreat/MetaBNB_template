import React from 'react'
import opensea from "../images/opensea.png";
import mbtokens from "../images/mbtokens.png"
import metamask from "../images/Metamask.png"

const Platforms = () => {
  return (
    <div className='bg-[#a02279] w-full h-[10vh] max-h-[100px] justify-around flex items-center mt-20'>
        <img src={mbtokens} alt="" className='scale-75'/>
        <img src={metamask} alt="" className='scale-75'/>
        <img src={opensea} alt="" className='scale-75'/>
    </div>
  )
}

export default Platforms