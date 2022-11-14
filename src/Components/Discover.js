import React from 'react';
import group from "../images/group.png"

const Discover = () => {
    return (
        <section
            style={{
                background: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
                color: "#ffffff",
                marginTop: "4rem",
            }}
            className='w-full h-[85vh] md:h-[80vh] lg:h-[95vh] max-h-[750px]'>
            <div className='content flex flex-col lg:flex-row md:w-10/12 mx-auto items-center h-full justify-around leading-7'>
                <div className='text-center md:text-left p-3 md:p-0 lg:w-2/4'>
                    <h2 className='text-4xl mb-6 font-semibold'>Metabnb NFTs</h2>
                    <p className='mb-6 lg:w-[72%]'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

                    <button className='bg-white px-5 py-2 text-[#A02279] rounded-lg'>Learn more</button>
                </div>

                <div className='flex justify-center p-3 md:p-0'>
                    <img src={group} alt="" className='w-[35rem]'/>
                </div>
            </div>
        </section>
    )
}

export default Discover