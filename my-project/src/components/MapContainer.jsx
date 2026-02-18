import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const dummyAreas = [
  {
    name: "Karol Bagh",
    position: [28.6448, 77.2167],
    scores: { Day: 70, Evening: 55, Night: 42 },
  },
  {
    name: "Connaught Place",
    position: [28.6315, 77.2167],
    scores: { Day: 80, Evening: 65, Night: 50 },
  },
];

export default function MapContainerComponent({ timeFilter, setSelectedArea }) {
  const getRiskLevel = (score) => {
    if (score >= 70) return "Low";
    if (score >= 50) return "Medium";
    return "High";
  };

  return (
    <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[28.6139, 77.2090]} // Delhi
        zoom={12}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {dummyAreas.map((area, index) => {
          const score = area.scores[timeFilter];
          const risk = getRiskLevel(score);

          return (
            <Marker
              key={index}
              position={area.position}
              eventHandlers={{
                click: () =>
                  setSelectedArea({
                    name: area.name,
                    score,
                    risk,
                  }),
              }}
            >
              <Popup>
                <div>
                  <h2 className="font-bold">{area.name}</h2>
                  <p>Safety Score: {score}</p>
                  <p className="font-semibold">{risk} Risk</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
