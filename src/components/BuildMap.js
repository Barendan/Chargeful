import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import turfArea from "@turf/area";

const BuildMap = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmFyZW5kYW4iLCJhIjoiY2tvaG5iZTBhMG81czJwb2FwMDRlYW1pcyJ9.SHXta_yd3s5oPG5hymzdJA";

  // Initialize new map
  let map = new mapboxgl.Map({
    container: "map", // container id
    // style: "mapbox://styles/mapbox/satellite-v9", // satellite image
    style: "mapbox://styles/mapbox/streets-v11", // streets image
    center: [-71.057083, 42.361145], // starting position
    zoom: 12, // starting zoom
  });

  // Initialize draw controls
  let draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true,
    },
    defaultMode: "draw_polygon",
  });

  // Initialize the geocoder
  let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: false, // Do not use the default marker style
    placeholder: "Search for places", // Placeholder text for the search bar
  });

  map.addControl(draw, "top-left");
  map.addControl(geocoder);

  // callback function for when draw controls used
  const updateArea = (e) => {
    let data = draw.getAll();
    let answer = document.getElementById("result");

    if (data.features.length > 0) {
      let area = turfArea(data);
      // console.log("area is", area);
      let nominal_power = calculatePower(area);

      answer.innerHTML =
        "<p>Based on the area selected, the nominal power is <strong>" +
        nominal_power +
        " Watts.</strong></p>";
    } else {
      answer.innerHTML = "";
      if (e.type !== "draw.delete")
        alert("Use the draw tools to draw a polygon!");
    }
  };

  map.on("draw.create", updateArea);
  map.on("draw.delete", updateArea);
  map.on("draw.update", updateArea);
};

// Equation for nominal power
// E = A x r x H x PR
// calculatePower to max of 2 decimal points
const calculatePower = (area) => Math.round(area * 1000 * 0.18 * 100) / 100;

export default BuildMap;
