import React from 'react'
import bannerSvg from '../assets/banner.svg'

function Body() {
    return (
        <div className='mt-4 m-2 p-2 relative'>
            <img className='object-cover w-full ' src={bannerSvg} alt="banner" />
            <h1 style={{ top: '30%', left: '50%', transform: 'translate(-50%,-50%)', wordSpacing: '4px' }} className='max-w-5xl w-full font-semibold leading-loose text-center text-5xl text-white absolute'>Discover Exciting Events Happening <br />Near You - Stay Tuned for Updates</h1>

            <p style={{ top: '45%', left: '50%', transform: 'translate(-50%,-50%)'}} className='max-w-2xl w-full spa text-center text-white absolute'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla ornare mauris ac consectetur. Ut varius neque justo, quis tincidunt felis mollis nec.</p>
        </div>
    )
}

export default Body
