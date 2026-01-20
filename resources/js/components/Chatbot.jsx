import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);
    const { t, i18n } = useTranslation();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Message de bienvenue initial
        if (isOpen && messages.length === 0) {
            const welcomeMessage = {
                id: Date.now(),
                text: t('chatbot.welcome'),
                sender: 'bot'
            };
            setMessages([welcomeMessage]);
        }
    }, [isOpen, t]);

    // Base de connaissances sur le CDDA
    const getKnowledgeBase = () => {
        const lang = i18n.language;
        
        if (lang === 'ar') {
            return {
                greetings: ['مرحبا', 'السلام عليكم', 'أهلا', 'مرحبا بك'],
                about: ['من نحن', 'عن النادي', 'ما هو CDDA', 'ما هو CDDAM', 'النادي', 'المؤسس', 'هاني الحراق'],
                activities: ['الأنشطة', 'الفعاليات', 'الأنشطة', 'الشبكات', 'المؤتمرات', 'الجمعيات', 'المنتديات'],
                membership: ['العضوية', 'الانضمام', 'كيف أنضم', 'باقات العضوية', 'الاشتراك'],
                contact: ['اتصل بنا', 'التواصل', 'معلومات الاتصال', 'البريد الإلكتروني'],
                partners: ['الشركاء', 'الشراكة', 'الشركاء'],
                commissions: ['اللجان', 'اللجنة'],
                blog: ['المدونة', 'المقالات', 'الأخبار'],
                testimonials: ['الشهادات', 'التوصيات']
            };
        } else if (lang === 'en') {
            return {
                greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
                about: ['who are you', 'what is cddam', 'what is cdda', 'about', 'founder', 'hani el harraq'],
                activities: ['activities', 'events', 'networking', 'congress', 'assemblies', 'forums'],
                membership: ['membership', 'join', 'how to join', 'membership packs', 'subscribe'],
                contact: ['contact', 'contact us', 'email', 'phone', 'address'],
                partners: ['partners', 'partnership'],
                commissions: ['commissions', 'commission'],
                blog: ['blog', 'articles', 'news'],
                testimonials: ['testimonials', 'testimonies']
            };
        } else {
            return {
                greetings: ['bonjour', 'salut', 'bonsoir', 'bonne journée', 'coucou'],
                about: ['qui êtes-vous', 'qu\'est-ce que cddam', 'qu\'est-ce que cdda', 'à propos', 'fondateur', 'hani el harraq'],
                activities: ['activités', 'activité', 'événements', 'networking', 'congrès', 'assemblées', 'forums'],
                membership: ['adhésion', 'rejoindre', 'comment adhérer', 'packs adhésions', 's\'abonner'],
                contact: ['contact', 'nous contacter', 'email', 'téléphone', 'adresse'],
                partners: ['partenaires', 'partenariat'],
                commissions: ['commissions', 'commission'],
                blog: ['blog', 'articles', 'actualités'],
                testimonials: ['témoignages', 'témoignage']
            };
        }
    };

    const getResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase().trim();
        const knowledgeBase = getKnowledgeBase();
        const lang = i18n.language;

        // Vérifier si la question est hors sujet
        const offTopicKeywords = lang === 'ar' 
            ? ['طقس', 'رياضة', 'سياسة', 'أخبار عامة', 'موسيقى', 'أفلام']
            : lang === 'en'
            ? ['weather', 'sports', 'politics', 'general news', 'music', 'movies', 'cooking', 'recipe']
            : ['météo', 'sport', 'politique', 'actualités générales', 'musique', 'cinéma', 'cuisine', 'recette'];

        const isOffTopic = offTopicKeywords.some(keyword => lowerMessage.includes(keyword));
        
        if (isOffTopic) {
            return t('chatbot.offTopic');
        }

        // Salutations
        if (knowledgeBase.greetings.some(greeting => lowerMessage.includes(greeting))) {
            return t('chatbot.greetingResponse');
        }

        // À propos / Qui sommes-nous
        if (knowledgeBase.about.some(keyword => lowerMessage.includes(keyword))) {
            return t('chatbot.aboutResponse');
        }

        // Activités
        if (knowledgeBase.activities.some(keyword => lowerMessage.includes(keyword))) {
            return t('chatbot.activitiesResponse');
        }

        // Adhésion
        if (knowledgeBase.membership.some(keyword => lowerMessage.includes(keyword))) {
            return t('chatbot.membershipResponse');
        }

        // Contact
        if (knowledgeBase.contact.some(keyword => lowerMessage.includes(keyword))) {
            return t('chatbot.contactResponse');
        }

        // Partenaires
        if (knowledgeBase.partners.some(keyword => lowerMessage.includes(keyword))) {
            return t('chatbot.partnersResponse');
        }

        // Commissions
        if (knowledgeBase.commissions.some(keyword => lowerMessage.includes(keyword))) {
            return t('chatbot.commissionsResponse');
        }

        // Blog
        if (knowledgeBase.blog.some(keyword => lowerMessage.includes(keyword))) {
            return t('chatbot.blogResponse');
        }

        // Témoignages
        if (knowledgeBase.testimonials.some(keyword => lowerMessage.includes(keyword))) {
            return t('chatbot.testimonialsResponse');
        }

        // Réponse par défaut
        return t('chatbot.defaultResponse');
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Simuler un délai de réponse
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: getResponse(inputValue),
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        }, 500);
    };

    return (
        <>
            {/* Bouton flottant */}
            <button
                className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={t('chatbot.toggle')}
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'}`}></i>
            </button>

            {/* Fenêtre du chatbot */}
            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <div className="chatbot-header-content">
                            <div className="chatbot-avatar">
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className="chatbot-header-text">
                                <h3>{t('chatbot.title')}</h3>
                                <span className="chatbot-status">{t('chatbot.status')}</span>
                            </div>
                        </div>
                        <button
                            className="chatbot-close"
                            onClick={() => setIsOpen(false)}
                            aria-label={t('chatbot.close')}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`chatbot-message ${message.sender === 'user' ? 'user' : 'bot'}`}
                            >
                                <div className="chatbot-message-content">
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input-form" onSubmit={handleSend}>
                        <input
                            type="text"
                            className="chatbot-input"
                            placeholder={t('chatbot.placeholder')}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="chatbot-send">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;

