import { data } from '../data'
import React from 'react';
import stars from "../images/stars.png";
import FilterLinks from '../Components/FilterLinks';

const PlaceToStay = () => {
  return (
    <>
      <FilterLinks />
      <div className='grid grid-cols-4 w-10/12 mx-auto gap-4 mt-8 mb-8'>
        {data.map((data) => {
          const { image } = data;

          return (
            <>
              <div className='box p-3 border-2 rounded-xl'>
                <img src={image} alt="" className='w-full  hover:scale-[1.03] transition-all' />

                <div className='flex items-center justify-between my-2 text-sm'>
                  <span>Desert king</span>
                  <span className='font-semibold'>1MBT per night</span>
                </div>

                <div className='flex items-center justify-between my-2 text-xs'>
                  <span>2345km away</span>
                  <span>available for 2weeks stay</span>
                </div>

                <div className='my-2'>
                  <img src={stars} alt="" />
                </div>
              </div>
            </>
          )

        })}

      </div>
    </>
  )
}

export default PlaceToStay