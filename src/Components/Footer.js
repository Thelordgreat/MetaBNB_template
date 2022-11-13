import React from 'react'
import logo from "../images/footer-logo.png"

const Footer = () => {
  return (
    <footer className='w-full h-[35vh] bg-[#1D1D1E] text-white mt-8 py-8'>
      <div className='flex w-10/12 mx-auto justify-between pt-8'>
        <div>
          <img src={logo} alt="" className='scale-75'/>
        </div>

        <div>
          <h3 className='text-xl'>Community</h3>
          <ul className='gap-4'>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl'>Places</h3>
          <ul>
            <li>Castle</li>
            <li>Farms </li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl'>About Us</h3>
          <ul>
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