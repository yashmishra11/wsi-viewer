import React, { useState, useEffect } from "react";
<img src={wsiImage} alt="WSI Image" />;
import wsiImage from "/src/7_20241209_024613.png";

const BoundingBoxViewer = () => {
  const [outputData, setOutputData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/output.json`) // ✅ Keep JSON in public folder
      .then((response) => response.json())
      .then((data) => setOutputData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  if (!outputData) return <p>Loading...</p>;

  const { detection_results } = outputData.output;

  // Configuration options for react-image-zoom
  const zoomSettings = {
    width: 800,
    height: 600,
    zoomWidth: 1200,
    zoomStyle: "opacity: 1; border: 1px solid black;",
    img: wsiImage, // ✅ Use the imported image
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Use the ImageZoom component */}
      <ImageZoom {...zoomSettings} />

      {/* Overlay Bounding Boxes */}
      {detection_results &&
        detection_results.map((box, index) => {
          const [x1, y1, x2, y2, label] = box;

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: `${x1}px`,
                top: `${y1}px`,
                width: `${x2 - x1}px`,
                height: `${y2 - y1}px`,
                border: "2px solid red",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "0",
                  backgroundColor: "red",
                  color: "white",
                  padding: "2px 4px",
                  fontSize: "12px",
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
