import React from 'react';
import { Cloud, Code, Settings } from 'lucide-react';

export function SkillsGrid() {
  const skillCategories = [
    {
      title: 'Cloud Technologies',
      icon: Cloud,
      skills: [
        'Amazon Web Services (AWS)',
        'Microsoft Azure',
        'Docker & Kubernetes',
        'Serverless Architecture',
        'Infrastructure as Code (Terraform)',
        'Cloud Security & Monitoring'
      ]
    },
    {
      title: 'Software Development',
      icon: Code,
      skills: [
        'Python, JavaScript, Java',
        'React.js, Node.js',
        'RESTful APIs & GraphQL',
        'Database Design (SQL/NoSQL)',
        'Microservices Architecture',
        'Test-Driven Development'
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: [
        'CI/CD Pipelines (Jenkins, GitLab)',
        'Git & Version Control',
        'Monitoring & Logging (ELK Stack)',
        'Agile/Scrum Methodologies',
        'Linux System Administration',
        'Security Best Practices'
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="animate-on-scroll bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-blue-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <category.icon className="text-blue-500" size={32} />
            <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
          </div>
          
          <ul className="space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <li
                key={skillIndex}
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="text-green-500 font-bold">✓</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}