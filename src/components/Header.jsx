import React from 'react'
import barsSvg from '../assets/bars.svg'
import searchSvg from '../assets/search.svg'
import heartsSvg from '../assets/hearts.svg'

function Header() {
    return (
        <div className='m-2 p-2 flex justify-around items-center'>
            <div>
                <h1 className='text-xl font-bold text-red-600'>BookUsNow</h1>
            </div>
            <div className='flex max-w-2xl w-full'>
                <div className='flex'>
                    <button className='bg-gray-800 text-white rounded-md px-3 py-1 flex items-center'>
                        <span>
                            <img className='w-4 mr-2' src={barsSvg} alt="bars" />
                        </span>
                        Categories
                    </button>
                </div>


                <div className='mx-2 w-full max-w-lg'>
                    <input className='border border-gray-300 px-4 py-1 rounded-md w-full' type="text" placeholder='Search' />
                </div>
            </div>



            <div className='flex space-x-4'>
                <div className='flex space-x-2 items-center'>
                    <img className='w-5' src={heartsSvg} alt="heart" />
                    <button>Favourites</button>
                </div>
                <button className='border border-gray-300 px-2 py-1 rounded-md'>Sign in</button>
            </div>
        </div>
    )
}

export default Header
