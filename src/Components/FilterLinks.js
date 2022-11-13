import React from 'react'
import setting from "../images/setting-5.png";

const FilterLinks = () => {
    return (
        <div className='flex items-center w-10/12 mx-auto gap-16 mt-16 mb-12 text-[#434343]'>
            <ul className='flex items-center gap-12'>
                <li className='cursor-pointer'>Resturant</li>
                <li className='cursor-pointer'>Cottage</li>
                <li className='cursor-pointer'>Castle</li>
                <li className='cursor-pointer'>fantast city</li>
                <li className='cursor-pointer'>beach</li>
                <li className='cursor-pointer'>Carbins</li>
                <li className='cursor-pointer'>Off-grid</li>
                <li className='cursor-pointer'>Farm</li>
            </ul>

            <button className='border-2 px-6 py-2 rounded-lg flex items-center gap-2'>
                Location
                <img src={setting} alt="" />
            </button>
        </div>
    )
}

export default FilterLinks