import React, { useState } from 'react';
import { Code, Cloud, Database, Smartphone, Wrench, Brain } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'React.js', level: 95, description: 'Advanced component architecture and state management' },
        { name: 'TypeScript', level: 90, description: 'Type-safe development and advanced patterns' },
        { name: 'Next.js', level: 85, description: 'Server-side rendering and full-stack applications' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework and responsive design' },
        { name: 'Vue.js', level: 80, description: 'Progressive framework for building user interfaces' },
        { name: 'JavaScript ES6+', level: 95, description: 'Modern JavaScript features and best practices' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 92, description: 'Server-side JavaScript and API development' },
        { name: 'Python', level: 88, description: 'Django, Flask, and data processing' },
        { name: 'PostgreSQL', level: 85, description: 'Advanced queries and database optimization' },
        { name: 'MongoDB', level: 82, description: 'NoSQL database design and aggregation' },
        { name: 'GraphQL', level: 78, description: 'API design and query optimization' },
        { name: 'Redis', level: 80, description: 'Caching strategies and session management' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'purple',
      skills: [
        { name: 'AWS', level: 90, description: 'EC2, S3, Lambda, RDS, and CloudFormation' },
        { name: 'Docker', level: 88, description: 'Containerization and multi-stage builds' },
        { name: 'Kubernetes', level: 82, description: 'Container orchestration and scaling' },
        { name: 'Terraform', level: 85, description: 'Infrastructure as Code and automation' },
        { name: 'Jenkins', level: 80, description: 'CI/CD pipelines and automated deployment' },
        { name: 'Azure', level: 75, description: 'Cloud services and enterprise solutions' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'orange',
      skills: [
        { name: 'React Native', level: 85, description: 'Cross-platform mobile applications' },
        { name: 'Flutter', level: 75, description: 'Dart-based mobile app development' },
        { name: 'iOS Development', level: 70, description: 'Swift and native iOS applications' },
        { name: 'Android Development', level: 72, description: 'Kotlin and native Android apps' },
        { name: 'Expo', level: 80, description: 'Rapid mobile app development and deployment' },
        { name: 'Firebase', level: 82, description: 'Backend services and real-time databases' }
      ]
    },
    tools: {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'indigo',
      skills: [
        { name: 'Git & GitHub', level: 95, description: 'Version control and collaboration workflows' },
        { name: 'VS Code', level: 92, description: 'Advanced IDE usage and extensions' },
        { name: 'Figma', level: 78, description: 'UI/UX design and prototyping' },
        { name: 'Postman', level: 85, description: 'API testing and documentation' },
        { name: 'Jira', level: 80, description: 'Project management and agile workflows' },
        { name: 'Linux', level: 82, description: 'System administration and shell scripting' }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'pink',
      skills: [
        { name: 'TensorFlow', level: 75, description: 'Deep learning and neural networks' },
        { name: 'Python ML', level: 80, description: 'Scikit-learn, Pandas, NumPy' },
        { name: 'OpenAI API', level: 85, description: 'GPT integration and AI applications' },
        { name: 'Data Analysis', level: 78, description: 'Statistical analysis and visualization' },
        { name: 'Computer Vision', level: 70, description: 'Image processing and recognition' },
        { name: 'NLP', level: 72, description: 'Natural language processing and understanding' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences and scalable solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
          {categories.map((category) => {
            const categoryData = skillCategories[category as keyof typeof skillCategories];
            const Icon = categoryData.icon;
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-${categoryData.color}-600 text-white shadow-lg transform scale-105`
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{categoryData.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="animate-on-scroll">
          {categories.map((category) => {
            const categoryData = skillCategories[category as keyof typeof skillCategories];
            const isActive = activeCategory === category;
            
            return (
              <div
                key={category}
                className={`transition-all duration-500 ${
                  isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute'
                }`}
                style={{ display: isActive ? 'block' : 'none' }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-12 h-12 bg-${categoryData.color}-100 rounded-full flex items-center justify-center`}>
                      <categoryData.icon className={`w-6 h-6 text-${categoryData.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{categoryData.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryData.skills.map((skill, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-800">{skill.name}</span>
                          <span className={`text-${categoryData.color}-600 font-medium`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r from-${categoryData.color}-500 to-${categoryData.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-slate-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">AWS Certified Solutions Architect</h4>
              <p className="text-slate-600 text-sm">Designing distributed systems on AWS platform</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Google Cloud Professional</h4>
              <p className="text-slate-600 text-sm">Cloud architecture and development expertise</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Machine Learning Specialization</h4>
              <p className="text-slate-600 text-sm">Deep learning and AI application development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}