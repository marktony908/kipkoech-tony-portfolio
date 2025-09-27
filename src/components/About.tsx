import React from 'react';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, number: '170+', label: 'Projects Completed', color: 'text-blue-600' },
    { icon: Users, number: '25+', label: 'Happy Clients', color: 'text-green-600' },
    { icon: Clock, number: '3+', label: 'Years Experience', color: 'text-purple-600' },
    { icon: TrendingUp, number: '99.9%', label: 'Uptime Record', color: 'text-orange-600' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate software engineer with expertise in building scalable applications 
            and cloud infrastructure that drives business innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-on-scroll">
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                I'm <strong className="text-slate-800">Tony Kipkoech</strong>, a dedicated Software Engineer 
                and Cloud Architect with a passion for creating robust, scalable solutions that solve 
                real-world problems. My journey in technology spans full-stack development, cloud 
                architecture, and DevOps practices.
              </p>
              
              <p>
                I specialize in modern development frameworks, cloud-native solutions, and implementing 
                efficient CI/CD pipelines that enable rapid and reliable software delivery. My approach 
                combines technical excellence with business acumen to deliver solutions that drive value.
              </p>
              
              <p>
                With a commitment to continuous learning and staying current with emerging technologies, 
                I help organizations build scalable applications, optimize cloud infrastructure, and 
                implement robust development processes that ensure long-term success.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Full-Stack Development
              </div>
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Cloud Architecture
              </div>
              <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                DevOps & CI/CD
              </div>
              <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                System Design
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3">
                        <stat.icon className="w-8 h-8 text-white/80" />
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Excellence</h4>
              <p className="text-slate-600">
                Committed to delivering high-quality solutions that exceed expectations 
                and drive meaningful business outcomes.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Collaboration</h4>
              <p className="text-slate-600">
                Believe in the power of teamwork and open communication to achieve 
                extraordinary results together.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Innovation</h4>
              <p className="text-slate-600">
                Constantly exploring new technologies and methodologies to solve 
                complex challenges in creative ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}