const words = [
  { text: "FULL STACK DEVELOPER", highlight: false },
  { text: "REACT SPECIALIST", highlight: true },
  { text: "NODE.JS", highlight: false },
  { text: "PYTHON", highlight: true },
  { text: "AI INTEGRATION", highlight: false },
  { text: "PROBLEM SOLVER", highlight: true },
  { text: "FAST DELIVERY", highlight: false },
  { text: "OPEN SOURCE", highlight: true },
  { text: "ALWAYS LEARNING", highlight: false },
];

function Track() {
  return (
    <span className="inline-flex items-center">
      {words.map((w, i) => (
        <span key={i} className="mx-4 whitespace-nowrap">
          <span style={{ color: w.highlight ? "#0EA5E9" : "#333" }}>{w.text}</span>
          <span className="ml-4" style={{ color: "#222" }}>•</span>
        </span>
      ))}
    </span>
  );
}

export default function TrustBar() {
  return (
    <div className="trust-bar w-full overflow-hidden border-y"
      style={{ background: "#0a0a0a", borderColor: "rgba(255,255,255,0.05)", padding: "14px 0" }}
    >
      <div className="trust-bar-track">
        <Track /><Track /><Track /><Track />
      </div>
    </div>
  );
}
