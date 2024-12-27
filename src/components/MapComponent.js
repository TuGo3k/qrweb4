import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  // Your Google Maps API Key
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";

  // Options for the map
  const mapOptions = {
    zoom: 15,
    center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco coordinates
  };

  // Load Google Maps API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center h-[400px] w-full bg-gray-200">
      <GoogleMap
        mapContainerClassName="w-full h-full rounded-lg shadow-lg"
        zoom={mapOptions.zoom}
        center={mapOptions.center}
      >
        {/* Pinned Marker */}
        <Marker position={mapOptions.center} />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
