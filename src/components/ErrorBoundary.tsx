import React from 'react';

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page or try again later.</p>
        </main>
      );
    }

    return this.props.children;
  }
}
