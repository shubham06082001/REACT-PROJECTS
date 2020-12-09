import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="spread-map">
      <iframe
        width="100%"
        height="800"
        src="https://app.developer.here.com/coronavirus/"
        frameBorder="0"
        title="Map"
      ></iframe>
    </div>
  );
};
export default Map;
