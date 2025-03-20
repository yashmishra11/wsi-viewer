import React, { useState, useEffect } from 'react';

const DetailsPanel = () => {
    const [outputData, setOutputData] = useState(null);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/output.json`)
            .then(response => response.json())
            .then(data => setOutputData(data))
            .catch(error => console.error('Error loading JSON:', error));
    }, []);

    // Prevent errors by checking if outputData is loaded
    if (!outputData || !outputData.output) {
        return <p>Loading...</p>;
    }

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
