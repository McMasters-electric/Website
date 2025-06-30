import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header with Back Button */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              to="/"
              className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 md:p-8">
            <div className="prose prose-invert max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 McMasters Electric LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalLayout;
