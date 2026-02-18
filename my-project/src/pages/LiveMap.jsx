import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

const LiveMap = () => {
  const [locations, setLocations] = useState([]);

  // Fetch API data
  const loadData = () => {
    fetch("http://localhost:3000/locations")
      .then(res => res.json())
      .then(data => {
        setLocations(data);
      });
  };

  useEffect(() => {
    loadData();

    // Auto refresh every 5 sec
    const interval = setInterval(loadData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className="flex justify-center items-center">
  <MapContainer
    center={[20.5937, 78.9629]}
    zoom={5}
    className="h-[80vh] w-[80%] m-[18vh] flex"
  >
    <TileLayer
      attribution="© OpenStreetMap contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {locations.map((place, index) => (
      <Marker key={index} position={[place.lat, place.lng]}>
        <Popup>
          <b>{place.name}</b> <br />
          Safety: {place.safety}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
</div>
  );
};

export default LiveMap;