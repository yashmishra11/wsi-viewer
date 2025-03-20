import React, { useState, useEffect } from 'react';
import ImageZoom from 'react-image-zoom';
const wsiImage = '/img/7_20241209_024613.png';
import outputData from './WSIViewer/output.json';
import '../css/BoundingBoxViewer.css';


const BoundingBoxViewer = () => {
    const [data, setData] = useState(outputData); // Use imported JSON data

    if (!data || !data.output) return <p>Loading...</p>;

    const { detection_results } = data.output;

    const zoomSettings = {
        width: 800,
        height: 600,
        zoomWidth: 1200,
        zoomStyle: "opacity: 1; border: 1px solid black;",
        img: wsiImage,
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <ImageZoom {...zoomSettings} />
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
