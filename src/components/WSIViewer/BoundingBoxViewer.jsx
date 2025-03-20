import React from 'react';
import ImageZoom from 'react-image-zoom';  // Import the react-image-zoom component
import outputData from './WSIViewer/output.json';

const wsiImage = process.env.PUBLIC_URL + "/7_20241209_024613.png";

const BoundingBoxViewer = () => {
  const { detection_results } = outputData.output;

  // Configuration options for react-image-zoom
  const zoomSettings = {
    width: 800,       
    height: 600,    
    zoomWidth: 1200,    // Width of the zoomed-in image (adjust as needed)
    zoomStyle: 'opacity: 1; border: 1px solid black;', // Zoomed image style
    img: wsiImage,       // Path to the main image
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Use the ImageZoom component */}
      <ImageZoom {...zoomSettings} />

      {/* Overlay Bounding Boxes */}
      {detection_results && detection_results.map((box, index) => {
        const [x1, y1, x2, y2, label] = box;

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${x1}px`,
              top: `${y1}px`,
              width: `${x2 - x1}px`,
              height: `${y2 - y1}px`,
              border: '2px solid red',
              pointerEvents: 'none',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '-20px',
                left: '0',
                backgroundColor: 'red',
                color: 'white',
                padding: '2px 4px',
                fontSize: '12px',
              }}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BoundingBoxViewer;
