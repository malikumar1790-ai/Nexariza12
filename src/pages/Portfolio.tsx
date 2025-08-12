import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Award, TrendingUp, Users, Zap } from 'lucide-react';
import { projects } from '../data/teamData';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-chatbots', name: 'AI Chatbots' },
    { id: 'computer-vision', name: 'Computer Vision' },
    { id: 'healthcare', name: 'Healthcare AI' },
    { id: 'voice-ai', name: 'Voice AI' },
    { id: 'analytics', name: 'Analytics' }
  ];

  const achievements = [
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: TrendingUp, number: '99.2%', label: 'Success Rate' },
    { icon: Users, number: '200+', label: 'Happy Clients' },
    { icon: Zap, number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flagship AI projects that showcase our expertise and innovation in artificial intelligence
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-3 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.section
            className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;

              return (
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-2xl mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-400">99.2%</div>
                          <div className="text-sm text-gray-400">Accuracy</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-400">24/7</div>
                          <div className="text-sm text-gray-400">Uptime</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-400">10K+</div>
                          <div className="text-sm text-gray-400">Daily Users</div>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-yellow-400">35%</div>
                          <div className="text-sm text-gray-400">ROI Increase</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            Real-time processing and analysis
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                            Scalable cloud infrastructure
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                            Advanced machine learning algorithms
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                            Enterprise-grade security
                          </li>
                        </ul>
                      </div>

                      <div className="flex space-x-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>View Live Demo</span>
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-600 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.section>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Next AI Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can bring your AI vision to life with our proven expertise
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};