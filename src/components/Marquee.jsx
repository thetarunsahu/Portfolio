const text = "FULL STACK DEV • AI TOOLS • WEB APPS • REACT • NODE.JS • PYTHON • API INTEGRATION • ";

export default function Marquee() {
  return (
    <div className="hero-marquee">
      <div className="hero-marquee-track">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
