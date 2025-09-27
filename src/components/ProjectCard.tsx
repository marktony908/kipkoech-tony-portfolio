import React from 'react';
import { ExternalLink, Upload, Play, Github, Eye } from 'lucide-react';
import type { Project } from '../App';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  onUploadVideo: () => void;
  hasVideo: boolean;
}

export function ProjectCard({ project, onViewDetails, onUploadVideo, hasVideo }: ProjectCardProps) {
  const categoryColors = {
    web: 'bg-blue-100 text-blue-800',
    mobile: 'bg-green-100 text-green-800',
    cloud: 'bg-purple-100 text-purple-800',
    ai: 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[project.category]}`}>
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Video Badge */}
        {hasVideo && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Play size={12} />
            Video
          </div>
        )}

        {/* Overlay with Links */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              title="View Code"
            >
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Key Achievement */}
        <div className="mb-6">
          <div className="flex items-start gap-2 text-sm text-slate-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{project.achievements[0]}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Eye size={16} className="group-hover:scale-110 transition-transform duration-200" />
            View Details
          </button>
          
          <button
            onClick={onUploadVideo}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105"
            title="Upload video"
          >
            <Upload size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}