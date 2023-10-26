import React, {useEffect, useState} from 'react';

function Booking() {

    const [width, setWidth] = useState(640);

    useEffect(() => {
        // effect logic
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setWidth(window.innerWidth);
            } else {
                setWidth(640);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);


    return (
        <div>
            <h1>Booking</h1>
            <div>
                <iframe

                    src="https://docs.google.com/forms/d/e/1FAIpQLSdl92VffFUHtbQWkWjmpA0JLg7cUW6TTujHYbf2wcsWS5ZojA/viewform?embedded=true"
                        width={width}
                        height={width * 1.62}
                        frameBorder="0"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
}

export default Booking;