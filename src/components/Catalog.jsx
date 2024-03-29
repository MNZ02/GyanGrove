import React from 'react'
import locationSvg from '../assets/location.svg'

function Catalog() {
    return (
        <div className='mx-24 px-2 max-w-4xl flex justify-between'>
            <div className='flex space-x-1'>
                <img className='w-3' src={locationSvg} alt="location" />
                <p>Mumbai, India</p>
            </div>
            <div className='max-w-lg w-full'>
                <ul className='flex justify-around space-x-5 ml-4'>
                    <li className='cursor-pointer'>Live Shows</li>
                    <li className='cursor-pointer'>Streams</li>
                    <li className='cursor-pointer'>Movies</li>
                    <li className='cursor-pointer'>Plays</li>
                    <li className='cursor-pointer'>Events</li>
                    <li className='cursor-pointer'>Sports</li>
                    <li className='cursor-pointer'>Activities</li>
                </ul>
            </div>

        </div>
    )
}

export default Catalog
