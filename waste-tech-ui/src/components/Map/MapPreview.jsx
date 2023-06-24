import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useMemo, useCallback } from "react";
import GoogleMapReact from "google-map-react";

const LocationPin = ({ text }) => (
  <div className="pin">
    {/* <Icon icon={locationIcon} className="pin-icon" /> */}
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className="map" style={{width:'100%', height:"200px"}}>
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div style={{width:'100%', height:"200px"}}>
      <iframe
       style={{width:'90%', height:"400px"}}
      className="w-full h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.466140423142!2d39.2322458!3d-6.7692139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c51d220951b1f%3A0x8761998c524d8ebf!2sNational%20Examination%20Council%20of%20Tanzania!5e0!3m2!1sen!2stz!4v1623528260504!5m2!1sen!2stz"
        frameborder="0"
      ></iframe>
    </div>
  </div>
);

export default Map;
