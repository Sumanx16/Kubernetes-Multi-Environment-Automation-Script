import React from 'react';
import { ExternalLink, Play, CheckCircle } from 'lucide-react';

interface LearningCardProps {
  title: string;
  description: string;
  videoUrl: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
  icon: React.ReactNode;
}

const LearningCard: React.FC<LearningCardProps> = ({
  title,
  description,
  videoUrl,
  difficulty,
  duration,
  topics,
  icon,
}) => {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
                  {difficulty}
                </span>
                <span className="text-sm text-gray-500">{duration}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">What you'll learn:</h4>
          <div className="space-y-1">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">{topic}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Watch Tutorial</span>
          </a>
          <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <ExternalLink className="w-4 h-4" />
            <span>Docs</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;