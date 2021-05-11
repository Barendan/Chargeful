import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    BuildMap();
  }, []);

  const BuildMap = () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYmFyZW5kYW4iLCJhIjoiY2tvaG5iZTBhMG81czJwb2FwMDRlYW1pcyJ9.SHXta_yd3s5oPG5hymzdJA";

    // Initialize new map
    let map = new mapboxgl.Map({
      container: "map", // container id
      // style: "mapbox://styles/mapbox/satellite-v9",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-71.057083, 42.361145], // starting position
      zoom: 12, // starting zoom
    });
  };

  return (
    <div className="App">
      <h1>ChargeFul</h1>

      <div className="map-container">
        <div id="map"></div>
        <div className="helper-box">
          <p>Draw a polygon using the draw tools.</p>
        </div>
      </div>
      <div id="result"></div>
    </div>
  );
};

export default App;
