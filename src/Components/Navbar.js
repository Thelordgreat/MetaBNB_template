import React from 'react'
import logo from "../images/Nav-logo.png";
//import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className='w-full h-[80px]'>
            <div className='flex items-center h-full justify-between w-11/12 mx-auto'>
                <img src={logo} alt="" className='scale-75' />

                <ul className='flex items-center gap-16'>
                    <li>Home</li>
                    <li>Place to stay</li>
                    <li>NFTS</li>
                    <li>Community</li>
                </ul>

                <button
                    style={{
                        background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
                    }}
                    className='px-4 py-2 border-2 text-white text-sm rounded-md'>
                    Connect wallet
                </button>
            </div>
        </nav >
    )
}

export default Navbar