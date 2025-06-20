import React from 'react';
import { ExternalLink, Book, FileText } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  type: 'documentation' | 'guide' | 'reference';
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, url, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'documentation':
        return <Book className="w-5 h-5 text-blue-600" />;
      case 'guide':
        return <FileText className="w-5 h-5 text-green-600" />;
      case 'reference':
        return <ExternalLink className="w-5 h-5 text-purple-600" />;
      default:
        return <Book className="w-5 h-5 text-blue-600" />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'documentation':
        return 'bg-blue-100 text-blue-800';
      case 'guide':
        return 'bg-green-100 text-green-800';
      case 'reference':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 border border-gray-100">
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-gray-50 rounded-lg">
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-medium text-gray-900">{title}</h4>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor()}`}>
              {type}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <span>View Resource</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;