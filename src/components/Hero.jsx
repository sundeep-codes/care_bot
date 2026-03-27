export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">🟢 Live — Book in under 2 minutes</div>
        <h1>
          Book a Doctor Appointment<br />
          <em>in Minutes</em>
        </h1>
        <p className="hero-sub">
          Forge Assistant connects you with the right care — chat with our AI,
          describe your symptoms, and get booked instantly.
        </p>
        <div className="hero-actions">
          <a href="#book" className="btn btn-primary">📅 Book an Appointment</a>
          <button
            className="btn btn-ghost"
            onClick={() => document.getElementById('chat-fab')?.click()}
          >
            💬 Chat with Assistant
          </button>
        </div>
      </div>

      {/* Heartbeat animation */}
      <div className="heartbeat-wrap">
        <svg className="heartbeat-svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <polyline
            className="heartbeat-path"
            points="0,30 150,30 200,30 240,8 270,52 300,8 330,52 360,30 400,30 450,30 480,22 500,40 520,30 600,30 650,30 700,30 740,10 770,50 800,10 830,50 860,30 900,30 950,30 980,24 1000,38 1020,30 1200,30"
            stroke="#0EA5E9"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.45"
          />
        </svg>
      </div>
    </section>
  )
}
