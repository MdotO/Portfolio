export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  image: string
  gallery?: string[]
  techStack: string[]
  techCategories: {
    [category: string]: string[]
  }
  duration: string
  liveDemo?: string
  githubUrl: string
  category: 'web-app' | 'ml-project' | 'research'
  features: string[]
  challenges: string[]
  solutions: string[]
  highlights: string[]
  contentBlocks?: {
    title: string
    content: string
    type: 'text' | 'code' | 'image' | 'video'
    data?: any
  }[]
  metrics?: {
    [key: string]: string | number
  }
  teamSize?: number
  role?: string
  tools?: string[]
  methodologies?: string[]
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Machine Learning Model Dashboard',
    subtitle: 'Interactive dashboard for ML model monitoring and visualization',
    description: 'A comprehensive web application for monitoring machine learning models in production, featuring real-time metrics, model performance visualization, and alert systems.',
    longDescription: `This project represents a comprehensive solution for monitoring machine learning models in production environments. The dashboard provides real-time insights into model performance, data drift detection, and automated alerting systems.

The application was built with scalability in mind, supporting multiple model types and deployment environments. It features an intuitive user interface that allows data scientists and ML engineers to quickly identify and address performance issues before they impact business outcomes.

Key technical achievements include implementing real-time data streaming, developing custom visualization components, and creating a robust API architecture that can handle high-throughput monitoring data.`,
    image: '/images/project-1.jpg',
    gallery: [
      '/images/project-1-dashboard.jpg',
      '/images/project-1-metrics.jpg',
      '/images/project-1-alerts.jpg'
    ],
    techStack: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    techCategories: {
      'Frontend': ['React', 'TypeScript', 'Chakra UI', 'D3.js', 'Framer Motion'],
      'Backend': ['Python', 'FastAPI', 'Celery', 'Redis'],
      'ML/AI': ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      'Database': ['PostgreSQL', 'Redis', 'InfluxDB'],
      'DevOps': ['Docker', 'Kubernetes', 'AWS', 'Prometheus']
    },
    duration: '3 months',
    liveDemo: 'https://demo-ml-dashboard.com',
    githubUrl: 'https://github.com/username/ml-dashboard',
    category: 'web-app',
    features: [
      'Real-time model performance monitoring',
      'Interactive data visualizations and charts',
      'Automated alert system for model drift',
      'Multi-model support and comparison',
      'Custom dashboard creation',
      'Data export and reporting capabilities',
      'User authentication and role-based access',
      'API integration with existing ML pipelines'
    ],
    challenges: [
      'Handling high-frequency real-time data streams',
      'Creating responsive visualizations for large datasets',
      'Implementing efficient data storage and retrieval',
      'Ensuring system reliability and uptime',
      'Managing multiple model types and formats',
      'Designing intuitive UX for complex data'
    ],
    solutions: [
      'Implemented WebSocket connections for real-time updates',
      'Used D3.js for custom, performant visualizations',
      'Designed hybrid storage with PostgreSQL and InfluxDB',
      'Built comprehensive monitoring and alerting system',
      'Created flexible model adapter pattern',
      'Conducted extensive user research and iterative design'
    ],
    highlights: [
      'Reduced model monitoring time by 80%',
      'Achieved 99.9% system uptime',
      'Supported 50+ concurrent users',
      'Processed 1M+ data points per day',
      'Deployed across 3 different environments'
    ],
    metrics: {
      'Performance Improvement': '80%',
      'System Uptime': '99.9%',
      'Data Points/Day': '1M+',
      'Concurrent Users': '50+',
      'Response Time': '<200ms'
    },
    teamSize: 4,
    role: 'Full Stack Developer & ML Engineer',
    tools: ['Jira', 'Git', 'Docker', 'AWS', 'Grafana'],
    methodologies: ['Agile', 'Scrum', 'CI/CD']
  },
  {
    id: 'project-2',
    title: 'Natural Language Processing Research',
    subtitle: 'Advanced text analysis and sentiment classification',
    description: 'Research project focused on improving sentiment analysis accuracy using transformer-based models and novel preprocessing techniques.',
    longDescription: `This research project focused on advancing the state-of-the-art in sentiment analysis through innovative approaches to transformer-based models and text preprocessing.

The research explored novel techniques for improving model performance on challenging datasets, including multi-language support and domain adaptation strategies. The project resulted in significant improvements in accuracy and robustness across various text analysis tasks.

Key contributions include developing custom attention mechanisms, creating domain-specific preprocessing pipelines, and establishing new benchmarks for sentiment analysis in specialized domains.`,
    image: '/images/project-2.jpg',
    gallery: [
      '/images/project-2-model.jpg',
      '/images/project-2-results.jpg',
      '/images/project-2-comparison.jpg'
    ],
    techStack: ['Python', 'PyTorch', 'Transformers', 'NLTK', 'Scikit-learn'],
    techCategories: {
      'Deep Learning': ['PyTorch', 'Transformers', 'BERT', 'RoBERTa'],
      'NLP': ['NLTK', 'spaCy', 'Hugging Face', 'Word2Vec'],
      'Data Processing': ['Pandas', 'NumPy', 'Scikit-learn'],
      'Visualization': ['Matplotlib', 'Seaborn', 'Plotly'],
      'Research Tools': ['Jupyter', 'Weights & Biases', 'TensorBoard']
    },
    duration: '6 months',
    githubUrl: 'https://github.com/username/nlp-research',
    category: 'research',
    features: [
      'Custom transformer architecture for sentiment analysis',
      'Multi-language sentiment classification',
      'Domain adaptation techniques',
      'Novel preprocessing pipelines',
      'Comprehensive evaluation framework',
      'Reproducible research methodology',
      'Open-source model releases',
      'Detailed ablation studies'
    ],
    challenges: [
      'Improving accuracy on challenging datasets',
      'Handling multi-language text processing',
      'Domain adaptation for specialized texts',
      'Managing computational resources efficiently',
      'Ensuring reproducibility of results',
      'Balancing model complexity and performance'
    ],
    solutions: [
      'Developed custom attention mechanisms',
      'Implemented advanced preprocessing techniques',
      'Created domain-specific adaptation strategies',
      'Optimized training pipeline for efficiency',
      'Established comprehensive evaluation protocols',
      'Used model compression techniques'
    ],
    highlights: [
      'Achieved 94.2% accuracy on benchmark datasets',
      'Published research paper at top-tier conference',
      'Open-sourced models with 500+ downloads',
      'Improved SOTA by 2.3% on challenging dataset',
      'Supported 5+ languages'
    ],
    metrics: {
      'Accuracy': '94.2%',
      'Improvement over SOTA': '2.3%',
      'Languages Supported': '5+',
      'Model Downloads': '500+',
      'Training Time': 'Reduced by 40%'
    },
    teamSize: 2,
    role: 'Lead Researcher',
    tools: ['Jupyter', 'Weights & Biases', 'Slurm', 'Docker'],
    methodologies: ['Research Methodology', 'A/B Testing', 'Statistical Analysis']
  },
  {
    id: 'project-3',
    title: 'Computer Vision Application',
    subtitle: 'Real-time object detection and classification system',
    description: 'A computer vision application that performs real-time object detection using YOLO architecture with custom training on domain-specific datasets.',
    longDescription: `This computer vision application demonstrates advanced object detection capabilities using the YOLO architecture, customized for specific domain requirements. The system provides real-time detection and classification with high accuracy and low latency.

The project involved extensive data collection, model training, and optimization for deployment in production environments. Key achievements include achieving real-time performance while maintaining high accuracy, and successfully deploying the system across multiple hardware configurations.

The application serves as a foundation for various computer vision use cases, from security monitoring to industrial quality control, demonstrating the versatility and robustness of modern deep learning approaches.`,
    image: '/images/project-3.jpg',
    gallery: [
      '/images/project-3-detection.jpg',
      '/images/project-3-training.jpg',
      '/images/project-3-deployment.jpg'
    ],
    techStack: ['Python', 'OpenCV', 'YOLO', 'TensorFlow', 'Flask'],
    techCategories: {
      'Computer Vision': ['OpenCV', 'YOLO', 'TensorFlow', 'PyTorch'],
      'Deep Learning': ['TensorFlow', 'Keras', 'CUDA', 'cuDNN'],
      'Web Framework': ['Flask', 'FastAPI', 'WebSocket'],
      'Deployment': ['Docker', 'NVIDIA Docker', 'Kubernetes'],
      'Data Processing': ['Pandas', 'NumPy', 'Albumentations']
    },
    duration: '4 months',
    liveDemo: 'https://cv-demo-app.com',
    githubUrl: 'https://github.com/username/cv-app',
    category: 'ml-project',
    features: [
      'Real-time object detection and classification',
      'Custom YOLO model training pipeline',
      'Multi-object tracking capabilities',
      'Web-based video streaming interface',
      'RESTful API for integration',
      'Model versioning and A/B testing',
      'Performance monitoring dashboard',
      'Mobile-optimized deployment'
    ],
    challenges: [
      'Achieving real-time performance on edge devices',
      'Training on limited domain-specific data',
      'Optimizing model for deployment constraints',
      'Handling varying lighting conditions',
      'Ensuring consistent performance across devices',
      'Managing model updates and versioning'
    ],
    solutions: [
      'Implemented model quantization and optimization',
      'Used data augmentation and transfer learning',
      'Created adaptive preprocessing pipeline',
      'Developed robust evaluation framework',
      'Built comprehensive testing suite',
      'Implemented CI/CD for model deployment'
    ],
    highlights: [
      'Achieved 30 FPS on edge devices',
      '95.8% mAP on custom dataset',
      'Deployed across 10+ different devices',
      'Reduced model size by 60%',
      'Supported 20+ object classes'
    ],
    metrics: {
      'FPS': '30',
      'mAP': '95.8%',
      'Model Size Reduction': '60%',
      'Object Classes': '20+',
      'Deployment Devices': '10+'
    },
    teamSize: 3,
    role: 'Computer Vision Engineer',
    tools: ['Docker', 'NVIDIA Docker', 'TensorBoard', 'LabelImg'],
    methodologies: ['Agile', 'MLOps', 'Continuous Integration']
  }
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getNextProject = (currentId: string): Project | undefined => {
  const currentIndex = projects.findIndex(project => project.id === currentId)
  if (currentIndex === -1 || currentIndex === projects.length - 1) return undefined
  return projects[currentIndex + 1]
}

export const getPreviousProject = (currentId: string): Project | undefined => {
  const currentIndex = projects.findIndex(project => project.id === currentId)
  if (currentIndex <= 0) return undefined
  return projects[currentIndex - 1]
} 