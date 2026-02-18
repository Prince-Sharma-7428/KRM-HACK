import { useState } from "react";
import MapContainerComponent from "../components/MapContainer";
import AreaCard from "../components/AreaCard";

export default function SafetyMap() {
  const [timeFilter, setTimeFilter] = useState("Day");
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Title */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold">Live Safety Map</h1>
      </div>

      {/* Search + Filters */}
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <input
          type="text"
          placeholder="Search Area..."
          className="w-full p-3 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-3 mt-4">
          {["Day", "Evening", "Night"].map((time) => (
            <button
              key={time}
              onClick={() => setTimeFilter(time)}
              className={`px-5 py-2 rounded-lg font-medium transition ${
                timeFilter === time
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto px-4">
        <MapContainerComponent
          timeFilter={timeFilter}
          setSelectedArea={setSelectedArea}
        />
      </div>

      {/* Area Info */}
      {selectedArea && (
        <div className="max-w-6xl mx-auto px-4 mt-6">
          <AreaCard area={selectedArea} />
        </div>
      )}
    </div>
  );
}
