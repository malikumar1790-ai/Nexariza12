import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Zap, Clock, DollarSign, Users, Star } from 'lucide-react';
import { ProjectBuilderData } from '../types';

export const ProjectBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState<ProjectBuilderData>({
    projectType: '',
    complexity: '',
    timeline: '',
    features: [],
    requirements: '',
    budget: 0
  });

  const steps = [
    { id: 1, title: 'Project Type', icon: Zap },
    { id: 2, title: 'Complexity', icon: Star },
    { id: 3, title: 'Timeline', icon: Clock },
    { id: 4, title: 'Features', icon: Check },
    { id: 5, title: 'Requirements & Budget', icon: DollarSign }
  ];

  const projectTypes = [
    {
      id: 'chatbot',
      name: 'AI Chatbot',
      description: 'Intelligent conversational agent for customer service',
      price: 'From $299/month',
      features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support']
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      description: 'Visual intelligence for object detection and analysis',
      price: 'From $699/month',
      features: ['Real-time Detection', 'Custom Training', 'High Accuracy']
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      description: 'Data-driven insights for strategic decisions',
      price: 'From $799/month',
      features: ['Machine Learning Models', 'Real-time Dashboards', 'Trend Analysis']
    },
    {
      id: 'voice-ai',
      name: 'Voice AI',
      description: 'Advanced voice recognition and synthesis',
      price: 'From $499/month',
      features: ['Real-time Processing', 'Voice Cloning', 'Multi-accent Support']
    },
    {
      id: 'medical-ai',
      name: 'Medical AI',
      description: 'Healthcare-focused AI for diagnostics and care',
      price: 'From $1299/month',
      features: ['HIPAA Compliance', 'Diagnostic Assistance', 'Clinical Support']
    },
    {
      id: 'custom',
      name: 'Custom Solution',
      description: 'Bespoke AI solution tailored to your needs',
      price: 'Custom Pricing',
      features: ['Custom Architecture', 'Dedicated Support', 'Full Ownership']
    }
  ];

  const complexityLevels = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Simple implementation with core features',
      multiplier: 1,
      timeline: '2-4 weeks',
      features: ['Standard features', 'Basic customization', 'Email support']
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: 'Enhanced functionality with custom features',
      multiplier: 2,
      timeline: '4-8 weeks',
      features: ['Advanced features', 'Custom integrations', 'Priority support']
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Full-scale solution with premium features',
      multiplier: 3,
      timeline: '8-16 weeks',
      features: ['Enterprise features', 'Dedicated team', '24/7 support']
    }
  ];

  const timelineOptions = [
    { id: 'urgent', name: 'Urgent (Rush)', multiplier: 1.5, description: '1-2 weeks delivery' },
    { id: 'standard', name: 'Standard', multiplier: 1, description: 'Normal timeline' },
    { id: 'flexible', name: 'Flexible', multiplier: 0.8, description: 'Extended timeline for better pricing' }
  ];

  const availableFeatures = [
    'API Integration',
    'Custom Dashboard',
    'Mobile App',
    'Real-time Analytics',
    'Multi-language Support',
    'Cloud Deployment',
    'Data Encryption',
    'Third-party Integrations',
    'Custom Reporting',
    'Advanced Security',
    'Scalable Architecture',
    'Performance Monitoring'
  ];

  const calculateEstimate = () => {
    const basePrice = projectData.projectType === 'chatbot' ? 299 :
                     projectData.projectType === 'computer-vision' ? 699 :
                     projectData.projectType === 'predictive-analytics' ? 799 :
                     projectData.projectType === 'voice-ai' ? 499 :
                     projectData.projectType === 'medical-ai' ? 1299 :
                     2000; // custom

    const complexityMultiplier = projectData.complexity === 'basic' ? 1 :
                                projectData.complexity === 'advanced' ? 2 : 3;

    const timelineMultiplier = projectData.timeline === 'urgent' ? 1.5 :
                              projectData.timeline === 'flexible' ? 0.8 : 1;

    const featuresPrice = projectData.features.length * 100;

    return Math.round((basePrice * complexityMultiplier * timelineMultiplier) + featuresPrice);
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const estimate = calculateEstimate();
    setProjectData({ ...projectData, budget: estimate });
    // Here you would typically send the data to your backend
    alert(`Project estimate: $${estimate}/month. Our team will contact you within 24 hours!`);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Project Builder
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Build your custom AI solution in 5 simple steps and get an instant estimate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  currentStep >= step.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500' 
                    : 'border-gray-600 bg-gray-800'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <step.icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="ml-3 hidden md:block">
                  <div className={`font-medium ${currentStep >= step.id ? 'text-white' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-500' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-12">Choose Your AI Project Type</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectTypes.map((type) => (
                      <motion.div
                        key={type.id}
                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          projectData.projectType === type.id
                            ? 'border-blue-500 bg-blue-600/10'
                            : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                        }`}
                        whileHover={{ y: -5 }}
                        onClick={() => setProjectData({ ...projectData, projectType: type.id })}
                      >
                        <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                        <p className="text-gray-300 mb-4">{type.description}</p>
                        <div className="text-blue-400 font-semibold mb-4">{type.price}</div>
                        <ul className="space-y-1">
                          {type.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-400 flex items-center">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Complexity */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-12">Select Complexity Level</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {complexityLevels.map((level) => (
                      <motion.div
                        key={level.id}
                        className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 text-center ${
                          projectData.complexity === level.id
                            ? 'border-blue-500 bg-blue-600/10'
                            : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                        }`}
                        whileHover={{ y: -5 }}
                        onClick={() => setProjectData({ ...projectData, complexity: level.id })}
                      >
                        <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
                        <p className="text-gray-300 mb-4">{level.description}</p>
                        <div className="text-blue-400 font-semibold mb-6">{level.timeline}</div>
                        <ul className="space-y-2">
                          {level.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-400 flex items-center justify-center">
                              <Check className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Timeline */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-12">Choose Your Timeline</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {timelineOptions.map((option) => (
                      <motion.div
                        key={option.id}
                        className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 text-center ${
                          projectData.timeline === option.id
                            ? 'border-blue-500 bg-blue-600/10'
                            : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                        }`}
                        whileHover={{ y: -5 }}
                        onClick={() => setProjectData({ ...projectData, timeline: option.id })}
                      >
                        <Clock className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                        <h3 className="text-2xl font-bold mb-2">{option.name}</h3>
                        <p className="text-gray-300 mb-4">{option.description}</p>
                        <div className="text-blue-400 font-semibold">
                          {option.multiplier > 1 ? '+' : option.multiplier < 1 ? '-' : ''}
                          {Math.abs((option.multiplier - 1) * 100)}% pricing
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Features */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-12">Select Additional Features</h2>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {availableFeatures.map((feature) => (
                      <motion.div
                        key={feature}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                          projectData.features.includes(feature)
                            ? 'border-blue-500 bg-blue-600/10'
                            : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => {
                          const features = projectData.features.includes(feature)
                            ? projectData.features.filter(f => f !== feature)
                            : [...projectData.features, feature];
                          setProjectData({ ...projectData, features });
                        }}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                            projectData.features.includes(feature)
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-600'
                          }`}>
                            {projectData.features.includes(feature) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-2">+$100/month</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Requirements & Budget */}
              {currentStep === 5 && (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-12">Final Details & Estimate</h2>
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Additional Requirements</h3>
                      <textarea
                        className="w-full h-32 bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                        placeholder="Describe any specific requirements, integrations, or features you need..."
                        value={projectData.requirements}
                        onChange={(e) => setProjectData({ ...projectData, requirements: e.target.value })}
                      />
                      
                      <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Project Summary</h3>
                        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Project Type:</span>
                            <span className="capitalize">{projectData.projectType.replace('-', ' ')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Complexity:</span>
                            <span className="capitalize">{projectData.complexity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Timeline:</span>
                            <span className="capitalize">{projectData.timeline}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Features:</span>
                            <span>{projectData.features.length} selected</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Project Estimate</h3>
                        <div className="text-center mb-6">
                          <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            ${calculateEstimate()}
                          </div>
                          <div className="text-gray-400">per month</div>
                        </div>
                        
                        <div className="space-y-3 mb-8">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Base Price:</span>
                            <span>${projectData.projectType === 'chatbot' ? 299 :
                                     projectData.projectType === 'computer-vision' ? 699 :
                                     projectData.projectType === 'predictive-analytics' ? 799 :
                                     projectData.projectType === 'voice-ai' ? 499 :
                                     projectData.projectType === 'medical-ai' ? 1299 : 2000}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Complexity Multiplier:</span>
                            <span>×{projectData.complexity === 'basic' ? 1 : projectData.complexity === 'advanced' ? 2 : 3}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Timeline Adjustment:</span>
                            <span>×{projectData.timeline === 'urgent' ? 1.5 : projectData.timeline === 'flexible' ? 0.8 : 1}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Additional Features:</span>
                            <span>+${projectData.features.length * 100}</span>
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-4">
                            This is an estimated price. Final pricing may vary based on specific requirements.
                          </p>
                          <motion.button
                            onClick={handleSubmit}
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Get Detailed Quote
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <motion.button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
              whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </motion.button>

            {currentStep < 5 && (
              <motion.button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !projectData.projectType) ||
                  (currentStep === 2 && !projectData.complexity) ||
                  (currentStep === 3 && !projectData.timeline)
                }
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  (currentStep === 1 && !projectData.projectType) ||
                  (currentStep === 2 && !projectData.complexity) ||
                  (currentStep === 3 && !projectData.timeline)
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                }`}
                whileHover={
                  !((currentStep === 1 && !projectData.projectType) ||
                    (currentStep === 2 && !projectData.complexity) ||
                    (currentStep === 3 && !projectData.timeline))
                    ? { scale: 1.05 } : {}
                }
                whileTap={
                  !((currentStep === 1 && !projectData.projectType) ||
                    (currentStep === 2 && !projectData.complexity) ||
                    (currentStep === 3 && !projectData.timeline))
                    ? { scale: 0.95 } : {}
                }
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};