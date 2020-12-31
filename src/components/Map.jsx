import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from './../config';
const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: data ? data.lat : 0,
    lng: data ? data.lng : 0,
  };
  return (
    <LoadScript googleMapsApiKey={config.googleApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
