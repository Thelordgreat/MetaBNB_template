import React, { useState, useEffect } from 'react'
import logo from "../images/Nav-logo.png";
import ConnectModal from './ConnectModal';
//import { Link } from "react-router-dom"


const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if (openModal === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    })

    return (
        <>
            <nav className='w-full h-[80px]'>
                <div className='flex items-center h-full w-full justify-between md:w-11/12 mx-auto'>
                    <img src={logo} alt="" className='scale-75' />

                    <ul className='hidden md:flex items-center gap-16 md:block'>
                        <li>Home</li>
                        <li>Place to stay</li>
                        <li>NFTS</li>
                        <li>Community</li>
                    </ul>

                    <button
                        style={{
                            background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
                        }}
                        onClick={() => setOpenModal(true)}
                        className='hidden md:block px-4 py-2 border-2 text-white text-sm rounded-md'>
                        Connect wallet
                    </button>

                    <div className='md:hidden mr-5'>
                        <i className='fas fa-bars '></i>
                    </div>
                </div>
            </nav >
            <ConnectModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}

export default Navbar