import React from 'react';
import outputData from './WSIViewer/output.json';  // Import the JSON data

const DetailsPanel = () => {
    // Destructure the output.detection_results from the imported JSON
    const { detection_results } = outputData.output;

    // Extract unique labels from the detection results
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
