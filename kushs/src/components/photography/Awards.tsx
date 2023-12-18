import React from 'react';

import window from '../../assets/awards/coulture/window_sunset.jpeg';
import throne from '../../assets/awards/coulture/taft_throne.jpeg';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from '../../../../components/ImageGallery';

function Awards() {
    const images = [
        {
            original: window,
            thumbnail: window,
        },
        {
            original: throne,
            thumbnail: throne,
        }
    ];

    class Gallery extends React.Component {
        render() {
            return <ImageGallery items={images} />;
        }
    }
    return (
        <div>
            <h1>Recognition</h1>
            <div className='gallery-container'>
                <div className='gallery-item'>
                    <img src={window} alt='Two women in front of a sunset in the background' />
                </div>
                <div className='gallery-item'>
                    <img src={throne} alt='A man on a throne with five women surrounding him' />
                </div>
            </div>
        </div>
    );
}

export default Awards;