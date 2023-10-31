import React from 'react';

import beliz from '../../assets/graduation/beliz.jpeg';
import erin from '../../assets/graduation/erin.jpg';
import lauren from '../../assets/graduation/lauren.jpeg';
import mccauley from '../../assets/graduation/McCauley_Cap_Throw.jpeg';
import pj from '../../assets/graduation/pj.jpeg';

import {PhotoProvider, PhotoView} from "react-photo-view";

function Graduation() {
    const photos = [beliz, erin, lauren, mccauley, pj];
    return (
        <div>
            <h1>Graduation</h1>

            <a href='/book' className='link'>
                <button className={'gh-button'}>
                    Register for Photos
                </button>
            </a>

            <div className="image-container">
                <div className="image-wrapper">
                    <img src={beliz} alt="Black and white photo of someone brushing" />
                    <div className="overlay">
                        <p>Beliz Yilmaz<br></br> Class of 2023 </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={erin} alt="The Golden Gate Bridge" />
                    <div className="overlay">
                        <p>Erin Silva<br></br> Class of 2023 </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={lauren} alt="A grad in Kenan Stadium looking down into the camera" />
                    <div className="overlay">
                        <p>Lauren Alexander<br></br>Class of 2023 </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={mccauley} alt="A group of seven grads throwing their hats" />
                    <div className="overlay">
                        <p>McCauley St<br></br>Class of 2023</p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={pj} alt="A grad leaning down and looking into the camera" />
                    <div className="overlay">
                        <p>PJ Morales<br></br>Class of 2023</p>
                    </div>
                </div>
            </div>


            {/* learn how to use PhotoProvider and PhotoView */}
            {/*<PhotoProvider>*/}
            {/*    <div className="foo">*/}
            {/*        {photos.map((item, index) => (*/}
            {/*            <PhotoView key={index} src={item}>*/}
            {/*                <img src={item} alt="" />*/}
            {/*            </PhotoView>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</PhotoProvider>*/}


        </div>
    );
}

export default Graduation;