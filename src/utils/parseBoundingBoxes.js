// utils/parseBoundingBoxes.js

const parseBoundingBoxes = (outputData) => {
    try {
      // Safely access the detection_results array
      const detectionResults = outputData?.output?.detection_results || [];
  
      // Map each bounding box data to the required format
      const boundingBoxes = detectionResults.map((box) => {
        const [x1, y1, x2, y2, label] = box;
        return {
          x1,
          y1,
          x2,
          y2,
          label,
        };
      });
  
      return boundingBoxes;
    } catch (error) {
      console.error("Error parsing bounding boxes:", error);
      return []; // Return an empty array in case of an error
    }
  };
  
  export default parseBoundingBoxes;
  
  