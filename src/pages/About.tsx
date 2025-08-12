import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation Excellence',
      description: 'Pushing boundaries with cutting-edge AI research and development'
    },
    {
      icon: Heart,
      title: 'Ethical AI Development',
      description: 'Building responsible AI that benefits humanity and respects privacy'
    },
    {
      icon: Users,
      title: 'Client Success Focus',
      description: 'Your success is our mission - we\'re partners in your journey'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Staying ahead of the curve with ongoing research and development'
    }
  ];

  const stats = [
    { number: '2018', label: 'Founded' },
    { number: '100+', label: 'AI Experts' },
    { number: '50+', label: 'Countries Served' },
    { number: '1000+', label: 'Projects Completed' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('about.content')}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold">{t('about.mission.title')}</h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t('about.mission.content')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  <span>Democratizing AI technology for businesses of all sizes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                  <span>Building ethical and transparent AI solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  <span>Driving innovation in artificial intelligence</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="AI Mission" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-300">Creating a future where AI enhances human potential and drives meaningful progress across all industries.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.values.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Philosophy */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.technology.title')}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {t('about.technology.content')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-gray-400 text-sm">Open about our AI decision-making processes</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Ethics</h3>
                <p className="text-gray-400 text-sm">AI that respects human values and rights</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-400 text-sm">Environmentally conscious AI development</p>
              </div>
            </div>
          </motion.div>
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
              {t('about.cta')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI expertise can transform your business
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};