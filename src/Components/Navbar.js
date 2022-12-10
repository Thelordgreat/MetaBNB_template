import React, { useState, useEffect } from 'react'
import logo from "../images/Nav-logo.png";
import ConnectModal from './ConnectModal';
import { Link } from "react-router-dom";


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

    const toggleModal = () => {
        setMenuOpen(false);
        setOpenModal(true)
    }

    return (
        <>
            <nav className='w-full h-[80px]'>
                <div className='flex items-center h-full w-11/12 justify-between mx-auto'>
                    <Link to="/">
                        <img src={logo} alt="" className='w-[9rem] lg:w-[10rem]' />
                    </Link>

                    <ul className='hidden md:flex items-center md:gap-8 lg:gap-16'>
                        <Link to="/">
                            <li className='cursor-pointer'>Home</li>
                        </Link>
                        <Link to="/place-to-stay">
                            <li className='cursor-pointer'>Place to stay</li>
                        </Link>
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

                    <div className='md:hidden cursor-pointer'>
                        {menuOpen ? (
                            <i className="fa-regular fa-x" onClick={toggleMenu}></i>
                        ) : (
                            <i className='fas fa-bars' onClick={toggleMenu}></i>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className='md:hidden text-center bg-[#ffffff] absolute z-[2] w-full h-[40%] flex flex-col justify-center py-3 border-2' id='drop-down'>
                        <ul>

                            <li
                                className="p-3"
                            >
                                <Link to="/" onClick={handleClose}>
                                    Home
                                </Link>
                            </li>

                            <li
                                onClick={handleClose}
                                className="p-3"
                            >
                                <Link to="/place-to-stay">
                                    Place to stay
                                </Link>
                            </li>

                            <li
                                onClick={handleClose}
                                className="p-3"
                            >
                                NFTS
                            </li>

                            <li
                                onClick={handleClose}
                                className="p-3"
                            >
                                Community
                            </li>
                        </ul>

                        <button
                            style={{
                                background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
                            }}
                            onClick={toggleModal}
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