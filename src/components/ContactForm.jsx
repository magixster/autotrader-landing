import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!db) {
      setError('Contact form is not available. Please configure Firebase (see .env.example).');
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <div className="section-label mx-auto mb-5 w-fit">Contact</div>
            <h2 className="section-title text-center">Get in Touch</h2>
            <p className="section-subtitle mx-auto mt-4 text-center">
              Have questions? We're excited to hear from you.
            </p>
          </div>

          <div className="neumo-card p-8 md:p-10" style={{ background: 'var(--bg-primary)' }}>
            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="neumo-inset-deep w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'var(--bg-primary)',
                    borderRadius: '9999px',
                    color: 'var(--accent-teal)',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {error && (
                  <p className="text-red-500 text-sm text-center font-medium">{error}</p>
                )}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="neumo-input"
                    style={{ background: 'var(--bg-primary)' }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="neumo-input"
                    style={{ background: 'var(--bg-primary)' }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    className="neumo-input !resize-none"
                    style={{
                      background: 'var(--bg-primary)',
                      minHeight: 120,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="neumo-btn-primary !rounded-2xl !py-3.5 !text-base font-display font-bold w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
