const testimonials = [
  {
    name: 'Amara Singh',
    initials: 'AS',
    color: '#0EA5E9',
    role: 'Patient — Cardiology',
    quote: '"I was so anxious about booking a specialist. Forge Assistant made it incredibly simple — confirmed in minutes. I am never going back to calling the clinic."',
    stars: 5,
  },
  {
    name: 'James Okafor',
    initials: 'JO',
    color: '#10B981',
    role: 'Patient — General Physician',
    quote: '"The AI guided me perfectly, asked the right questions, and booked me with the right doctor. Super impressed with the experience."',
    stars: 5,
  },
  {
    name: 'Priya Mehta',
    initials: 'PM',
    color: '#8B5CF6',
    role: 'Patient — Dermatology',
    quote: '"Honestly the best healthcare booking experience I have had. Clean interface, zero confusion, and my doctor was exactly what I needed."',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Patient Stories</p>
          <h2 className="section-title">Loved by Patients</h2>
          <p className="section-sub">Real experiences from real patients who booked through Forge Assistant.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
