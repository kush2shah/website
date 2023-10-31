import React from 'react';

const TopButton = () => {

    const handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button
            id="top-btn"
            onClick={handleClick}
        >
            Top
        </button>
    );

}

export default TopButton;