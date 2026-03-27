import { useState } from 'react'

const faqs = [
  {
    q: 'How do I book an appointment?',
    a: 'Simply scroll to the "Book Appointment" section, fill in your details — name, contact info, preferred department, date, and time — then click "Book My Appointment". You\'ll get a confirmation shortly.',
  },
  {
    q: 'Can I cancel or reschedule my appointment?',
    a: 'Yes! You can cancel or reschedule for free at any time. Contact us via the chat widget or email and we\'ll update your booking with no fees.',
  },
  {
    q: 'Is Forge Assistant a replacement for a real doctor?',
    a: 'No. Forge Assistant is a booking and guidance tool. Our AI helps you describe symptoms and find the right specialist, but it does not provide medical diagnoses. Always consult a qualified doctor.',
  },
  {
    q: 'Is my personal health data secure?',
    a: 'Absolutely. Forge Assistant is built with a HIPAA-friendly architecture. Your data is encrypted in transit and at rest, and we never share it with third parties without your consent.',
  },
  {
    q: 'Which specialties are available?',
    a: 'We currently support General Physician, Cardiology, Dermatology, Pediatrics, Orthopedics, and Gynecology. More specialties are being added regularly.',
  },
  {
    q: 'Do I need to create an account to book?',
    a: 'No account needed! Just fill in the booking form and we\'ll take care of everything. An account is optional for managing and tracking past appointments.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Got Questions?</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know about booking with Forge Assistant.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                id={`faq-q-${i}`}
              >
                {item.q}
                <span className="faq-chevron">▾</span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
