import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 1.5rem',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#EFF6FF',
              border: '1px solid #DBEAFE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1E40AF',
              fontSize: '1.25rem',
              fontWeight: 800,
              fontFamily: 'monospace',
              marginBottom: '1.5rem',
            }}
          >
            &lt;/&gt;
          </div>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#111111',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
            }}
          >
            Something went wrong
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#666666',
              maxWidth: '500px',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            An unexpected error occurred while rendering this section. Please reload the page to restore normal operation.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              backgroundColor: '#111111',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
