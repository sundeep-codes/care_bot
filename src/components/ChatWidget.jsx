import { useState, useEffect, useRef } from 'react'

const WEBHOOK_URL = 'https://bin.codeveritus.tech/webhook-test/sundeep'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm CareBot 👋 How can I help you today?" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, typing])

  function togglePanel() {
    if (open) {
      setClosing(true)
      setTimeout(() => { setOpen(false); setClosing(false) }, 220)
    } else {
      setOpen(true)
    }
  }

  async function send() {
    const text = input.trim()
    if (!text || typing) return
    setMessages(m => [...m, { from: 'user', text }])
    setInput('')
    setTyping(true)

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })

      let botText = "I'm sorry, I couldn't understand that. Please try again."

      if (res.ok) {
        const data = await res.json()
        // Support various response shapes from n8n webhooks
        botText =
          data?.output ||
          data?.text ||
          data?.message ||
          data?.reply ||
          (typeof data === 'string' ? data : null) ||
          botText
      }

      setMessages(m => [...m, { from: 'bot', text: botText }])
    } catch {
      setMessages(m => [
        ...m,
        { from: 'bot', text: '⚠️ Could not reach CareBot right now. Please try again shortly.' },
      ])
    } finally {
      setTyping(false)
    }
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      {/* FAB button */}
      <button
        id="chat-fab"
        className="chat-fab"
        onClick={togglePanel}
        aria-label="Open chat"
      >
        {open ? '✕' : '💬'}
        {!open && <span className="chat-badge">1</span>}
      </button>

      {/* Panel */}
      {open && (
        <div className={`chat-panel${closing ? ' closing' : ''}`}>
          <div className="chat-header">
            <div className="chat-avatar">⚕</div>
            <div className="chat-header-info">
              <h4>CareBot AI</h4>
              <span>🟢 Online — replies instantly</span>
            </div>
            <button className="chat-close" onClick={togglePanel} aria-label="Close chat">✕</button>
          </div>

          <div className="chat-messages" ref={bodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                <div className="chat-msg-avatar">
                  {msg.from === 'bot' ? '⚕' : '🙂'}
                </div>
                <div className="chat-bubble">{msg.text}</div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <div className="chat-msg-avatar">⚕</div>
                <div className="chat-bubble chat-typing">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
          </div>

          <div className="chat-input-row">
            <input
              className="chat-input"
              placeholder="Type a message…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              id="chat-input-field"
              disabled={typing}
            />
            <button
              className="chat-send"
              onClick={send}
              aria-label="Send"
              id="chat-send-btn"
              disabled={typing}
            >➤</button>
          </div>
        </div>
      )}
    </>
  )
}
