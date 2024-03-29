import React, { useEffect, useState } from 'react'
import locationSvg from '../assets/location.svg'
import rightArrowBlackSvg from '../assets/right-arrow-black.svg'


function Events() {
    const [events, setEvents] = useState([]);
    const imageUrl = 'https://drive.google.com/uc?id=1eCTPLcYF_u8mcAlmZ2-SN2_j-aiWA_7y';


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming');
            const data = await response.json();
            console.log(data);
            setEvents(data.events);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-wrap space-x-24'>
            <div className='w-full'>
                <div className='flex space-x-2'>
                    <h1 className='font-semibold text-lg ml-24'>Upcoming Events</h1>
                    <img className='w-5' src={rightArrowBlackSvg} alt="rightArrow" />
                </div>
            </div>

            {
                events.map((event) => (
                    < div key={event.eventName} className='m-2 p-2' >

                        <div className='m-2 p-4 border border-gray-300 rounded-md w-fit'>
                            <img className='w-80 rounded-md' src={imageUrl} alt="img" />
                            <p className='font-semibold text-lg mt-8 px-2'>{event.eventName}</p>
                            <div className='flex justify-between'>

                                <div className='flex space-x-2 px-2 my-2 text-sm'>
                                    <img className='w-3' src={locationSvg} alt="location" />
                                    <p className=''>{event.cityName}</p>
                                </div>
                                <div className='px-2 my-2 text-sm'>
                                    <p>{event.weather} | {Math.floor(event.distanceKm / 100)} Km</p>
                                </div>
                            </div>
                        </div>
                    </div >
                ))
            }
        </div>

    )
}

export default Events
