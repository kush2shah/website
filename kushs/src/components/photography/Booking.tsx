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
            <a href="https://calendly.com/kmsh/grad" className={'link'}>If the booking interface doesn't render properly on your device, <br></br> please click here</a>
            <br></br>
            <div>
                <iframe
                    src="https://calendly.com/kmsh/grad"
                    width={width * 0.8}
                    height={width * 1.2}
                    style={{ minWidth: 280, height: 700 }}
                    frameBorder="0"
                />
                {/*<iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdl92VffFUHtbQWkWjmpA0JLg7cUW6TTujHYbf2wcsWS5ZojA/viewform?embedded=true"
                        width={width}
                        height={width * 1.6}
                        frameBorder="0"
                >
                    Loading…
                </iframe>*/}
            </div>
        </div>
    );
}

export default Booking;