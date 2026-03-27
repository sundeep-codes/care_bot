const features = [
  { icon: '🩺', title: 'AI Symptom Guidance', desc: 'Get pre-appointment insights before you visit. Our AI helps you understand and articulate your condition.' },
  { icon: '📅', title: 'Easy Scheduling', desc: 'Book, reschedule, or cancel anytime. Full flexibility, no phone queues.' },
  { icon: '🔒', title: 'Secure & Private', desc: 'HIPAA-friendly architecture. Your personal health data is fully protected and encrypted.' },
  { icon: '⏱', title: 'Zero Wait Time', desc: 'Skip the phone queue entirely. Appointments confirmed in under 2 minutes.' },
  { icon: '👨‍⚕️', title: 'Verified Doctors', desc: 'Only certified, experienced practitioners across all major specialties.' },
  { icon: '📱', title: 'Works on Any Device', desc: 'Mobile, tablet, or desktop — Forge Assistant is fully responsive and always available.' },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Everything You Need in One Place</h2>
          <p className="section-sub">Designed to make healthcare access as frictionless as possible.</p>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
