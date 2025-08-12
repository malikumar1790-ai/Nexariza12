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
    },
    footer: {
      description: 'Leading AI innovation company providing enterprise-grade artificial intelligence solutions that transform businesses worldwide.',
      address: 'San Francisco, CA 94105, USA',
      sections: {
        company: 'Company',
        services: 'Services',
        resources: 'Resources',
        legal: 'Legal'
      },
      company: {
        about: 'About Us',
        team: 'Our Team',
        careers: 'Careers',
        contact: 'Contact'
      },
      services: {
        chatbots: 'AI Chatbots',
        voiceAI: 'Voice AI',
        computerVision: 'Computer Vision',
        analytics: 'Predictive Analytics'
      },
      resources: {
        portfolio: 'Portfolio',
        testimonials: 'Testimonials',
        projectBuilder: 'Project Builder',
        milestones: 'Milestones'
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy',
        security: 'Security'
      },
      newsletter: {
        title: 'Stay Updated with AI Innovations',
        description: 'Get the latest insights, updates, and exclusive content delivered to your inbox.',
        placeholder: 'Enter your email',
        subscribe: 'Subscribe'
      },
      copyright: 'All rights reserved.'
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
    },
    footer: {
      description: 'Azienda leader nell\'innovazione AI che fornisce soluzioni di intelligenza artificiale di livello enterprise che trasformano le aziende in tutto il mondo.',
      address: 'San Francisco, CA 94105, USA',
      sections: {
        company: 'Azienda',
        services: 'Servizi',
        resources: 'Risorse',
        legal: 'Legale'
      },
      company: {
        about: 'Chi Siamo',
        team: 'Il Nostro Team',
        careers: 'Carriere',
        contact: 'Contatti'
      },
      services: {
        chatbots: 'Chatbot AI',
        voiceAI: 'AI Vocale',
        computerVision: 'Computer Vision',
        analytics: 'Analisi Predittive'
      },
      resources: {
        portfolio: 'Portfolio',
        testimonials: 'Testimonianze',
        projectBuilder: 'Costruttore Progetti',
        milestones: 'Milestone'
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Termini di Servizio',
        cookies: 'Cookie Policy',
        security: 'Sicurezza'
      },
      newsletter: {
        title: 'Rimani Aggiornato sulle Innovazioni AI',
        description: 'Ricevi le ultime novità, aggiornamenti e contenuti esclusivi nella tua casella di posta.',
        placeholder: 'Inserisci la tua email',
        subscribe: 'Iscriviti'
      },
      copyright: 'Tutti i diritti riservati.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über Uns',
      services: 'Dienstleistungen',
      team: 'Team',
      portfolio: 'Portfolio',
      testimonials: 'Referenzen',
      contact: 'Kontakt',
      projectBuilder: 'Projekt-Builder',
      milestones: 'Meilensteine',
      voiceBot: 'Sprach-KI'
    },
    home: {
      hero: {
        title: 'Pioniere der Zukunft der KI-Innovation',
        subtitle: 'Künstliche Intelligenz-Lösungen auf Unternehmensebene, die Unternehmen transformieren und Branchen revolutionieren',
        cta: 'Starten Sie Ihre KI-Reise',
        secondary: 'Lösungen Erkunden'
      },
      features: {
        title: 'Warum Branchenführer Nexariza Wählen',
        items: [
          {
            title: 'Fortschrittliche KI-Technologie',
            description: 'Modernste Machine Learning-Modelle und neuronale Netzwerke'
          },
          {
            title: 'Unternehmenssicherheit',
            description: 'Verschlüsselung auf militärischem Niveau und Compliance-Standards'
          },
          {
            title: 'Skalierbare Lösungen',
            description: 'Von Startup-MVPs bis hin zu Implementierungen auf Unternehmensebene'
          },
          {
            title: '24/7 Expertenunterstützung',
            description: 'Dedizierte KI-Spezialisten und technisches Support-Team'
          }
        ]
      }
    },
    about: {
      title: 'Über Nexariza',
      content: 'Wir sind Pioniere in der künstlichen Intelligenz und schaffen transformative Lösungen, die die Grenzen des Möglichen erweitern.',
      mission: {
        title: 'Unsere Mission',
        content: 'KI-Technologie zu demokratisieren und Unternehmen zu befähigen, beispiellose Effizienz und Innovation zu erreichen.'
      },
      values: {
        title: 'Unsere Werte',
        items: [
          'Innovationsexzellenz',
          'Ethische KI-Entwicklung',
          'Fokus auf Kundenerfolg',
          'Kontinuierliches Lernen'
        ]
      },
      technology: {
        title: 'Unsere Technologie-Philosophie',
        content: 'Wir glauben an den Aufbau von KI-Lösungen, die nicht nur mächtig, sondern auch transparent, ethisch und nachhaltig sind.'
      },
      cta: 'Bereit, mit uns zu arbeiten?'
    },
    services: {
      title: 'KI-Services & Lösungen',
      subtitle: 'Umfassende Lösungen für künstliche Intelligenz, maßgeschneidert für Ihre Geschäftsanforderungen',
      items: [
        {
          name: 'KI-Chatbots',
          description: 'Intelligente Konversationsagenten, die die Kundenerfahrung verbessern',
          features: ['Natürliche Sprachverarbeitung', '24/7 Verfügbarkeit', 'Mehrsprachiger Support', 'Integrationsbereit']
        },
        {
          name: 'Sprach-KI',
          description: 'Fortschrittliche Spracherkennung und Synthesetechnologien',
          features: ['Echtzeitverarbeitung', 'Stimmklonen', 'Sprachanalyse', 'Benutzerdefinierte Wake-Words']
        },
        {
          name: 'Computer Vision',
          description: 'Visuelle Intelligenz für Objekterkennung und Bildanalyse',
          features: ['Echtzeiterkennung', 'Benutzerdefiniertes Modelltraining', 'Edge Computing', 'Hohe Genauigkeit']
        },
        {
          name: 'Predictive Analytics',
          description: 'Datengesteuerte Einblicke für strategische Entscheidungsfindung',
          features: ['Machine Learning-Modelle', 'Echtzeit-Dashboards', 'Trendanalyse', 'Risikobewertung']
        }
      ]
    },
    team: {
      title: 'Unser Team',
      subtitle: 'Weltklasse-KI-Experten, Forscher und Ingenieure, die die Zukunft der künstlichen Intelligenz vorantreiben'
    },
    portfolio: {
      title: 'Unser Portfolio',
      subtitle: 'Flaggschiff-KI-Projekte, die unsere Expertise und Innovation in der künstlichen Intelligenz zeigen'
    },
    testimonials: {
      title: 'Kundenstimmen',
      subtitle: 'Hören Sie von Branchenführern, die ihre Unternehmen mit unseren KI-Lösungen transformiert haben'
    },
    projectBuilder: {
      title: 'KI-Projekt-Builder',
      subtitle: 'Erstellen Sie Ihre maßgeschneiderte KI-Lösung in 5 einfachen Schritten und erhalten Sie eine sofortige Schätzung'
    },
    milestones: {
      title: 'Projekt-Meilensteine',
      subtitle: 'Verfolgen Sie Ihren KI-Projektfortschritt, Meilensteine, Zahlungen und Beratungshistorie'
    },
    voiceAI: {
      title: 'Sprach-KI-Assistent',
      subtitle: 'Erleben Sie die Zukunft der konversationellen KI mit Echtzeit-Sprachinteraktion, mehrsprachigem Support und intelligenten Antworten'
    },
    contact: {
      title: 'Kontakt Aufnehmen',
      subtitle: 'Bereit, Ihr Unternehmen mit KI zu transformieren? Lassen Sie uns über Ihr Projekt sprechen.',
      form: {
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        company: 'Unternehmen',
        message: 'Nachricht',
        send: 'Nachricht Senden'
      },
      info: {
        office: 'Globale Zentrale',
        hours: 'Geschäftszeiten',
        phone: 'Telefon',
        email: 'E-Mail'
      }
    },
    footer: {
      description: 'Führendes KI-Innovationsunternehmen, das KI-Lösungen auf Unternehmensebene bereitstellt, die Unternehmen weltweit transformieren.',
      address: 'San Francisco, CA 94105, USA',
      sections: {
        company: 'Unternehmen',
        services: 'Dienstleistungen',
        resources: 'Ressourcen',
        legal: 'Rechtliches'
      },
      company: {
        about: 'Über Uns',
        team: 'Unser Team',
        careers: 'Karriere',
        contact: 'Kontakt'
      },
      services: {
        chatbots: 'KI-Chatbots',
        voiceAI: 'Sprach-KI',
        computerVision: 'Computer Vision',
        analytics: 'Predictive Analytics'
      },
      resources: {
        portfolio: 'Portfolio',
        testimonials: 'Referenzen',
        projectBuilder: 'Projekt-Builder',
        milestones: 'Meilensteine'
      },
      legal: {
        privacy: 'Datenschutzrichtlinie',
        terms: 'Nutzungsbedingungen',
        cookies: 'Cookie-Richtlinie',
        security: 'Sicherheit'
      },
      newsletter: {
        title: 'Bleiben Sie über KI-Innovationen auf dem Laufenden',
        description: 'Erhalten Sie die neuesten Einblicke, Updates und exklusiven Inhalte in Ihrem Posteingang.',
        placeholder: 'E-Mail eingeben',
        subscribe: 'Abonnieren'
      },
      copyright: 'Alle Rechte vorbehalten.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      team: 'Équipe',
      portfolio: 'Portfolio',
      testimonials: 'Témoignages',
      contact: 'Contact',
      projectBuilder: 'Constructeur de Projet',
      milestones: 'Jalons',
      voiceBot: 'IA Vocale'
    },
    home: {
      hero: {
        title: 'Pionniers de l\'Avenir de l\'Innovation IA',
        subtitle: 'Solutions d\'intelligence artificielle de niveau entreprise qui transforment les entreprises et révolutionnent les industries',
        cta: 'Commencez Votre Parcours IA',
        secondary: 'Explorer les Solutions'
      },
      features: {
        title: 'Pourquoi les Leaders de l\'Industrie Choisissent Nexariza',
        items: [
          {
            title: 'Technologie IA Avancée',
            description: 'Modèles d\'apprentissage automatique et réseaux de neurones de pointe'
          },
          {
            title: 'Sécurité de Niveau Entreprise',
            description: 'Chiffrement de niveau militaire et normes de conformité'
          },
          {
            title: 'Solutions Évolutives',
            description: 'Des MVP de startup aux implémentations de niveau entreprise'
          },
          {
            title: 'Support Expert 24/7',
            description: 'Spécialistes IA dédiés et équipe de support technique'
          }
        ]
      }
    },
    about: {
      title: 'À Propos de Nexariza',
      content: 'Nous sommes des pionniers de l\'intelligence artificielle, créant des solutions transformatrices qui repoussent les limites du possible.',
      mission: {
        title: 'Notre Mission',
        content: 'Démocratiser la technologie IA et permettre aux entreprises d\'atteindre des niveaux d\'efficacité et d\'innovation sans précédent.'
      },
      values: {
        title: 'Nos Valeurs',
        items: [
          'Excellence en Innovation',
          'Développement IA Éthique',
          'Focus sur le Succès Client',
          'Apprentissage Continu'
        ]
      },
      technology: {
        title: 'Notre Philosophie Technologique',
        content: 'Nous croyons en la construction de solutions IA qui ne sont pas seulement puissantes, mais aussi transparentes, éthiques et durables.'
      },
      cta: 'Prêt à Travailler Avec Nous?'
    },
    services: {
      title: 'Services et Solutions IA',
      subtitle: 'Solutions complètes d\'intelligence artificielle adaptées à vos besoins commerciaux',
      items: [
        {
          name: 'Chatbots IA',
          description: 'Agents conversationnels intelligents qui améliorent l\'expérience client',
          features: ['Traitement du Langage Naturel', 'Disponibilité 24/7', 'Support Multilingue', 'Prêt à l\'Intégration']
        },
        {
          name: 'IA Vocale',
          description: 'Technologies avancées de reconnaissance et de synthèse vocale',
          features: ['Traitement en Temps Réel', 'Clonage Vocal', 'Analyse Vocale', 'Mots de Réveil Personnalisés']
        },
        {
          name: 'Vision par Ordinateur',
          description: 'Intelligence visuelle pour la détection d\'objets et l\'analyse d\'images',
          features: ['Détection en Temps Réel', 'Formation de Modèle Personnalisé', 'Edge Computing', 'Haute Précision']
        },
        {
          name: 'Analyse Prédictive',
          description: 'Insights basés sur les données pour la prise de décision stratégique',
          features: ['Modèles d\'Apprentissage Automatique', 'Tableaux de Bord en Temps Réel', 'Analyse des Tendances', 'Évaluation des Risques']
        }
      ]
    },
    team: {
      title: 'Notre Équipe',
      subtitle: 'Experts IA de classe mondiale, chercheurs et ingénieurs qui façonnent l\'avenir de l\'intelligence artificielle'
    },
    portfolio: {
      title: 'Notre Portfolio',
      subtitle: 'Projets IA phares qui démontrent notre expertise et innovation en intelligence artificielle'
    },
    testimonials: {
      title: 'Témoignages Clients',
      subtitle: 'Écoutez les leaders de l\'industrie qui ont transformé leurs entreprises avec nos solutions IA'
    },
    projectBuilder: {
      title: 'Constructeur de Projet IA',
      subtitle: 'Construisez votre solution IA personnalisée en 5 étapes simples et obtenez une estimation instantanée'
    },
    milestones: {
      title: 'Jalons du Projet',
      subtitle: 'Suivez les progrès de votre projet IA, les jalons, les paiements et l\'historique des consultations'
    },
    voiceAI: {
      title: 'Assistant IA Vocal',
      subtitle: 'Découvrez l\'avenir de l\'IA conversationnelle avec interaction vocale en temps réel, support multilingue et réponses intelligentes'
    },
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Prêt à transformer votre entreprise avec l\'IA? Discutons de votre projet.',
      form: {
        name: 'Nom Complet',
        email: 'Adresse E-mail',
        company: 'Entreprise',
        message: 'Message',
        send: 'Envoyer le Message'
      },
      info: {
        office: 'Siège Social Mondial',
        hours: 'Heures d\'Ouverture',
        phone: 'Téléphone',
        email: 'E-mail'
      }
    },
    footer: {
      description: 'Entreprise leader en innovation IA fournissant des solutions d\'intelligence artificielle de niveau entreprise qui transforment les entreprises dans le monde entier.',
      address: 'San Francisco, CA 94105, USA',
      sections: {
        company: 'Entreprise',
        services: 'Services',
        resources: 'Ressources',
        legal: 'Légal'
      },
      company: {
        about: 'À Propos',
        team: 'Notre Équipe',
        careers: 'Carrières',
        contact: 'Contact'
      },
      services: {
        chatbots: 'Chatbots IA',
        voiceAI: 'IA Vocale',
        computerVision: 'Vision par Ordinateur',
        analytics: 'Analyse Prédictive'
      },
      resources: {
        portfolio: 'Portfolio',
        testimonials: 'Témoignages',
        projectBuilder: 'Constructeur de Projet',
        milestones: 'Jalons'
      },
      legal: {
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions d\'Utilisation',
        cookies: 'Politique des Cookies',
        security: 'Sécurité'
      },
      newsletter: {
        title: 'Restez Informé des Innovations IA',
        description: 'Recevez les dernières informations, mises à jour et contenus exclusifs dans votre boîte de réception.',
        placeholder: 'Entrez votre e-mail',
        subscribe: 'S\'abonner'
      },
      copyright: 'Tous droits réservés.'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '会社概要',
      services: 'サービス',
      team: 'チーム',
      portfolio: 'ポートフォリオ',
      testimonials: 'お客様の声',
      contact: 'お問い合わせ',
      projectBuilder: 'プロジェクトビルダー',
      milestones: 'マイルストーン',
      voiceBot: '音声AI'
    },
    home: {
      hero: {
        title: 'AI革新の未来を切り拓く',
        subtitle: 'ビジネスを変革し、業界に革命をもたらすエンタープライズグレードの人工知能ソリューション',
        cta: 'AIの旅を始める',
        secondary: 'ソリューションを探索'
      },
      features: {
        title: '業界リーダーがNexarizaを選ぶ理由',
        items: [
          {
            title: '先進的なAI技術',
            description: '最先端の機械学習モデルとニューラルネットワーク'
          },
          {
            title: 'エンタープライズグレードセキュリティ',
            description: '軍事レベルの暗号化とコンプライアンス基準'
          },
          {
            title: 'スケーラブルソリューション',
            description: 'スタートアップのMVPからエンタープライズレベルの実装まで'
          },
          {
            title: '24/7エキスパートサポート',
            description: '専任のAIスペシャリストと技術サポートチーム'
          }
        ]
      }
    },
    about: {
      title: 'Nexarizaについて',
      content: '私たちは人工知能のパイオニアであり、可能性の境界を押し広げる変革的なソリューションを創造しています。',
      mission: {
        title: '私たちの使命',
        content: 'AI技術を民主化し、企業が前例のないレベルの効率性と革新を達成できるよう支援すること。'
      },
      values: {
        title: '私たちの価値観',
        items: [
          'イノベーションの卓越性',
          '倫理的AI開発',
          'クライアント成功重視',
          '継続的学習'
        ]
      },
      technology: {
        title: '私たちの技術哲学',
        content: '私たちは、強力であるだけでなく、透明で倫理的で持続可能なAIソリューションの構築を信じています。'
      },
      cta: '私たちと一緒に働く準備はできていますか？'
    },
    services: {
      title: 'AIサービス＆ソリューション',
      subtitle: 'お客様のビジネスニーズに合わせた包括的な人工知能ソリューション',
      items: [
        {
          name: 'AIチャットボット',
          description: '顧客体験を向上させるインテリジェントな対話エージェント',
          features: ['自然言語処理', '24/7対応', '多言語サポート', '統合対応']
        },
        {
          name: '音声AI',
          description: '高度な音声認識と合成技術',
          features: ['リアルタイム処理', '音声クローニング', '音声分析', 'カスタムウェイクワード']
        },
        {
          name: 'コンピュータビジョン',
          description: '物体検出と画像解析のための視覚的知能',
          features: ['リアルタイム検出', 'カスタムモデル訓練', 'エッジコンピューティング', '高精度']
        },
        {
          name: '予測分析',
          description: '戦略的意思決定のためのデータ駆動型洞察',
          features: ['機械学習モデル', 'リアルタイムダッシュボード', 'トレンド分析', 'リスク評価']
        }
      ]
    },
    team: {
      title: '私たちのチーム',
      subtitle: '人工知能の未来を推進する世界クラスのAI専門家、研究者、エンジニア'
    },
    portfolio: {
      title: '私たちのポートフォリオ',
      subtitle: '人工知能における私たちの専門知識と革新を示すフラッグシップAIプロジェクト'
    },
    testimonials: {
      title: 'お客様の声',
      subtitle: '私たちのAIソリューションでビジネスを変革した業界リーダーの声をお聞きください'
    },
    projectBuilder: {
      title: 'AIプロジェクトビルダー',
      subtitle: '5つの簡単なステップでカスタムAIソリューションを構築し、即座に見積もりを取得'
    },
    milestones: {
      title: 'プロジェクトマイルストーン',
      subtitle: 'AIプロジェクトの進捗、マイルストーン、支払い、相談履歴を追跡'
    },
    voiceAI: {
      title: '音声AIアシスタント',
      subtitle: 'リアルタイム音声インタラクション、多言語サポート、インテリジェントな応答で会話AIの未来を体験'
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'AIでビジネスを変革する準備はできていますか？プロジェクトについて話し合いましょう。',
      form: {
        name: 'フルネーム',
        email: 'メールアドレス',
        company: '会社名',
        message: 'メッセージ',
        send: 'メッセージを送信'
      },
      info: {
        office: 'グローバル本社',
        hours: '営業時間',
        phone: '電話',
        email: 'メール'
      }
    },
    footer: {
      description: '世界中の企業を変革するエンタープライズグレードの人工知能ソリューションを提供する、AI革新のリーディングカンパニー。',
      address: 'サンフランシスコ, CA 94105, アメリカ',
      sections: {
        company: '会社',
        services: 'サービス',
        resources: 'リソース',
        legal: '法的事項'
      },
      company: {
        about: '会社概要',
        team: '私たちのチーム',
        careers: 'キャリア',
        contact: 'お問い合わせ'
      },
      services: {
        chatbots: 'AIチャットボット',
        voiceAI: '音声AI',
        computerVision: 'コンピュータビジョン',
        analytics: '予測分析'
      },
      resources: {
        portfolio: 'ポートフォリオ',
        testimonials: 'お客様の声',
        projectBuilder: 'プロジェクトビルダー',
        milestones: 'マイルストーン'
      },
      legal: {
        privacy: 'プライバシーポリシー',
        terms: '利用規約',
        cookies: 'クッキーポリシー',
        security: 'セキュリティ'
      },
      newsletter: {
        title: 'AI革新の最新情報をお届け',
        description: '最新の洞察、アップデート、限定コンテンツを受信箱でお受け取りください。',
        placeholder: 'メールアドレスを入力',
        subscribe: '購読する'
      },
      copyright: '全著作権所有。'
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