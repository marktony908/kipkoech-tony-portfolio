import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export type Section = 'about' | 'experience' | 'skills' | 'portfolio' | 'contact';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  achievements: string[];
  details: string;
  category: 'web' | 'mobile' | 'cloud' | 'ai';
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and real-time analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/marktony908',
      liveUrl: '#',
      achievements: ['10,000+ active users', 'Real-time inventory tracking', 'Secure payment processing', '99.9% uptime'],
      details: 'Built a comprehensive e-commerce platform handling high traffic with efficient caching strategies and database optimization. Implemented microservices architecture for scalability.',
      category: 'web'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Automation',
      description: 'Automated cloud infrastructure deployment using Terraform and AWS. Reduced deployment time by 70% with auto-scaling and disaster recovery mechanisms.',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'Python'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/marktony908',
      achievements: ['70% faster deployments', 'Auto-scaling implementation', 'Disaster recovery setup', '40% cost reduction'],
      details: 'Designed and implemented complete cloud infrastructure solutions using AWS services including EC2, RDS, S3, and CloudFormation with automated CI/CD pipelines.',
      category: 'cloud'
    },
    {
      id: '3',
      title: 'Mobile Task Management App',
      description: 'Cross-platform mobile application built with React Native. Features offline sync, push notifications, and collaborative task management.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/marktony908',
      achievements: ['Cross-platform compatibility', 'Offline functionality', 'Real-time collaboration', '5-star app store rating'],
      details: 'Developed a comprehensive task management solution with real-time synchronization, team collaboration features, and intuitive user interface.',
      category: 'mobile'
    },
    {
      id: '4',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning dashboard for business intelligence with predictive analytics, data visualization, and automated reporting capabilities.',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL', 'FastAPI'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/marktony908',
      achievements: ['ML model accuracy 95%+', 'Real-time data processing', 'Interactive visualizations', 'Automated insights'],
      details: 'Built an intelligent analytics platform using machine learning algorithms to provide predictive insights and automated business intelligence reporting.',
      category: 'ai'
    }
  ]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleVideoUpload = (projectId: string, videoFile: File) => {
    const videoUrl = URL.createObjectURL(videoFile);
    setProjects(prev => prev.map(project => 
      project.id === projectId 
        ? { ...project, videoUrl }
        : project
    ));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23e2e8f0%22 fill-opacity%3D%220.4%22%3E%3Ccircle cx%3D%227%22 cy%3D%227%22 r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative">
        <div className={activeSection === 'about' ? 'block' : 'hidden'}>
          <About />
        </div>
        <div className={activeSection === 'experience' ? 'block' : 'hidden'}>
          <Experience />
        </div>
        <div className={activeSection === 'skills' ? 'block' : 'hidden'}>
          <Skills />
        </div>
        <div className={activeSection === 'portfolio' ? 'block' : 'hidden'}>
          <Portfolio 
            projects={projects} 
            onVideoUpload={handleVideoUpload}
            setProjects={setProjects}
          />
        </div>
        <div className={activeSection === 'contact' ? 'block' : 'hidden'}>
          <Contact />
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;