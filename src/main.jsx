import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css'

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Application Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#00bfff] mb-4">
              Щось пішло не так
            </h1>
            <p className="text-gray-600 mb-4">
              Будь ласка, оновіть сторінку або спробуйте пізніше
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#00bfff] text-white px-6 py-2 rounded-full hover:bg-[#0099cc] transition-colors"
            >
              Оновити сторінку
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// // Performance optimization
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = await import('./mocks/browser');
//   worker.start();
// }

// App wrapper with strict mode and error boundary
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Enable hot module replacement for development
if (import.meta.hot) {
  import.meta.hot.accept();
}

// Remove loading state
const loader = document.querySelector('.loader');
if (loader) {
  loader.remove();
}

// Register service worker for production
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// Performance monitoring
if (process.env.NODE_ENV === 'production') {
  // Report Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
}