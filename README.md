# Kubernetes Cluster & Microservice Deployment Project

This project demonstrates the end-to-end process of creating, configuring, and deploying Kubernetes clusters and microservices on multiple platforms including Minikube, kubeadm, and Azure Kubernetes Service (AKS). It also covers exposing services with different service types and accessing them publicly.

🚀 **Live Demo:** [https://jolly-longma-e355a8.netlify.app/](https://jolly-longma-e355a8.netlify.app/)

---

## 📜 Table of Contents
- [📖 Overview](#-overview)
- [⚙️ Features](#️-features)
- [🛠️ Tools & Technologies](#️-tools--technologies)
- [🏁 Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [💡 Learning Resources](#-learning-resources)
- [🤝 Contributing](#-contributing)
- [🧑‍💻 Author](#-author)
- [📜 License](#-license)

---

## 📖 Overview

This project contains:
- Kubernetes cluster creation using Minikube
- Kubernetes cluster setup using kubeadm
- Azure Kubernetes Service (AKS) cluster deployment and dashboard access
- Role-based access control (RBAC) setup for multiple users in AKS
- Microservice application deployment and exposure via public internet
- Service types (NodePort, ClusterIP, LoadBalancer) demonstration

---

## ⚙️ Features
✅ Multi-cluster setup with Minikube and kubeadm  
✅ AKS deployment via Azure Portal  
✅ Secure access with RBAC roles for different user types  
✅ Microservice deployment on AKS  
✅ Scalable service exposure with LoadBalancer, NodePort, and ClusterIP  
✅ Complete documentation and demo hosted on Netlify

---

## 🛠️ Tools & Technologies
- [Kubernetes](https://kubernetes.io/) (Minikube, kubeadm, AKS)
- Azure Kubernetes Service (AKS)
- YAML manifest files
- Role-Based Access Control (RBAC)
- Azure Portal
- Microservice Application (sample web app)
- [Netlify](https://www.netlify.com/) for demo hosting

---

## 🏁 Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
- Docker
- Kubernetes CLI (`kubectl`)
- Minikube (for local Kubernetes cluster)
- Azure CLI (for AKS deployment)

### Installation Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
```
2. Follow the instructions in the docs/ directory to set up clusters.

3. Deploy microservices using provided YAML manifests in manifests/.

4. Test access to your application locally or via public LoadBalancer IP.
```

├── manifests/           # Kubernetes manifests for deployments and services

├── docs/                # Instructions for setup and configuration

├── scripts/             # Optional automation scripts

├── screenshots/         # Screenshots of dashboard, RBAC setup, etc.

├── README.md            # Project README

## 💡 Learning Resources
Here are some videos and official docs that helped:
```
Minikube Kubernetes setup

Kubeadm Kubernetes setup

AKS deployment & RBAC setup

Microservice deployment on AKS

Service exposure types

Kubernetes Documentation
```

## 🤝 Contributing
Contributions are welcome!
Please fork this repository, make your changes, and submit a pull request.

## 🧑‍💻 Author
Suman Kumar —
Web Developer | Cloud Enthusiast
[GitHub](https://github.com/Sumanx16) | [LinkedIn](https://www.linkedin.com/in/suman-kumar16/)


## 📜 License
This project is licensed under the MIT License — see the LICENSE file for details.


---

💡 Let me know if you’d also like to add setup commands or specific YAML file examples directly into this file! Would you also like me to help craft a license file?
