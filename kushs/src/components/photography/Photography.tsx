import React from 'react';

function Photography() {
    return (
        <div>
            <h1>Photography</h1>

            <div className={'link'}>
                <a href={'/aerial'}>
                    <button>Aerial</button>
                </a>
            </div>
            <br></br>
            <div>
                <a href={'/digital'}>
                    <button>Digital</button>
                </a>
            </div>
            <br></br>
            <div>
                <a href={'/film'}>
                    <button>Film</button>
                </a>
            </div>
        </div>
    );
}

export default Photography;
