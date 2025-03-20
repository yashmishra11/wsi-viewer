import React from 'react';
import wsiImage from '../../public/7_20241209_024613.png';  // Import the WSI image

const ZoomedOutView = () => {
    return (
        <div style={{
            position: 'relative',
            width: '200px',       // Adjust as needed
            height: '150px',      // Adjust as needed
            border: '1px solid #ccc',
            overflow: 'hidden'   // Hide overflow for the pointer
        }}>
            <img
                src={wsiImage}
                alt="Zoomed-Out View"
                style={{
                    width: '100%',    // Ensure the image fits the container
                    height: 'auto',
                    transform: 'scale(0.2)' //Zoom out image to fit in view
                }}
            />

            {/* Pointer to indicate the viewed area */}
            <div style={{
                position: 'absolute',
                top: '50%',         // Center the pointer vertically
                left: '50%',        // Center the pointer horizontally
                transform: 'translate(-50%, -50%)', // Center the pointer precisely
                width: '10px',       // Pointer width
                height: '10px',      // Pointer height
                backgroundColor: 'red', // Pointer color
                borderRadius: '50%',  // Make it a circle
                pointerEvents: 'none'  // Ensure the pointer doesn't interfere with events
            }} />
        </div>
    );
};

export default ZoomedOutView;
