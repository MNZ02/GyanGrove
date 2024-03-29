import React, { useEffect } from 'react'

function Events() {

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming');
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

        </div>
    )
}

export default Events
