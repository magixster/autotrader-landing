import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section min-h-[60vh] flex items-center">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          {/* 404 in neumorphic inset */}
          <div
            className="neumo-inset-deep w-28 h-28 flex items-center justify-center mx-auto mb-8"
            style={{
              background: 'var(--bg-primary)',
              borderRadius: '9999px',
            }}
          >
            <span className="font-display font-extrabold text-5xl" style={{ color: 'var(--accent)' }}>
              404
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl mb-3" style={{ color: 'var(--text-primary)' }}>
            Page Not Found
          </h1>
          <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            to="/"
            className="neumo-btn-primary !rounded-2xl !px-6 !py-3 !text-sm font-display font-bold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
