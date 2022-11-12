import React from 'react'

const Header = () => {
  return (
    <section>
      <div className='flex w-11/12 mx-auto my-12'>
        {/*=== Left ====*/}
        <div className='flex-1'>
          <h2 className='text-5xl text-[#434343] font-medium mb-8'>Rent a <span className='text-[#a02279]'>Place</span> away from <span className='text-[#a02279]'>Home</span> in the <span className='text-[#a02279]'>Metaverse</span></h2>
          <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

          <div className='border-2 w-10/12 mt-8 h-[50px]'>
            <input type="text" className='h-full'/>
            <button>Search</button>
          </div>
        </div>

        {/*==== Right ====*/}
        <div className='flex-1'>
          <h1>Hello</h1>

        </div>
      </div>
    </section>
  )
}

export default Header