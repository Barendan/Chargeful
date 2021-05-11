import { useEffect } from "react";
import BuildMap from "./components/BuildMap";
import "./App.css";

const App = () => {
  useEffect(() => {
    BuildMap();
  }, []);

  return (
    <div className="App">
      <h1 className="header">Chargeful</h1>

      <div className="description">
        Here is a fantastic tool to help you calculate how much solar power your
        panels can produce. Simply draw a polygon by clicking anywhere on the
        map and double click once you are finished choosing the selected area.
        Our engine will calculate the nominal power for you. <br />
        If you wish to start over, click the trash icon at the top left of the
        map.
      </div>
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
