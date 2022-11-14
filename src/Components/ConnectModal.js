import React from 'react';
import metalogo from "../images/metalogo.png"
import arrow from "../images/arrow.png"
import WalletConnect from "../images/walletconnect.png"

const ConnectModal = ({ open, onClose }) => {
  if (!open) return null
  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {
        e.stopPropagation()
      }}
        className='modal_container'>
        <div className="top flex border-b-2 p-4 justify-between">
          <h3 className='font-semibold'>Connect Wallet</h3>
          <span onClick={onClose} className="cursor-pointer">X</span>
        </div>

        <div className="content p-4">
          <span>Choose your preferred wallet:</span>

          {/*==== list ====*/}
          <div className='flex items-center border-2 rounded-lg mb-4 mt-2 p-1 justify-between hover:bg-[#F8F9FA] cursor-pointer'>
            <div className='flex items-center gap-2'>
              <img src={metalogo} alt="" className='scale-75' />
              <span>Metamask</span>
            </div>
            <img src={arrow} alt="" />
          </div>

          {/*==== list ====*/}
          <div className='flex items-center border-2 rounded-lg p-1 justify-between hover:bg-[#F8F9FA] cursor-pointer'>
            <div className='flex items-center gap-2'>
              <img src={WalletConnect} alt="" className='scale-75' />
              <span>WalletConnect</span>
            </div>
            <img src={arrow} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ConnectModal