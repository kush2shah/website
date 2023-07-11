import React, {useState, useEffect} from 'react';
import axios from 'axios';

import '../../css/error.css'

function NotFound() {
    const [dogImage, setDogImage] = useState(null);

    useEffect(() => {
        const getDogImage = async () => {
            const response = await axios.get('https://api.thedogapi.com/v1/images/search');
            setDogImage(response.data[0].url);
        };
        getDogImage();
        }, []);

    return (
            <div>
                <h1>Not found</h1>
                <h3>Sorry about this, there's nothing here yet</h3>
                <p>If you think there should be, let me know</p>
                <br></br>
                <a href='/' className='link'>
                    <button>
                        Let's go home?
                    </button>
                </a>
                

            <div className='image-container'>
                {dogImage && (
                    <img src={dogImage} className='image-wrapper' alt="Random Dog" />
                    )}
            </div>
        </div>
    );
}

export default NotFound;