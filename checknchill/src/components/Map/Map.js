/* global google */
import React, { useState } from "react";
import './Map.css';
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  withScriptjs,
  withGoogleMap
} from "react-google-maps";

import * as informations from "./informations";
import Rating from './rating.png';

//This is our map component
function Map() {


  const [direction, setDirection] = useState();

  
 
  return (
    
    <div id="mapBoxContent">
      
      <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: -33.8548157, lng: 151.2164539 }}
    >

      {informations.default.map((bed) => (
        <Marker
          key={bed.name}
          position={{ lat: bed.lat, lng: bed.lon }}
          icon={{
            url: Rating,
            origin: new window.google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 30),
            scaledSize: new window.google.maps.Size(35,35),
          }}
        />
      ))}

      {informations.default.map((information) => (
        <Marker
          key={information.name}
          position={{ lat: information.lat, lng: information.lon }}
          icon={{
            url: Rating,
            origin: new window.google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 30),
            scaledSize: new window.google.maps.Size(35,35),
          }}
        />
      ))}

      {informations.default.map((bread) => (
        <Marker
          key={bread.name}
          position={{ lat: bread.lat, lng: bread.lon }}
          icon={{
            url: Rating,
            origin: new window.google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 30),
            scaledSize: new window.google.maps.Size(35,35),
          }}
        />
      ))}

      {informations.default.map((bath) => (
        <Marker
          key={bath.name}
          position={{ lat: bath.lat, lng: bath.lon }}
          icon={{
            url: Rating,
            origin: new window.google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 30),
            scaledSize: new window.google.maps.Size(35,35),
          }}
        />
      ))}
      {direction && <DirectionsRenderer directions={direction} />}
      
    </GoogleMap>
    </div>
  );
}

//We need to wrap our map component here so it can load all the needed libraries
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
  return (
    <div className="map">
      <h1>And go chill outside</h1>
      
        <div className="mapStyle">           
          <WrappedMap
          /*Here the API Key "AIzaSyDe7b2AlZGDtxggir5M9knmgSfgIVV_k_k"*/
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDe7b2AlZGDtxggir5M9knmgSfgIVV_k_k&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: "350px", width: "350px" }} />}
            containerElement={<div style={{ height: "350px", width: "350px" }} />}
            mapElement={<div style={{ height: "430px", width: "430px" }} />}>
            </WrappedMap>
        

          <div className="checkBox">
          
            <label className="container">Go for a drink
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="container">Go to the park
              <input type="checkbox"  />
              <span className="checkmark"></span>
            </label>

            <label className="container">Go shopping
              <input type="checkbox"  />
              <span className="checkmark"></span>
            </label>

            <label className="container">Go to an exhibition
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      
    </div>
  );
}