const steps = [
  {
    icon: '💬',
    num: 'Step 01',
    title: 'Chat with Forge',
    desc: 'Describe your symptoms or health needs to our AI assistant — no forms, just conversation.',
  },
  {
    icon: '📅',
    num: 'Step 02',
    title: 'Pick a Slot',
    desc: 'Choose the right doctor, specialty, date, and preferred time that works for you.',
  },
  {
    icon: '✅',
    num: 'Step 03',
    title: 'Get Confirmed',
    desc: 'Receive an instant booking confirmation — no waiting on hold, no callbacks.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Simple Process</p>
          <h2 className="section-title">How Forge Assistant Works</h2>
          <p className="section-sub">Three simple steps from symptoms to confirmed appointment.</p>
        </div>
        <div className="hiw-steps">
          {steps.map((step, i) => (
            <>
              <div className="hiw-step" key={step.num}>
                <div className="hiw-icon">{step.icon}</div>
                <p className="hiw-step-num">{step.num}</p>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="hiw-connector" key={`conn-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
