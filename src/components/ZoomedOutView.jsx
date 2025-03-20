import React from "react";
const wsiImage = '/img/7_20241209_024613.png';

const ZoomedOutView = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "150px",
        border: "1px solid #ccc",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={wsiImage}
        alt="Zoomed-Out View"
        style={{
          width: "200%",
          height: "200%",
          objectFit: "cover",
        }}
      />

      {/* Pointer to indicate the viewed area */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "10px",
          height: "10px",
          backgroundColor: "red",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default ZoomedOutView;
