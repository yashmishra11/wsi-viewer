import React from 'react';

const ZoomedOutView = () => {
    const imageUrl = "/7_20241209_024613.png";  // Directly reference the public image

    return (
        <div style={{
            position: 'relative',
            width: '200px',       
            height: '150px',      
            border: '1px solid #ccc',
            overflow: 'hidden'  
        }}>
            <img
                src={imageUrl}
                alt="Zoomed-Out View"
                style={{
                    width: '100%',    
                    height: 'auto',
                    transform: 'scale(0.2)' 
                }}
            />

            {/* Pointer to indicate the viewed area */}
            <div style={{
                position: 'absolute',
                top: '50%',         
                left: '50%',        
                transform: 'translate(-50%, -50%)', 
                width: '10px',       
                height: '10px',      
                backgroundColor: 'red', 
                borderRadius: '50%',  
                pointerEvents: 'none'  
            }} />
        </div>
    );
};

export default ZoomedOutView;
