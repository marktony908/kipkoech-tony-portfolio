import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Nairobi, Kenya',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of cloud-native applications and microservices architecture. Mentoring junior developers and driving technical decisions for scalable solutions.',
      achievements: [
        'Architected and implemented microservices platform serving 100K+ users',
        'Reduced system latency by 40% through performance optimization',
        'Led team of 5 developers in agile development practices',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      location: 'Nairobi, Kenya',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications with React and TypeScript',
        'Integrated third-party APIs and payment gateways',
        'Optimized database queries improving performance by 35%',
        'Implemented automated testing increasing code coverage to 90%'
      ],
      technologies: ['React', 'TypeScript', 'Python', 'Django', 'MySQL', 'Redis']
    },
    {
      title: 'Junior Software Developer',
      company: 'StartupHub Kenya',
      location: 'Nairobi, Kenya',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Started my professional journey developing web applications and learning industry best practices. Contributed to various projects and gained experience in full-stack development.',
      achievements: [
        'Developed RESTful APIs using Node.js and Express',
        'Created responsive user interfaces with HTML, CSS, and JavaScript',
        'Participated in code reviews and agile development processes',
        'Contributed to open-source projects and internal tools'
      ],
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My journey through various roles has shaped me into a versatile engineer 
            capable of handling complex challenges and delivering exceptional results.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-on-scroll">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}