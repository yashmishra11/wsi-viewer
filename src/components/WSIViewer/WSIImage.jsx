import React from 'react';
const wsiImage = `${process.env.PUBLIC_URL}/img/7_20241209_024613.png`;

const WSIImage = () => {
    return (
        <img
            src={wsiImage}
            alt="Whole Slide Image"
            style={{ width: '100%', display: 'block' }} // Make sure the image fills its container
        />
    );
};

export default WSIImage;
