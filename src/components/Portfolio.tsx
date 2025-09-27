import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { VideoUpload } from './VideoUpload';
import { Filter } from 'lucide-react';
import type { Project } from '../App';

interface PortfolioProps {
  projects: Project[];
  onVideoUpload: (projectId: string, videoFile: File) => void;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export function Portfolio({ projects, onVideoUpload, setProjects }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showVideoUpload, setShowVideoUpload] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'cloud' | 'ai'>('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'cloud', label: 'Cloud Solutions', count: projects.filter(p => p.category === 'cloud').length },
    { id: 'ai', label: 'AI/ML Projects', count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleAddProject = (newProject: Omit<Project, 'id'>) => {
    const project: Project = {
      ...newProject,
      id: Date.now().toString()
    };
    setProjects(prev => [...prev, project]);
  };

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning web applications, mobile apps, 
            cloud solutions, and AI-powered projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          <div className="flex items-center gap-2 text-slate-600 mr-4">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id as any)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Add Project Button */}
        <div className="text-center mb-12 animate-on-scroll">
          <button
            onClick={() => setShowVideoUpload('new')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Add New Project
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard
                project={project}
                onViewDetails={setSelectedProject}
                onUploadVideo={() => setShowVideoUpload(project.id)}
                hasVideo={!!project.videoUrl}
              />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-on-scroll">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">No projects found</h3>
            <p className="text-slate-600">Try selecting a different category or add a new project.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Interested in My Work?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              These projects represent just a fraction of my experience. I'm always working on 
              new and exciting challenges. Let's discuss how I can help with your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                View All Projects
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {showVideoUpload && (
        <VideoUpload
          projectId={showVideoUpload}
          onUpload={(projectId, file) => {
            if (projectId === 'new') {
              const title = prompt('Enter project title:');
              const description = prompt('Enter project description:');
              const category = prompt('Enter project category (web/mobile/cloud/ai):') as 'web' | 'mobile' | 'cloud' | 'ai';
              if (title && description && category) {
                const newProject = {
                  title,
                  description,
                  technologies: ['React', 'TypeScript'],
                  image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
                  achievements: ['Video demonstration included'],
                  details: description,
                  category: category || 'web',
                  videoUrl: URL.createObjectURL(file)
                };
                handleAddProject(newProject);
              }
            } else {
              onVideoUpload(projectId, file);
            }
          }}
          onClose={() => setShowVideoUpload(null)}
        />
      )}
    </section>
  );
}