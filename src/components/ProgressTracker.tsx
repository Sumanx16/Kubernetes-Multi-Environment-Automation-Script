import React, { useState } from 'react';
import { CheckCircle, Circle, Trophy, Target } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  completed: boolean;
}

const ProgressTracker: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([
    { id: '1', title: 'Setup Minikube Cluster', completed: false },
    { id: '2', title: 'Create Cluster with Kubeadm', completed: false },
    { id: '3', title: 'Deploy AKS Cluster', completed: false },
    { id: '4', title: 'Configure Dashboard & Users', completed: false },
    { id: '5', title: 'Deploy Microservices', completed: false },
    { id: '6', title: 'Configure Service Exposure', completed: false },
  ]);

  const toggleModule = (id: string) => {
    setModules(modules.map(module => 
      module.id === id ? { ...module, completed: !module.completed } : module
    ));
  };

  const completedCount = modules.filter(m => m.completed).length;
  const progressPercentage = (completedCount / modules.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <Target className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Learning Progress</h3>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-medium text-blue-600">{completedCount}/{modules.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-3">
        {modules.map((module) => (
          <div
            key={module.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            onClick={() => toggleModule(module.id)}
          >
            {module.completed ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <Circle className="w-5 h-5 text-gray-400" />
            )}
            <span className={`flex-1 ${module.completed ? 'text-green-700 line-through' : 'text-gray-700'}`}>
              {module.title}
            </span>
          </div>
        ))}
      </div>

      {completedCount === modules.length && (
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="font-medium text-green-800">Congratulations! You've completed the Kubernetes fundamentals!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;