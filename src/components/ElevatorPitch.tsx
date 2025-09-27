import React from 'react';
import { Quote } from 'lucide-react';

export function ElevatorPitch() {
  const highlights = [
    'Tony Kipkoech',
    'cloud technologies like AWS and Azure, full-stack development with modern frameworks, and implementing efficient DevOps practices',
    'build scalable applications, optimize cloud infrastructure, implement robust CI/CD processes, and ensure system reliability and security'
  ];

  const renderTextWithHighlights = (text: string) => {
    let result = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(regex, '<span class="highlight">$1</span>');
    });
    return result;
  };

  const pitchText = `My name is Tony Kipkoech, and I'm a Software Engineer and Cloud Engineer with expertise in building scalable applications and robust cloud infrastructure. I specialize in modern development practices, cloud-native solutions, and DevOps methodologies that drive business innovation.

I'm skilled in cloud technologies like AWS and Azure, full-stack development with modern frameworks, and implementing efficient DevOps practices. My top three strengths are problem-solving complex technical challenges, continuous learning and adaptation, and delivering high-quality solutions under pressure. What makes me stand out is my ability to bridge the gap between development and operations, creating seamless deployment pipelines and architecting resilient cloud solutions.

As a Software and Cloud Engineer, I can bring value by helping your organization build scalable applications, optimize cloud infrastructure, implement robust CI/CD processes, and ensure system reliability and security, ultimately leading to faster time-to-market and improved operational efficiency.

I am seeking an opportunity to contribute these skills in a dynamic, innovation-focused technology role, and I would love to discuss how I can support your team's strategic goals and technical excellence.

With me, you'll gain a versatile engineer ready to tackle complex challenges, drive technological excellence, and deliver solutions that scale with your business growth.`;

  return (
    <section className="animate-fade-in">
      <h2 className="text-4xl font-bold text-slate-800 mb-8 pb-4 border-b-4 border-blue-500 relative">
        My Elevator Pitch
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 -mb-1"></span>
      </h2>
      
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 p-8 md:p-12 rounded-2xl shadow-lg border-l-4 border-blue-500">
        <Quote className="absolute top-6 left-6 text-blue-300 opacity-50" size={48} />
        
        <div className="relative z-10 space-y-6 text-lg leading-relaxed text-slate-700">
          {pitchText.split('\n\n').map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ 
                __html: renderTextWithHighlights(paragraph)
              }}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .highlight {
          color: #3b82f6;
          font-weight: 600;
          background: linear-gradient(120deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}