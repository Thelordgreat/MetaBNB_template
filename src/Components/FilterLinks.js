import React from 'react'
import setting from "../images/setting-5.png";

const FilterLinks = () => {
    return (
        <div className='flex items-center w-10/12 mx-auto gap-3 md:gap-12 lg:gap-16 mt-16 mb-12 text-[#434343] md:flex-wrap'>
            <ul className='hidden md:block md:flex items-center gap-6 lg:gap-12 flex-wrap'>
                <li className='cursor-pointer'>Resturant</li>
                <li className='cursor-pointer'>Cottage</li>
                <li className='cursor-pointer'>Castle</li>
                <li className='cursor-pointer'>fantast city</li>
                <li className='cursor-pointer'>beach</li>
                <li className='cursor-pointer'>Carbins</li>
                <li className='cursor-pointer'>Off-grid</li>
                <li className='cursor-pointer'>Farm</li>
            </ul>

            <select className='md:hidden border-2 px-4 py-2 rounded-lg outline-none'>
                <option>Resturant</option>
                <option>Cottage</option>
                <option>Castle</option>
                <option>fantast city</option>
                <option>beach</option>
                <option>Carbins</option>
                <option>Off-grid</option>
                <option>Farm</option>
            </select>

            <button className='border-2 px-6 py-2 rounded-lg flex items-center gap-2'>
                Location
                <img src={setting} alt="" />
            </button>
        </div>
    )
}

export default FilterLinks