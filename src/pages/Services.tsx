import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mic, Eye, TrendingUp, Heart, FileText, Brain, Code, ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'chatbots',
      name: 'AI Chatbots',
      icon: MessageCircle,
      description: 'Intelligent conversational agents that enhance customer experience and automate support',
      features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'Integration Ready', 'Custom Training', 'Analytics Dashboard'],
      images: [
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      pricing: { basic: 299, premium: 599, enterprise: 1299 },
      caseStudy: 'Reduced customer service costs by 60% for e-commerce client',
      satisfaction: 98
    },
    {
      id: 'voice-ai',
      name: 'Voice AI',
      icon: Mic,
      description: 'Advanced voice recognition and synthesis technologies for seamless audio interactions',
      features: ['Real-time Processing', 'Voice Cloning', 'Speech Analytics', 'Custom Wake Words', 'Noise Cancellation', 'Multi-accent Support'],
      images: [
        'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      pricing: { basic: 499, premium: 899, enterprise: 1899 },
      caseStudy: 'Enhanced voice assistant accuracy by 40% for smart home company',
      satisfaction: 96
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      icon: Eye,
      description: 'Visual intelligence for object detection, image analysis, and automated visual inspection',
      features: ['Real-time Detection', 'Custom Model Training', 'Edge Computing', 'High Accuracy', 'Video Analytics', 'Quality Control'],
      images: [
        'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      pricing: { basic: 699, premium: 1299, enterprise: 2499 },
      caseStudy: 'Improved manufacturing quality control by 85% accuracy',
      satisfaction: 97
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      icon: TrendingUp,
      description: 'Data-driven insights for strategic decision making and future trend prediction',
      features: ['Machine Learning Models', 'Real-time Dashboards', 'Trend Analysis', 'Risk Assessment', 'Custom Reports', 'API Integration'],
      images: [
        'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      pricing: { basic: 799, premium: 1499, enterprise: 2899 },
      caseStudy: 'Increased sales forecast accuracy by 75% for retail chain',
      satisfaction: 95
    },
    {
      id: 'medical-ai',
      name: 'Medical AI',
      icon: Heart,
      description: 'Healthcare-focused AI solutions for diagnostics, patient care, and medical research',
      features: ['HIPAA Compliance', 'Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Medical Imaging', 'Clinical Decision Support'],
      images: [
        'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      pricing: { basic: 1299, premium: 2499, enterprise: 4999 },
      caseStudy: 'Reduced diagnostic time by 50% for radiology department',
      satisfaction: 99
    },
    {
      id: 'document-processing',
      name: 'Document Processing AI',
      icon: FileText,
      description: 'Automated document analysis, extraction, and processing using advanced OCR and NLP',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Multi-format Support', 'Compliance Tracking'],
      images: [
        'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      pricing: { basic: 399, premium: 799, enterprise: 1599 },
      caseStudy: 'Automated 90% of invoice processing for accounting firm',
      satisfaction: 94
    },
    {
      id: 'web-apps',
      name: 'AI-Powered Web Apps',
      icon: Code,
      description: 'Custom web applications integrated with AI capabilities for enhanced user experiences',
      features: ['Custom Development', 'AI Integration', 'Responsive Design', 'Cloud Deployment', 'API Development', 'Performance Optimization'],
      images: [
        'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      pricing: { basic: 2999, premium: 5999, enterprise: 12999 },
      caseStudy: 'Increased user engagement by 200% with personalized AI features',
      satisfaction: 96
    },
    {
      id: 'neural-networks',
      name: 'Custom Neural Networks',
      icon: Brain,
      description: 'Bespoke neural network architectures designed for specific business challenges',
      features: ['Custom Architecture', 'Model Training', 'Performance Tuning', 'Deployment Support', 'Ongoing Optimization', 'Technical Documentation'],
      images: [
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      pricing: { basic: 4999, premium: 9999, enterprise: 19999 },
      caseStudy: 'Custom recommendation engine increased revenue by 35%',
      satisfaction: 98
    }
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
                AI Services & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group ${
                  selectedService === service.id ? 'border-blue-500 bg-blue-600/10' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-400">{service.satisfaction}% satisfaction</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">
                    From ${service.pricing.basic}/mo
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${selectedService === service.id ? 'rotate-90' : ''}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <AnimatePresence>
        {selectedService && (
          <motion.section
            className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {(() => {
              const service = services.find(s => s.id === selectedService);
              if (!service) return null;

              return (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{service.name}</h3>
                          <div className="flex items-center mt-1">
                            <Star className="w-5 h-5 text-yellow-400 mr-1" />
                            <span className="text-gray-300">{service.satisfaction}% Client Satisfaction</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg mb-8">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <Check className="w-5 h-5 text-green-500 mr-2" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4">Pricing Plans</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <h5 className="font-semibold text-blue-400">Basic</h5>
                            <p className="text-2xl font-bold">${service.pricing.basic}</p>
                            <p className="text-sm text-gray-400">per month</p>
                          </div>
                          <div className="bg-gray-800/50 p-4 rounded-lg text-center border-2 border-blue-500">
                            <h5 className="font-semibold text-blue-400">Premium</h5>
                            <p className="text-2xl font-bold">${service.pricing.premium}</p>
                            <p className="text-sm text-gray-400">per month</p>
                          </div>
                          <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                            <h5 className="font-semibold text-blue-400">Enterprise</h5>
                            <p className="text-2xl font-bold">${service.pricing.enterprise}</p>
                            <p className="text-sm text-gray-400">per month</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg mb-8">
                        <h4 className="font-semibold mb-2">Case Study</h4>
                        <p className="text-gray-300">{service.caseStudy}</p>
                      </div>

                      <div className="flex space-x-4">
                        <Link to="/project-builder">
                          <motion.button
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Get Started</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </Link>
                        <Link to="/contact">
                          <motion.button
                            className="px-6 py-3 border-2 border-gray-600 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Book Consultation
                          </motion.button>
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {service.images.map((image, index) => (
                        <motion.img
                          key={index}
                          src={image}
                          alt={`${service.name} ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                        />
                      ))}
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your specific requirements and create a custom AI solution
            </p>
            <Link to="/project-builder">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};