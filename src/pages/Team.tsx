import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, MapPin, Users, Award, Briefcase } from 'lucide-react';
import { teamMembers } from '../data/teamData';

export const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const stats = [
    { icon: Users, number: '100+', label: 'AI Experts' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Briefcase, number: '500+', label: 'Projects Delivered' },
    { icon: MapPin, number: '25+', label: 'Countries Served' }
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
                Meet Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class AI experts, researchers, and engineers driving the future of artificial intelligence
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 font-medium">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="px-3 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
                        +{member.expertise.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4 text-blue-400" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Twitter className="w-4 h-4 text-blue-400" />
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-blue-400" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Member View */}
      <AnimatePresence>
        {selectedMember && (
          <motion.section
            className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {(() => {
              const member = teamMembers.find(m => m.id === selectedMember);
              if (!member) return null;

              return (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-96 object-cover rounded-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                      <p className="text-xl text-blue-400 mb-6">{member.role}</p>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {member.bio}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4">Expertise</h4>
                        <div className="flex flex-wrap gap-3">
                          {member.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        {member.social.linkedin && (
                          <motion.a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                          </motion.a>
                        )}
                        <motion.a
                          href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@nexariza.com`}
                          className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-600 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="w-5 h-5" />
                          <span>Contact</span>
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

      {/* Join Our Team CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our World-Class Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional talent to join our mission of advancing AI technology
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};