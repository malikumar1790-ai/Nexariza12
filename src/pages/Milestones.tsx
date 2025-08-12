import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, DollarSign, Calendar, FileText, MessageCircle, Download, Eye } from 'lucide-react';
import { Milestone } from '../types';

export const Milestones: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>('project-1');

  // Mock data - in a real app, this would come from your backend
  const projects = [
    { id: 'project-1', name: 'AI Customer Service Bot', type: 'Chatbot', startDate: '2024-01-15' },
    { id: 'project-2', name: 'Computer Vision System', type: 'Computer Vision', startDate: '2024-02-01' },
    { id: 'project-3', name: 'Predictive Analytics Dashboard', type: 'Analytics', startDate: '2024-01-20' }
  ];

  const milestones: Milestone[] = [
    {
      id: '1',
      projectId: 'project-1',
      title: 'Project Kickoff & Requirements Analysis',
      description: 'Initial project setup, requirements gathering, and technical specification document',
      status: 'completed',
      dueDate: '2024-01-22',
      completedDate: '2024-01-20',
      paymentStatus: 'paid',
      paymentAmount: 2500
    },
    {
      id: '2',
      projectId: 'project-1',
      title: 'AI Model Development & Training',
      description: 'Development of the core AI model, training with custom dataset, and initial testing',
      status: 'completed',
      dueDate: '2024-02-05',
      completedDate: '2024-02-03',
      paymentStatus: 'paid',
      paymentAmount: 5000
    },
    {
      id: '3',
      projectId: 'project-1',
      title: 'Integration & API Development',
      description: 'API development, third-party integrations, and system architecture implementation',
      status: 'in-progress',
      dueDate: '2024-02-20',
      paymentStatus: 'pending',
      paymentAmount: 3500
    },
    {
      id: '4',
      projectId: 'project-1',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing, bug fixes, performance optimization, and security audit',
      status: 'pending',
      dueDate: '2024-03-05',
      paymentStatus: 'pending',
      paymentAmount: 2000
    },
    {
      id: '5',
      projectId: 'project-1',
      title: 'Deployment & Go-Live',
      description: 'Production deployment, final testing, documentation, and project handover',
      status: 'pending',
      dueDate: '2024-03-15',
      paymentStatus: 'pending',
      paymentAmount: 2000
    }
  ];

  const consultationHistory = [
    {
      id: '1',
      date: '2024-01-15',
      type: 'Initial Consultation',
      duration: '60 min',
      notes: 'Discussed project requirements, timeline, and technical approach'
    },
    {
      id: '2',
      date: '2024-01-25',
      type: 'Progress Review',
      duration: '30 min',
      notes: 'Reviewed initial model performance and discussed optimization strategies'
    },
    {
      id: '3',
      date: '2024-02-10',
      type: 'Technical Review',
      duration: '45 min',
      notes: 'API design review and integration planning session'
    }
  ];

  const currentProject = projects.find(p => p.id === selectedProject);
  const currentMilestones = milestones.filter(m => m.projectId === selectedProject);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20';
      case 'in-progress': return 'text-blue-400 bg-blue-400/20';
      case 'pending': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'in-progress': return Clock;
      case 'pending': return Calendar;
      default: return Calendar;
    }
  };

  const calculateProgress = () => {
    const completed = currentMilestones.filter(m => m.status === 'completed').length;
    return Math.round((completed / currentMilestones.length) * 100);
  };

  const calculateTotalBudget = () => {
    return currentMilestones.reduce((total, milestone) => total + milestone.paymentAmount, 0);
  };

  const calculatePaidAmount = () => {
    return currentMilestones
      .filter(m => m.paymentStatus === 'paid')
      .reduce((total, milestone) => total + milestone.paymentAmount, 0);
  };

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
                Project Milestones
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track your AI project progress, milestones, payments, and consultation history
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Selector */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-8">
            {projects.map((project) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedProject === project.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {project.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Project Progress</h3>
                  <p className="text-2xl font-bold text-blue-400">{calculateProgress()}%</p>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${calculateProgress()}%` }}
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Total Budget</h3>
                  <p className="text-2xl font-bold text-green-400">${calculateTotalBudget().toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Paid Amount</h3>
                  <p className="text-2xl font-bold text-yellow-400">${calculatePaidAmount().toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Start Date</h3>
                  <p className="text-lg font-bold text-purple-400">
                    {currentProject ? new Date(currentProject.startDate).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Project Milestones</h2>
          
          <div className="space-y-6">
            {currentMilestones.map((milestone, index) => {
              const StatusIcon = getStatusIcon(milestone.status);
              
              return (
                <motion.div
                  key={milestone.id}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Line */}
                  {index < currentMilestones.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-700" />
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(milestone.status)}`}>
                      <StatusIcon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-gray-300 mb-4">{milestone.description}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              Due: {new Date(milestone.dueDate).toLocaleDateString()}
                            </div>
                            {milestone.completedDate && (
                              <div className="flex items-center text-green-400">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Completed: {new Date(milestone.completedDate).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400 mb-2">
                            ${milestone.paymentAmount.toLocaleString()}
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            milestone.paymentStatus === 'paid' 
                              ? 'bg-green-400/20 text-green-400' 
                              : 'bg-yellow-400/20 text-yellow-400'
                          }`}>
                            {milestone.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                          </div>
                        </div>
                      </div>
                      
                      {milestone.status === 'completed' && (
                        <div className="flex space-x-3">
                          <motion.button
                            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Deliverables</span>
                          </motion.button>
                          <motion.button
                            className="flex items-center space-x-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Download className="w-4 h-4" />
                            <span>Download Report</span>
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation History */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Consultation History</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultationHistory.map((consultation, index) => (
              <motion.div
                key={consultation.id}
                className="bg-gradient-to-br from-gray-800/50 to-black/50 p-6 rounded-2xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{consultation.type}</h3>
                    <p className="text-sm text-gray-400">{consultation.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{consultation.notes}</p>
                <div className="text-xs text-gray-400">
                  {new Date(consultation.date).toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Need Support or Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our dedicated project managers are here to help you every step of the way
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};