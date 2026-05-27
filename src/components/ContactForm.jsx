import { useState } from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const SUBJECTS = [
  'General Inquiry',
  'Support Request',
  'Partnership Opportunity',
  'Enterprise Sales',
  'Bug Report',
  'Feature Request',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useAnimateOnScroll({ threshold: 0.1 });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const inputBase =
    'w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300 box-border font-sans';
  const labelBase = 'block text-xs font-semibold mb-2';

  const sectionStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
    transition: 'all 0.5s ease',
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
  };

  const inputFocusStyle = {
    borderColor: 'var(--accent-primary)',
    boxShadow: '0 0 0 3px rgba(94, 210, 156, 0.1)',
    background: 'rgba(255, 255, 255, 0.05)',
  };

  const resetInputStyle = (e) => {
    e.target.style.borderColor = 'var(--border-color)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'rgba(255, 255, 255, 0.03)';
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div
        className="glow pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(94,210,156,0.06), transparent)',
          top: '30%',
          left: -200,
          filter: 'blur(80px)',
        }}
      />

      <div className="container" ref={ref}>
        <div className="text-center mb-14 md:mb-16">
          <span className="section-label" style={sectionStyle}>Contact</span>
          <h2 className="section-title" style={{ ...sectionStyle, transitionDelay: '0.1s' }}>
            Get in Touch
          </h2>
          <p
            className="section-subtitle mx-auto"
            style={{ ...sectionStyle, transitionDelay: '0.2s' }}
          >
            Have a question about setup, pricing, or custom integrations?
            We&rsquo;re here to help.
          </p>
        </div>

        <div
          className="max-w-[600px] mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.3s',
          }}
        >
          <div
            className="p-8 md:p-10 rounded-2xl relative overflow-hidden"
            style={{ border: '1px solid var(--border-accent)' }}
          >
            {/* Decorative glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: -80,
                right: -80,
                width: 200,
                height: 200,
                background: 'radial-gradient(circle, rgba(94,210,156,0.06), transparent)',
                filter: 'blur(40px)',
              }}
            />

            {submitted ? (
              <div className="text-center py-10 relative">
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-5"
                  style={{ background: 'rgba(94, 210, 156, 0.1)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#5ed29c" strokeWidth="2" />
                    <path d="M8 12l3 3 5-5" stroke="#5ed29c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. We&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative">
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className={labelBase} style={{ color: 'var(--text-secondary)' }}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputBase}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={resetInputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelBase} style={{ color: 'var(--text-secondary)' }}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputBase}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={resetInputStyle}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className={labelBase} style={{ color: 'var(--text-secondary)' }}>
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputBase}
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      cursor: 'pointer',
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      backgroundSize: '18px',
                    }}
                    onFocus={(e) => {
                      const bgImg = e.target.style.backgroundImage;
                      Object.assign(e.target.style, inputFocusStyle);
                      e.target.style.backgroundImage = bgImg;
                    }}
                    onBlur={resetInputStyle}
                  >
                    <option value="" disabled>Select a subject</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className={labelBase} style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you need help with..."
                    value={formData.message}
                    onChange={handleChange}
                    className={inputBase}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: 120,
                      lineHeight: 1.6,
                    }}
                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={resetInputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-full justify-center py-4 text-base rounded-full font-bold"
                  style={{
                    background: 'var(--accent-primary)',
                    color: '#070b0a',
                    boxShadow: '0 4px 20px rgba(94, 210, 156, 0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(94, 210, 156, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(94, 210, 156, 0.25)';
                  }}
                >
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>

                <p className="text-center text-xs m-0" style={{ color: 'var(--text-muted)' }}>
                  Prefer GitHub?{' '}
                  <a
                    href="https://github.com/sachinn/autotrader-landing/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    Open an issue
                  </a>
                  {' '}for bug reports and feature requests.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
