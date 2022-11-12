import React, { useState } from 'react'
import logo from "../images/Nav-logo.png";
import ConnectModal from './ConnectModal';


const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)

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
                    onClick={() => setOpenModal(true)}
                    className='px-4 py-2 border-2 text-white text-sm rounded-md'>
                    Connect wallet
                </button>
            </div>

            <ConnectModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </nav >
    )
}

export default Navbar