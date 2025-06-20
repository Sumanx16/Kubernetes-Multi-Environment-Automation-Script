import React from 'react';
import { Server, Cloud } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Server className="w-8 h-8" />
          <h1 className="text-4xl font-bold">Kubernetes Mastery Hub</h1>
          <Cloud className="w-8 h-8" />
        </div>
        <p className="text-center text-xl text-blue-100 max-w-3xl mx-auto">
          Your comprehensive guide to mastering Kubernetes - from local clusters to production deployments
        </p>
      </div>
    </header>
  );
};

export default Header;