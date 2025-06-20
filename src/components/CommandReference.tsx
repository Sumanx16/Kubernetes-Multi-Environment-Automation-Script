import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

interface Command {
  title: string;
  description: string;
  command: string;
  category: string;
}

const CommandReference: React.FC = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const commands: Command[] = [
    {
      title: 'Start Minikube',
      description: 'Initialize a local Kubernetes cluster',
      command: 'minikube start --driver=docker',
      category: 'Minikube'
    },
    {
      title: 'Check Cluster Status',
      description: 'Verify your cluster is running',
      command: 'kubectl cluster-info',
      category: 'General'
    },
    {
      title: 'Enable Dashboard',
      description: 'Access the Kubernetes dashboard',
      command: 'minikube dashboard',
      category: 'Minikube'
    },
    {
      title: 'Deploy Application',
      description: 'Deploy a sample application',
      command: 'kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4',
      category: 'Deployment'
    },
    {
      title: 'Expose Service',
      description: 'Expose deployment as a service',
      command: 'kubectl expose deployment hello-minikube --type=NodePort --port=8080',
      category: 'Services'
    },
    {
      title: 'Get Pods',
      description: 'List all pods in the cluster',
      command: 'kubectl get pods',
      category: 'General'
    },
    {
      title: 'AKS Get Credentials',
      description: 'Configure kubectl for AKS cluster',
      command: 'az aks get-credentials --resource-group myResourceGroup --name myAKSCluster',
      category: 'AKS'
    },
    {
      title: 'Scale Deployment',
      description: 'Scale your deployment to multiple replicas',
      command: 'kubectl scale deployment hello-minikube --replicas=3',
      category: 'Scaling'
    }
  ];

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  const categories = [...new Set(commands.map(cmd => cmd.category))];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <Terminal className="w-6 h-6 text-green-600" />
        <h3 className="text-xl font-semibold text-gray-900">Command Reference</h3>
      </div>

      <div className="space-y-6">
        {categories.map(category => (
          <div key={category}>
            <h4 className="text-lg font-medium text-gray-800 mb-3 border-b border-gray-200 pb-2">
              {category}
            </h4>
            <div className="space-y-3">
              {commands.filter(cmd => cmd.category === category).map((cmd, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-medium text-gray-900">{cmd.title}</h5>
                      <p className="text-sm text-gray-600">{cmd.description}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(cmd.command)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                      title="Copy command"
                    >
                      {copiedCommand === cmd.command ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-3 rounded-md font-mono text-sm overflow-x-auto">
                    {cmd.command}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandReference;