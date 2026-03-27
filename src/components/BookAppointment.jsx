import { useState } from 'react'

const DEPARTMENTS = [
  'General Physician',
  'Cardiology',
  'Dermatology',
  'Pediatrics',
  'Orthopedics',
  'Gynecology',
]

const TIME_SLOTS = [
  { id: 'morning',   label: '🌅 Morning',   sub: '8AM – 12PM' },
  { id: 'afternoon', label: '☀️ Afternoon', sub: '12PM – 5PM' },
  { id: 'evening',   label: '🌆 Evening',   sub: '5PM – 9PM' },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim())        errors.name = 'Full name is required'
  if (!form.phone.trim())       errors.phone = 'Phone number is required'
  if (!form.email.trim())       errors.email = 'Email address is required'
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.department)         errors.department = 'Please select a department'
  if (!form.date)               errors.date = 'Preferred date is required'
  if (!form.timeSlot)           errors.timeSlot = 'Please choose a time slot'
  return errors
}

const today = new Date().toISOString().split('T')[0]

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', department: '', date: '', timeSlot: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  function reset() {
    setForm({ name: '', phone: '', email: '', department: '', date: '', timeSlot: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section className="section book-section" id="book">
      <div className="container">
        <div className="book-inner">
          {/* Left info */}
          <div className="book-info">
            <p className="section-label">Book Now</p>
            <h2>Your Health, Your Schedule</h2>
            <p>Fill in the form and our team will confirm your appointment within minutes. No hidden fees, no long waits.</p>
            <div className="book-trust">
              <div className="trust-item"><div className="trust-dot" />Instant booking confirmation</div>
              <div className="trust-item"><div className="trust-dot" />Free cancellation & reschedule</div>
              <div className="trust-item"><div className="trust-dot" />Certified, verified doctors only</div>
              <div className="trust-item"><div className="trust-dot" />HIPAA-compliant data handling</div>
            </div>
          </div>

          {/* Right form */}
          <div className="book-form">
            {submitted ? (
              <div className="success-banner">
                <div className="success-icon">✅</div>
                <h3>Appointment Requested!</h3>
                <p>Your appointment request has been received! We'll confirm shortly via email or phone.</p>
                <button className="btn btn-primary" onClick={reset}>Book Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="book-name">Full Name<span className="req"> *</span></label>
                    <input
                      id="book-name"
                      type="text"
                      className={`form-control${errors.name ? ' error' : ''}`}
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                    />
                    {errors.name && <p className="form-error-msg">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="book-phone">Phone Number<span className="req"> *</span></label>
                    <input
                      id="book-phone"
                      type="tel"
                      className={`form-control${errors.phone ? ' error' : ''}`}
                      placeholder="+1 555 0100"
                      value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                    />
                    {errors.phone && <p className="form-error-msg">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="book-email">Email Address<span className="req"> *</span></label>
                    <input
                      id="book-email"
                      type="email"
                      className={`form-control${errors.email ? ' error' : ''}`}
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                    />
                    {errors.email && <p className="form-error-msg">{errors.email}</p>}
                  </div>

                  {/* Department */}
                  <div className="form-group">
                    <label htmlFor="book-dept">Department<span className="req"> *</span></label>
                    <select
                      id="book-dept"
                      className={`form-control${errors.department ? ' error' : ''}`}
                      value={form.department}
                      onChange={e => set('department', e.target.value)}
                    >
                      <option value="">Select a specialty…</option>
                      {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.department && <p className="form-error-msg">{errors.department}</p>}
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <label htmlFor="book-date">Preferred Date<span className="req"> *</span></label>
                    <input
                      id="book-date"
                      type="date"
                      className={`form-control${errors.date ? ' error' : ''}`}
                      min={today}
                      value={form.date}
                      onChange={e => set('date', e.target.value)}
                    />
                    {errors.date && <p className="form-error-msg">{errors.date}</p>}
                  </div>

                  {/* Time Slot */}
                  <div className="form-group full">
                    <label>Preferred Time<span className="req"> *</span></label>
                    <div className="time-slots">
                      {TIME_SLOTS.map(ts => (
                        <div className="time-slot" key={ts.id}>
                          <input
                            type="radio"
                            id={`ts-${ts.id}`}
                            name="timeSlot"
                            value={ts.id}
                            checked={form.timeSlot === ts.id}
                            onChange={() => set('timeSlot', ts.id)}
                          />
                          <label htmlFor={`ts-${ts.id}`}>
                            {ts.label}<br /><small>{ts.sub}</small>
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.timeSlot && <p className="form-error-msg">{errors.timeSlot}</p>}
                  </div>

                  {/* Message */}
                  <div className="form-group full">
                    <label htmlFor="book-msg">Symptoms / Message <span style={{color:'var(--text-muted)', fontWeight:400}}>(optional)</span></label>
                    <textarea
                      id="book-msg"
                      className="form-control"
                      placeholder="Briefly describe your symptoms or reason for visit…"
                      rows={3}
                      value={form.message}
                      onChange={e => set('message', e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="form-submit"
                  disabled={loading}
                  id="book-submit"
                >
                  {loading ? '⏳ Booking…' : '📅 Book My Appointment'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
