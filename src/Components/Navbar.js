import React, { useState, useEffect } from 'react'
import logo from "../images/Nav-logo.png";
import ConnectModal from './ConnectModal';
//import { Link } from "react-router-dom"


const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (openModal === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    })

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const handleClose = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <nav className='w-full h-[80px]'>
                <div className='flex items-center h-full w-11/12 justify-between mx-auto'>
                    <a href="/">
                        <img src={logo} alt="" className='w-[9rem] lg:w-[10rem]' />
                    </a>

                    <ul className='hidden md:flex items-center md:gap-8 lg:gap-16 md:block'>
                        <a href="/">
                            <li className='cursor-pointer'>Home</li>
                        </a>
                        <a href="/place-to-stay">
                            <li className='cursor-pointer'>Place to stay</li>
                        </a>
                        <li className='cursor-pointer'>NFTS</li>
                        <li className='cursor-pointer'>Community</li>
                    </ul>

                    <button
                        style={{
                            background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
                        }}
                        onClick={() => setOpenModal(true)}
                        className='hidden md:block px-4 py-2 border-2 text-white text-sm rounded-md'>
                        Connect wallet
                    </button>

                    <div
                        className='md:hidden cursor-pointer'
                        onClick={toggleMenu}
                    >
                        <i className='fas fa-bars '></i>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className='md:hidden text-center bg-[#ffffff] absolute z-[2] w-full flex flex-col justify-center py-3' id='drop-down'>
                        <ul>
                            <a href="/">
                                <li onClick={handleClose}>Home</li>
                            </a>
                            <a href="/place-to-stay">
                                <li onClick={handleClose}>Place to stay</li>
                            </a>
                            <li onClick={handleClose}>NFTS</li>
                            <li onClick={handleClose}>Community</li>
                        </ul>

                        <button
                            style={{
                                background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
                            }}
                            onClick={() => setOpenModal(true)}
                            className='px-4 py-2 border-2 text-white text-sm rounded-md w-1/2 mx-auto'>
                            Connect wallet
                        </button>
                    </div>
                )}

            </nav >

            <ConnectModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}

export default Navbar