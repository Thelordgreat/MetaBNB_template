import React from 'react'
import logo from "../images/footer-logo.png";
import c from "../images/Vector.png";

const Footer = () => {
  return (
    <footer className='w-full h-fit lg:h-[35vh] lg:max-h-[250px] bg-[#1D1D1E] text-white py-8'>
      <div className='grid gap-3 md:flex md:flex-row w-10/12 md:w-11/12 lg:w-10/12 mx-auto justify-between pt-8 leading-8'>
        <div>
          <img src={logo} alt="" className='w-[80%]' />

          <div className='flex items-center mt-8 justify-between md:mt-12 md:ml-4 lg:ml-0 text-sm w-[60%]'>
            <i class="fa-brands fa-facebook-f cursor-pointer"></i>
            <i class="fa-brands fa-instagram cursor-pointer"></i>
            <i class="fa-brands fa-twitter cursor-pointer"></i>
          </div>

          <div className='flex items-center mt-6  gap-2 text-sm w-[60%] opacity-[.7]'>
            <img src={c} alt="" />
            <span>2022 Metabnb</span>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Community</h3>
          <ul className='opacity-[.7]'>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Places</h3>
          <ul className='opacity-[.7]'>
            <li>Castle</li>
            <li>Farms </li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>About Us</h3>
          <ul className='opacity-[.7]'>
            <li>Road map</li>
            <li>Creators </li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer