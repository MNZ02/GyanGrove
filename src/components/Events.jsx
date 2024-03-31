import React, { useEffect, useState } from 'react';
import locationSvg from '../assets/location.svg';
import rightArrowBlackSvg from '../assets/right-arrow-black.svg';

function Events() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const converturl = (url) => {
        const id = url.match(/\/d\/([-\w]+)/)[1];
        const imgId = `https://drive.google.com/thumbnail?id=${id}`;
        return imgId;
    };

    const convertWeather = (weather) => {
        weather = weather.replace(/(\d+)/, "$1°");
        weather = weather.replace(/\s/, ", ");
        return weather;
    };

    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`);
            const data = await response.json();
            if (data.events.length === 0) {
                setHasMore(false);
            } else {
                setEvents((prevEvents) => [...prevEvents, ...data.events]);
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && hasMore) {
            fetchData();
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasMore]);

    return (
        <div className='flex flex-wrap -space-x-14 ml-48 mt-8'>
            <div className='w-full'>
                <div className='flex space-x-2 -ml-12'>
                    <h1 className='font-semibold text-lg ml-24'>Upcoming Events</h1>
                    <img className='w-5' src={rightArrowBlackSvg} alt="rightArrow" />
                </div>
            </div>

            {events.map((event, index) => (
                <div key={index} className='m-2 p-2'>
                    <div className='m-2 p-2 border border-gray-300 rounded-md w-fit ml-20 relative'>
                        <img className='w-80 rounded-md cursor-pointer' src={converturl(event.imgUrl)} alt="img" />
                        <div className='border border-black rounded-md px-[12px] py-[7px] mx-4 absolute -mt-[50px]  max-w-[290px] bg-black w-full opacity-70'>
                            <p className='text-sm px-2 text-white'>{formatDate(event.date)}</p>
                        </div>
                        <p className='font-semibold text-lg mt-4 px-2 cursor-pointer'>{event.eventName}</p>
                        <div className='flex justify-between'>
                            <div className='flex space-x-2 px-2 my-2 text-sm'>
                                <img className='w-3' src={locationSvg} alt="location" />
                                <p className=''>{event.cityName}</p>
                            </div>
                            <div className='px-2 my-2 text-sm'>
                                <p>{convertWeather(event.weather)} | {Math.floor(event.distanceKm / 100)} Km</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default Events;
