import React from 'react';
import image3 from "../images/image 3.png"
import image4 from "../images/image 4.png"
import image5 from "../images/image 5.png"
import image6 from "../images/image 6.png"

const Hero = () => {
  return (
    <section>
      <div className='flex flex-col md:flex-row w-[98%] lg:w-11/12 mx-auto mt-6 md:my-16'>
        {/*=== Left ====*/}
        <div className='flex-1 mb-12 md:ml-7'>
          <div className="p-3 md:p-0 md:w-[93%]">
            <h2 className='text-4xl lg:text-5xl text-[#434343] font-medium mb-8 leading-snug'>Rent a <span className='text-[#a02279]'>Place</span> away from <span className='text-[#a02279]'>Home</span> in the <span className='text-[#a02279]'>Metaverse</span></h2>
            <p className='text-[1.1rem] md:text-xl text-[#434343]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

            <div className='border-2 md:w-[96%] mt-12 h-[50px] flex rounded-lg overflow-hidden'>
              <input type="text" className='h-full w-10/12 outline-none pl-4' placeholder='Search for location' />
              <button className='bg-[#a02279] h-full w-[40%] text-white' type='button'>Search</button>
            </div>
          </div>
        </div>

        {/*==== Right ====*/}
        <div className='flex-1 mt-8'>
          <div className='flex justify-center'>
            <div className='flex flex-col gap-2 translate-y-12 mr-2 z-[-1]'>
              <img src={image4} alt="" />
              <img src={image6} alt="" />
            </div>
            <div className='flex flex-col gap-2 -translate-y-12 z-[-1]'>
              <img src={image3} alt="" />
              <img src={image5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero