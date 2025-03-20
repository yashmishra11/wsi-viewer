import React from 'react';
import wsiImage from '../../public/7_20241209_024613.png';  // Import the WSI image

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
