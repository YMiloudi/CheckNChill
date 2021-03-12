/* global google */
import React, { useState } from "react";
import './Map.css';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from "react-google-maps";

//This is our map component
function Map() {
  const DirectionService = new window.google.maps.DirectionsService();

  const [direction, setDirection] = useState();

  DirectionService.route(
    {
      origin: new google.maps.LatLng(48.85837, 2.294481),
      destination: new google.maps.LatLng(48.85668, 2.3995703),
      travelMode: google.maps.TravelMode.DRIVING
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirection(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 48.856613, lng: 2.352222 }}
    > 
    </GoogleMap>
  );
}

//We need to wrap our map component here so it can load all the needed libraries
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
  return (
    <div className="map">
  
      <div className="mapStyle">
          
        <WrappedMap
        /*Here the API Key "AIzaSyDe7b2AlZGDtxggir5M9knmgSfgIVV_k_k"*/
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDe7b2AlZGDtxggir5M9knmgSfgIVV_k_k&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}>
          </WrappedMap>
      </div>
    </div>
  );
}