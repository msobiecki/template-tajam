import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

const MapboxApi = withScriptjs(withGoogleMap(props => {
  console.log(props)
  return <GoogleMap {...props}>{props.children}</GoogleMap>
}));

export default MapboxApi;
