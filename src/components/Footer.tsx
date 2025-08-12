import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t('footer.company.about'), path: '/about' },
      { name: t('footer.company.team'), path: '/team' },
      { name: t('footer.company.careers'), path: '/careers' },
      { name: t('footer.company.contact'), path: '/contact' }
    ],
    services: [
      { name: t('footer.services.chatbots'), path: '/services' },
      { name: t('footer.services.voiceAI'), path: '/voice-ai' },
      { name: t('footer.services.computerVision'), path: '/services' },
      { name: t('footer.services.analytics'), path: '/services' }
    ],
    resources: [
      { name: t('footer.resources.portfolio'), path: '/portfolio' },
      { name: t('footer.resources.testimonials'), path: '/testimonials' },
      { name: t('footer.resources.projectBuilder'), path: '/project-builder' },
      { name: t('footer.resources.milestones'), path: '/milestones' }
    ],
    legal: [
      { name: t('footer.legal.privacy'), path: '/privacy' },
      { name: t('footer.legal.terms'), path: '/terms' },
      { name: t('footer.legal.cookies'), path: '/cookies' },
      { name: t('footer.legal.security'), path: '/security' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/nexariza', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/nexariza', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/nexariza', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Nexariza
              </span>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>hello@nexariza.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.sections.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.sections.services')}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.sections.resources')}</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-white font-semibold mb-4">{t('footer.sections.legal')}</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-300 mb-6">{t('footer.newsletter.description')}</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('footer.newsletter.subscribe')}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Nexariza AI. {t('footer.copyright')}
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};