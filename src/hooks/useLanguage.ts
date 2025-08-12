import { useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      team: 'Team',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      contact: 'Contact',
      projectBuilder: 'Project Builder',
      milestones: 'Milestones',
      voiceBot: 'Voice AI'
    },
    home: {
      hero: {
        title: 'Pioneering the Future of AI Innovation',
        subtitle: 'Enterprise-grade artificial intelligence solutions that transform businesses and revolutionize industries',
        cta: 'Start Your AI Journey',
        secondary: 'Explore Solutions'
      },
      features: {
        title: 'Why Industry Leaders Choose Nexariza',
        items: [
          {
            title: 'Advanced AI Technology',
            description: 'Cutting-edge machine learning models and neural networks'
          },
          {
            title: 'Enterprise-Grade Security',
            description: 'Military-grade encryption and compliance standards'
          },
          {
            title: 'Scalable Solutions',
            description: 'From startup MVPs to enterprise-level implementations'
          },
          {
            title: '24/7 Expert Support',
            description: 'Dedicated AI specialists and technical support team'
          }
        ]
      }
    },
    about: {
      title: 'About Nexariza',
      content: 'We are pioneers in artificial intelligence, creating transformative solutions that push the boundaries of what\'s possible.',
      mission: {
        title: 'Our Mission',
        content: 'To democratize AI technology and empower businesses to achieve unprecedented levels of efficiency and innovation.'
      },
      values: {
        title: 'Our Values',
        items: [
          'Innovation Excellence',
          'Ethical AI Development',
          'Client Success Focus',
          'Continuous Learning'
        ]
      },
      technology: {
        title: 'Our Technology Philosophy',
        content: 'We believe in building AI solutions that are not just powerful, but also transparent, ethical, and sustainable.'
      },
      cta: 'Ready to Work With Us?'
    },
    services: {
      title: 'AI Services & Solutions',
      subtitle: 'Comprehensive artificial intelligence solutions tailored to your business needs',
      items: [
        {
          name: 'AI Chatbots',
          description: 'Intelligent conversational agents that enhance customer experience',
          features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support', 'Integration Ready']
        },
        {
          name: 'Voice AI',
          description: 'Advanced voice recognition and synthesis technologies',
          features: ['Real-time Processing', 'Voice Cloning', 'Speech Analytics', 'Custom Wake Words']
        },
        {
          name: 'Computer Vision',
          description: 'Visual intelligence for object detection and image analysis',
          features: ['Real-time Detection', 'Custom Model Training', 'Edge Computing', 'High Accuracy']
        },
        {
          name: 'Predictive Analytics',
          description: 'Data-driven insights for strategic decision making',
          features: ['Machine Learning Models', 'Real-time Dashboards', 'Trend Analysis', 'Risk Assessment']
        }
      ]
    },
    team: {
      title: 'Meet Our Team',
      subtitle: 'World-class AI experts, researchers, and engineers driving the future of artificial intelligence'
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Flagship AI projects that showcase our expertise and innovation in artificial intelligence'
    },
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'Hear from industry leaders who have transformed their businesses with our AI solutions'
    },
    projectBuilder: {
      title: 'AI Project Builder',
      subtitle: 'Build your custom AI solution in 5 simple steps and get an instant estimate'
    },
    milestones: {
      title: 'Project Milestones',
      subtitle: 'Track your AI project progress, milestones, payments, and consultation history'
    },
    voiceAI: {
      title: 'Voice AI Assistant',
      subtitle: 'Experience the future of conversational AI with real-time voice interaction, multi-language support, and intelligent responses'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to transform your business with AI? Let\'s discuss your project.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        office: 'Global Headquarters',
        hours: 'Business Hours',
        phone: 'Phone',
        email: 'Email'
      }
    }
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      services: 'Servizi',
      team: 'Team',
      portfolio: 'Portfolio',
      testimonials: 'Testimonianze',
      contact: 'Contatti',
      projectBuilder: 'Costruttore Progetti',
      milestones: 'Milestone',
      voiceBot: 'AI Vocale'
    },
    home: {
      hero: {
        title: 'Pionieri del Futuro dell\'Innovazione AI',
        subtitle: 'Soluzioni di intelligenza artificiale di livello enterprise che trasformano le aziende',
        cta: 'Inizia il Tuo Viaggio AI',
        secondary: 'Esplora Soluzioni'
      },
      features: {
        title: 'Perché i Leader del Settore Scelgono Nexariza',
        items: [
          {
            title: 'Tecnologia AI Avanzata',
            description: 'Modelli di machine learning e reti neurali all\'avanguardia'
          },
          {
            title: 'Sicurezza di Livello Enterprise',
            description: 'Crittografia di grado militare e standard di conformità'
          },
          {
            title: 'Soluzioni Scalabili',
            description: 'Da MVP per startup a implementazioni di livello enterprise'
          },
          {
            title: 'Supporto Esperto 24/7',
            description: 'Specialisti AI dedicati e team di supporto tecnico'
          }
        ]
      }
    },
    about: {
      title: 'Su Nexariza',
      content: 'Siamo pionieri nell\'intelligenza artificiale, creando soluzioni trasformative che spingono i confini del possibile.',
      mission: {
        title: 'La Nostra Missione',
        content: 'Democratizzare la tecnologia AI e permettere alle aziende di raggiungere livelli senza precedenti di efficienza e innovazione.'
      },
      values: {
        title: 'I Nostri Valori',
        items: [
          'Eccellenza nell\'Innovazione',
          'Sviluppo AI Etico',
          'Focus sul Successo del Cliente',
          'Apprendimento Continuo'
        ]
      },
      technology: {
        title: 'La Nostra Filosofia Tecnologica',
        content: 'Crediamo nella costruzione di soluzioni AI che siano non solo potenti, ma anche trasparenti, etiche e sostenibili.'
      },
      cta: 'Pronto a Lavorare Con Noi?'
    },
    team: {
      title: 'Il Nostro Team',
      subtitle: 'Esperti AI di livello mondiale, ricercatori e ingegneri che guidano il futuro dell\'intelligenza artificiale'
    },
    portfolio: {
      title: 'Il Nostro Portfolio',
      subtitle: 'Progetti AI di punta che mostrano la nostra esperienza e innovazione nell\'intelligenza artificiale'
    },
    testimonials: {
      title: 'Testimonianze dei Clienti',
      subtitle: 'Ascolta i leader del settore che hanno trasformato le loro aziende con le nostre soluzioni AI'
    },
    projectBuilder: {
      title: 'Costruttore di Progetti AI',
      subtitle: 'Costruisci la tua soluzione AI personalizzata in 5 semplici passaggi e ottieni una stima istantanea'
    },
    milestones: {
      title: 'Milestone del Progetto',
      subtitle: 'Traccia i progressi del tuo progetto AI, milestone, pagamenti e cronologia delle consultazioni'
    },
    voiceAI: {
      title: 'Assistente AI Vocale',
      subtitle: 'Sperimenta il futuro dell\'AI conversazionale con interazione vocale in tempo reale, supporto multilingue e risposte intelligenti'
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Pronto a trasformare la tua azienda con l\'AI? Discutiamo del tuo progetto.',
      form: {
        name: 'Nome Completo',
        email: 'Indirizzo Email',
        company: 'Azienda',
        message: 'Messaggio',
        send: 'Invia Messaggio'
      },
      info: {
        office: 'Sede Globale',
        hours: 'Orari di Lavoro',
        phone: 'Telefono',
        email: 'Email'
      }
    }
  }
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' }
  ];

  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('nexariza-language', langCode);
  };

  useEffect(() => {
    const saved = localStorage.getItem('nexariza-language');
    if (saved && languages.find(l => l.code === saved)) {
      setCurrentLanguage(saved);
    }
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage as keyof typeof translations] || translations.en;
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    return value || key;
  };

  return {
    currentLanguage,
    changeLanguage,
    languages,
    t
  };
};