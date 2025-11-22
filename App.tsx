import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GeminiChat } from './components/GeminiChat';
import { SKILLS, EXPERIENCE, SERVICES, PROJECTS, BLOG_POSTS, SOCIAL_LINKS, METRICS } from './constants';

function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-green-100">
      <Header />
      
      <main>
        <Hero />

        {/* Key Metrics Section - High Impact for Finance */}
        <section className="bg-primary text-white py-10 border-y border-slate-800 relative overflow-hidden">
           <div className="max-w-6xl mx-auto px-4 relative z-10">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700/50">
               {METRICS.map((metric, idx) => (
                 <div key={idx} className="p-2">
                   <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{metric.value}</div>
                   <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-medium">{metric.label}</div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Technical Expertise</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                My core competencies revolve around accurate financial reporting, taxation compliance, and efficient audit execution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-200 hover:shadow-lg transition-all group">
                  <h3 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-slate-200 group-hover:border-accent group-hover:text-accent transition-colors">
                    {skill.name}
                  </h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Services Section */}
        <section id="experience" className="py-20 bg-slate-50 relative">
          <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
            
            {/* Left: Experience Timeline */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-8">Experience</h2>
              <div className="space-y-8">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full ring-4 ring-slate-50"></div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded uppercase tracking-wider">
                          {exp.duration}
                        </span>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="text-sm text-secondary leading-relaxed">• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Services */}
            <div className="lg:w-1/2" id="services">
              <h2 className="text-3xl font-bold text-primary mb-8">Services <span className="text-base font-normal text-secondary ml-2">(Learning Exposure)</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((service, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:translate-y-[-2px] transition-transform">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h4 className="font-bold text-primary mb-2">{service.title}</h4>
                    <p className="text-xs text-secondary leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-primary text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-700 pb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Key Projects</h2>
                <p className="text-slate-400">Initiatives that drove efficiency and accuracy.</p>
              </div>
              <div className="hidden md:block text-slate-500 text-sm">Selected Works</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 hover:border-accent">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-900 text-emerald-300 text-xs rounded border border-slate-600">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Professional Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, idx) => (
                <a key={idx} href={post.link} className="group block">
                  <div className="h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-3">
                      {post.title}
                    </h3>
                    <p className="text-secondary text-sm">{post.excerpt}</p>
                    <div className="mt-4 text-accent text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read Article <span>→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Get in Touch</h2>
                <p className="text-secondary">Feel free to reach out for collaborations or audit inquiries.</p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" id="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <input type="text" id="subject" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"></textarea>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-slate-500">
                    Or email: <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-accent hover:underline">{SOCIAL_LINKS.email}</a>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus !== 'idle'}
                    className={`px-8 py-3 rounded-lg font-semibold text-white transition-all ${
                      formStatus === 'success' ? 'bg-green-500' : 'bg-primary hover:bg-slate-800'
                    }`}
                  >
                    {formStatus === 'idle' && 'Send Message'}
                    {formStatus === 'submitting' && 'Sending...'}
                    {formStatus === 'success' && 'Message Sent!'}
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center mt-12 text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Ankesh Kumar. All rights reserved.
            </div>
          </div>
        </section>
      </main>

      <GeminiChat />
    </div>
  );
}

export default App;