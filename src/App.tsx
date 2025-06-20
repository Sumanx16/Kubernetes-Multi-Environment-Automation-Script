import React from 'react';
import { Server, Cloud, Settings, Network, Shield, Database } from 'lucide-react';
import Header from './components/Header';
import LearningCard from './components/LearningCard';
import ProgressTracker from './components/ProgressTracker';
import ResourceCard from './components/ResourceCard';
import CommandReference from './components/CommandReference';

function App() {
  const learningModules = [
    {
      title: 'Create Kubernetes Cluster with Minikube',
      description: 'Learn to set up a local Kubernetes cluster using Minikube. Perfect for development and testing environments.',
      videoUrl: 'https://www.youtube.com/watch?v=c4nTKMU6fBU',
      difficulty: 'Beginner' as const,
      duration: '15 min',
      topics: [
        'Install and configure Minikube',
        'Start your first cluster',
        'Access the Kubernetes dashboard',
        'Deploy sample applications'
      ],
      icon: <Server className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Create Kubernetes Cluster with Kubeadm',
      description: 'Build production-ready clusters using kubeadm. Learn the fundamentals of cluster bootstrapping.',
      videoUrl: 'https://www.youtube.com/watch?v=gyjFNkk3QxY',
      difficulty: 'Intermediate' as const,
      duration: '25 min',
      topics: [
        'Initialize cluster with kubeadm',
        'Configure networking',
        'Join worker nodes',
        'Set up cluster security'
      ],
      icon: <Settings className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Deploy AKS Cluster via Azure Portal',
      description: 'Master Azure Kubernetes Service deployment, dashboard access, and multi-user role configuration.',
      videoUrl: 'https://www.youtube.com/watch?v=XEdwGvS2AwA',
      difficulty: 'Intermediate' as const,
      duration: '20 min',
      topics: [
        'Create AKS cluster in Azure Portal',
        'Configure authentication',
        'Set up user roles and permissions',
        'Access monitoring dashboard'
      ],
      icon: <Cloud className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Deploy Microservices on AKS',
      description: 'Learn to deploy and manage microservice applications on AKS with public internet access.',
      videoUrl: 'https://www.youtube.com/watch?v=JDoRXJNr4es',
      difficulty: 'Advanced' as const,
      duration: '30 min',
      topics: [
        'Design microservice architecture',
        'Deploy multi-container applications',
        'Configure ingress controllers',
        'Implement service mesh'
      ],
      icon: <Database className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Service Exposure Methods',
      description: 'Master different ways to expose services: NodePort, ClusterIP, and LoadBalancer configurations.',
      videoUrl: 'https://www.youtube.com/watch?v=uCh3iym4HZ8',
      difficulty: 'Advanced' as const,
      duration: '35 min',
      topics: [
        'Configure NodePort services',
        'Set up ClusterIP for internal communication',
        'Deploy LoadBalancer for external access',
        'Implement ingress routing'
      ],
      icon: <Network className="w-6 h-6 text-blue-600" />
    }
  ];

  const additionalResources = [
    {
      title: 'Official Kubernetes Documentation',
      description: 'Comprehensive documentation covering all aspects of Kubernetes',
      url: 'https://kubernetes.io/docs/home/',
      type: 'documentation' as const
    },
    {
      title: 'Azure Kubernetes Service (AKS) Documentation',
      description: 'Complete guide to deploying and managing AKS clusters',
      url: 'https://docs.microsoft.com/en-us/azure/aks/',
      type: 'documentation' as const
    },
    {
      title: 'Kubernetes Best Practices',
      description: 'Production-ready patterns and practices for Kubernetes deployments',
      url: 'https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/',
      type: 'guide' as const
    },
    {
      title: 'kubectl Cheat Sheet',
      description: 'Quick reference for common kubectl commands',
      url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/',
      type: 'reference' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Learning Progress Section */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Shield className="w-8 h-8 text-blue-600" />
                <span>Learning Modules</span>
              </h2>
              <div className="grid gap-6">
                {learningModules.map((module, index) => (
                  <LearningCard key={index} {...module} />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <ProgressTracker />
              <CommandReference />
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </section>

        {/* Learning Path Summary */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Kubernetes Learning Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Development</h3>
              <p className="text-gray-600">Start with Minikube to learn Kubernetes fundamentals in a local environment.</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Cloud className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Deployment</h3>
              <p className="text-gray-600">Progress to AKS for managed Kubernetes in the cloud with enterprise features.</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Network className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Production Ready</h3>
              <p className="text-gray-600">Master service exposure, security, and microservice architecture patterns.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Built for Kubernetes enthusiasts. Start your container orchestration journey today.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;