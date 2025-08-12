import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, VolumeX, Send, MessageCircle, Globe, Zap, Brain, Settings } from 'lucide-react';

export const VoiceAI: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai', content: string, timestamp: Date }>>([
    {
      type: 'ai',
      content: 'Hello! I\'m Nexariza\'s AI assistant. You can speak to me or type your questions. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [voiceSettings, setVoiceSettings] = useState({
    rate: 1,
    pitch: 1,
    volume: 0.8
  });

  const recognition = useRef<any>(null);
  const synthesis = useRef<any>(null);

  const languages = [
    { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
    { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧' },
    { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
    { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
    { code: 'de-DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it-IT', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' }
  ];

  const quickQuestions = [
    'What AI services do you offer?',
    'How much does an AI chatbot cost?',
    'What is computer vision?',
    'How long does AI development take?',
    'Do you provide 24/7 support?',
    'Can you integrate with existing systems?'
  ];

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = selectedLanguage;

      recognition.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        handleUserMessage(transcript);
      };

      recognition.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }

    // Initialize speech synthesis
    if ('speechSynthesis' in window) {
      synthesis.current = window.speechSynthesis;
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
      if (synthesis.current) {
        synthesis.current.cancel();
      }
    };
  }, [selectedLanguage]);

  const startListening = () => {
    if (recognition.current && !isListening) {
      setIsListening(true);
      recognition.current.start();
    }
  };

  const stopListening = () => {
    if (recognition.current && isListening) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  const speak = (text: string) => {
    if (synthesis.current && !isSpeaking) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = voiceSettings.rate;
      utterance.pitch = voiceSettings.pitch;
      utterance.volume = voiceSettings.volume;
      utterance.lang = selectedLanguage;

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      synthesis.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthesis.current && isSpeaking) {
      synthesis.current.cancel();
      setIsSpeaking(false);
    }
  };

  const handleUserMessage = (content: string) => {
    const userMessage = {
      type: 'user' as const,
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content);
      const aiMessage = {
        type: 'ai' as const,
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      speak(aiResponse);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('offer')) {
      return 'We offer comprehensive AI services including chatbots, computer vision, voice AI, predictive analytics, medical AI, and custom neural networks. Each solution is tailored to your specific business needs.';
    }
    
    if (input.includes('cost') || input.includes('price') || input.includes('budget')) {
      return 'Our pricing varies based on complexity and requirements. AI chatbots start from $299 per month, while custom solutions begin at $2000. We offer flexible pricing plans to match your budget and needs.';
    }
    
    if (input.includes('computer vision')) {
      return 'Computer vision is AI technology that enables machines to interpret and understand visual information. We use it for object detection, quality control, medical imaging, and automated visual inspection with up to 99.2% accuracy.';
    }
    
    if (input.includes('time') || input.includes('long') || input.includes('development')) {
      return 'Development timelines vary by project complexity. Basic implementations take 2-4 weeks, advanced projects 4-8 weeks, and enterprise solutions 8-16 weeks. We offer rush delivery options for urgent requirements.';
    }
    
    if (input.includes('support')) {
      return 'Yes, we provide 24/7 expert support with dedicated AI specialists. Our support includes technical assistance, performance monitoring, updates, and ongoing optimization to ensure your AI solutions perform optimally.';
    }
    
    if (input.includes('integrate') || input.includes('integration')) {
      return 'Absolutely! We specialize in seamless integration with existing systems. Our solutions work with popular platforms, databases, and APIs. We ensure minimal disruption to your current workflows during implementation.';
    }
    
    return 'Thank you for your question! I\'d be happy to provide more specific information about our AI solutions. You can also contact our team directly for a detailed consultation tailored to your needs.';
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      handleUserMessage(currentMessage);
      setCurrentMessage('');
    }
  };

  const handleQuickQuestion = (question: string) => {
    handleUserMessage(question);
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
                Voice AI Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of conversational AI with real-time voice interaction, multi-language support, and intelligent responses
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Voice-to-Text</h3>
              <p className="text-gray-400 text-sm">Advanced speech recognition with high accuracy</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Text-to-Voice</h3>
              <p className="text-gray-400 text-sm">Natural-sounding voice synthesis</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Multi-Language</h3>
              <p className="text-gray-400 text-sm">Support for 8+ languages and dialects</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">AI Intelligence</h3>
              <p className="text-gray-400 text-sm">Context-aware responses and learning</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Voice AI Interface */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Settings Panel */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Voice Settings
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Speech Rate: {voiceSettings.rate}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={voiceSettings.rate}
                    onChange={(e) => setVoiceSettings(prev => ({ ...prev, rate: parseFloat(e.target.value) }))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pitch: {voiceSettings.pitch}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={voiceSettings.pitch}
                    onChange={(e) => setVoiceSettings(prev => ({ ...prev, pitch: parseFloat(e.target.value) }))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Volume: {Math.round(voiceSettings.volume * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={voiceSettings.volume}
                    onChange={(e) => setVoiceSettings(prev => ({ ...prev, volume: parseFloat(e.target.value) }))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Quick Questions */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Quick Questions</h4>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-sm transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Nexariza AI Assistant</h3>
                      <p className="text-sm text-gray-400">Online • Ready to help</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`} />
                    <span className="text-sm text-gray-400">
                      {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Ready'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'bg-gray-800 text-gray-100'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 flex items-center space-x-2">
                    <input
                      type="text"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message or use voice..."
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      disabled={!currentMessage.trim()}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={isListening ? stopListening : startListening}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isListening
                          ? 'bg-red-600 hover:bg-red-700 animate-pulse'
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </motion.button>
                    
                    <motion.button
                      onClick={isSpeaking ? stopSpeaking : () => {}}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSpeaking
                          ? 'bg-yellow-600 hover:bg-yellow-700 animate-pulse'
                          : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Enterprise-grade voice AI technology with advanced features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-black/50 p-6 rounded-2xl border border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.5%</div>
              <div className="text-gray-300">Speech Recognition Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-black/50 p-6 rounded-2xl border border-gray-700 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">&lt;200ms</div>
              <div className="text-gray-300">Response Latency</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-black/50 p-6 rounded-2xl border border-gray-700 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Supported Languages</div>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-black/50 p-6 rounded-2xl border border-gray-700 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
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
              Ready to Integrate Voice AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your applications with our advanced voice AI technology
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};