import React from 'react';

import beliz from '../../assets/graduation/beliz.jpeg';
import erin from '../../assets/graduation/erin.jpg';
import lauren from '../../assets/graduation/lauren.jpeg';
import mccauley from '../../assets/graduation/McCauley_Cap_Throw.jpeg';
import pj from '../../assets/graduation/pj.jpeg';
import marge from '../../assets/graduation/marge.jpg';
import chase from '../../assets/graduation/chase.jpeg';

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
                    <img src={chase} alt="A grad looking at computers programming" />
                    <div className="overlay">
                        <p>Chase Allen<br></br> Class of 2023 </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={marge} alt="A grad at the Old Well looking into the camera leaning" />
                    <div className="overlay">
                        <p>Margaret Seets<br></br> Class of 2023 </p>
                    </div>
                </div>
                <div className="image-wrapper">
                    <img src={beliz} alt="A grad at the Old Well looking into the camera leaning" />
                    <div className="overlay">
                        <p>Beliz Yilmaz<br></br> Class of 2023 </p>
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
                <div className="image-wrapper">
                    <img src={erin} alt="A grad in sunglasses against a sea of blue chairs" />
                    <div className="overlay">
                        <p>Erin Silva<br></br> Class of 2023 </p>
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