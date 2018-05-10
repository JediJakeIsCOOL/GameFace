import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAplnT9YLn0UjsTaYW1ilnKqTQVwixz4v0&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 29.7604, lng: -95.3698 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 29.7604, lng: -95.3698 }} />}
  </GoogleMap>
);

<MyMapComponent isMarkerShown />

export default MyMapComponent;