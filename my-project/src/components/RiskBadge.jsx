export default function RiskBadge({ risk }) {
  const colors = {
    Low: "bg-green-500",
    Medium: "bg-yellow-500",
    High: "bg-red-500",
  };

  return (
    <span
      className={`px-3 py-1 text-white text-sm rounded-full ${colors[risk]}`}
    >
      {risk} Risk
    </span>
  );
}
