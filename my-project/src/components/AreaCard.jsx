import RiskBadge from "./RiskBadge";

export default function AreaCard({ area }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{area.name}</h2>
        <p className="text-gray-600 mt-1">
          Safety Score: <span className="font-semibold">{area.score}</span>
        </p>

        <div className="mt-2">
          <RiskBadge risk={area.risk} />
        </div>
      </div>

      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
        Report Incident
      </button>
    </div>
  );
}

