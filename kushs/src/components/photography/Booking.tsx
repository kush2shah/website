import React, {useEffect, useState} from 'react';

function Booking() {

    const [width, setWidth] = useState(640);

    function handleResize() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div>
            <h1>Booking</h1>
            <div>
                <iframe

                    src="https://docs.google.com/forms/d/e/1FAIpQLSdl92VffFUHtbQWkWjmpA0JLg7cUW6TTujHYbf2wcsWS5ZojA/viewform?embedded=true"
                        width={width}
                        height={width * 1.6}
                        frameBorder="0"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
}

export default Booking;