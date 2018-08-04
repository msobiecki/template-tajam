import React from "react";
import { Marker } from 'react-google-maps';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

import MapboxApi from "./Mapbox-Api/Mapbox-Api";

import "./Mapbox.sass";

export default function Mapbox({ mapbox }) {
  const markers = (() => {
    return mapbox.markers.map((marker, index) => {
      return (<Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />);
    })
  })


  return (
    <MapboxApi
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div className="mapbox__box" />}
      containerElement={<div className="mapbox__box" />}
      mapElement={<div className="mapbox__box" />}
      defaultZoom={16}
      defaultCenter={{ lat: mapbox.lat, lng: mapbox.lng }}>
      <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={60}>
        {markers()}
      </MarkerClusterer>
    </MapboxApi>
  )
}
