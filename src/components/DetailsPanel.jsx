import React, { useState, useEffect } from 'react';
import outputData from './WSIViewer/output.json'; // Adjust path based on your structure
const wsiImage = '/img/7_20241209_024613.png';
import '../css/DetailsPanel.css';


const DetailsPanel = () => {
    const [data, setData] = useState(outputData); // Use imported JSON data

    if (!data || !data.output) {
        return <p>Loading...</p>;
    }

    const { detection_results } = data.output;

    const uniqueLabels = [...new Set(detection_results.map(box => box[4]))];

    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRight: '1px solid #ddd' }}>
            <h3>Findings</h3>
            <ul>
                {uniqueLabels.map((label, index) => (
                    <li key={index} style={{ marginBottom: '5px' }}>
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetailsPanel;
