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

    // Base de connaissances améliorée sur le CDDA
    const getKnowledgeBase = () => {
        const lang = i18n.language;
        
        if (lang === 'ar') {
            return {
                greetings: ['مرحبا', 'السلام عليكم', 'أهلا', 'مرحبا بك', 'صباح الخير', 'مساء الخير'],
                about: {
                    keywords: ['من نحن', 'عن النادي', 'ما هو', 'النادي', 'المؤسس', 'هاني الحراق', 'cdda', 'cddam', 'معنى', 'تعريف', 'ماذا يعني'],
                    patterns: [/ما هو (cdda|cddam)/i, /(cdda|cddam) (هو|يعني|معنى)/i, /ماذا يعني (cdda|cddam)/i, /تعريف (cdda|cddam)/i]
                },
                activities: {
                    keywords: ['الأنشطة', 'الفعاليات', 'الشبكات', 'المؤتمرات', 'الجمعيات', 'المنتديات', 'الأنشطة', 'الحدث'],
                    patterns: [/ما هي الأنشطة/i, /ما الفعاليات/i]
                },
                membership: {
                    keywords: ['العضوية', 'الانضمام', 'كيف أنضم', 'باقات العضوية', 'الاشتراك', 'كيفية الانضمام'],
                    patterns: [/كيف (أنضم|أصبح عضوا)/i, /ما هي (باقات|أنواع) العضوية/i]
                },
                contact: {
                    keywords: ['اتصل بنا', 'التواصل', 'معلومات الاتصال', 'البريد الإلكتروني', 'الهاتف', 'العنوان'],
                    patterns: [/كيف (أتصل|أتواصل)/i, /معلومات (الاتصال|التواصل)/i]
                },
                partners: {
                    keywords: ['الشركاء', 'الشراكة', 'شريك'],
                    patterns: [/من هم الشركاء/i, /ما هي الشراكة/i]
                },
                commissions: {
                    keywords: ['اللجان', 'اللجنة'],
                    patterns: [/ما هي اللجان/i]
                },
                blog: {
                    keywords: ['المدونة', 'المقالات', 'الأخبار', 'مقال'],
                    patterns: [/ما هي المدونة/i]
                },
                testimonials: {
                    keywords: ['الشهادات', 'التوصيات', 'شهادة'],
                    patterns: [/ما هي الشهادات/i]
                }
            };
        } else if (lang === 'en') {
            return {
                greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
                about: {
                    keywords: ['who are you', 'what is', 'about', 'founder', 'hani el harraq', 'cdda', 'cddam', 'meaning', 'definition', 'what does', 'what do'],
                    patterns: [/what (is|does|do) (cdda|cddam) (mean|stand for)/i, /(cdda|cddam) (is|means|stands for)/i, /meaning of (cdda|cddam)/i, /definition of (cdda|cddam)/i, /what (is|does) (cdda|cddam)/i]
                },
                activities: {
                    keywords: ['activities', 'events', 'networking', 'congress', 'assemblies', 'forums', 'activity', 'event'],
                    patterns: [/what (are|do) (the )?activities/i, /what events/i]
                },
                membership: {
                    keywords: ['membership', 'join', 'how to join', 'membership packs', 'subscribe', 'become a member'],
                    patterns: [/how (to|can i) join/i, /what (are|is) (the )?membership (packs|plans)/i]
                },
                contact: {
                    keywords: ['contact', 'contact us', 'email', 'phone', 'address', 'reach'],
                    patterns: [/how (to|can i) contact/i, /contact (information|details)/i]
                },
                partners: {
                    keywords: ['partners', 'partnership', 'partner'],
                    patterns: [/who (are|is) (the )?partners/i, /what (is|are) (the )?partnership/i]
                },
                commissions: {
                    keywords: ['commissions', 'commission'],
                    patterns: [/what (are|is) (the )?commissions/i]
                },
                blog: {
                    keywords: ['blog', 'articles', 'news', 'article'],
                    patterns: [/what (is|is) (the )?blog/i]
                },
                testimonials: {
                    keywords: ['testimonials', 'testimonies', 'testimony'],
                    patterns: [/what (are|is) (the )?testimonials/i]
                }
            };
        } else {
            return {
                greetings: ['bonjour', 'salut', 'bonsoir', 'bonne journée', 'coucou', 'bon matin'],
                about: {
                    keywords: ['qui êtes-vous', 'qu\'est-ce que', 'c\'est quoi', 'que signifie', 'que veut dire', 'à propos', 'fondateur', 'hani el harraq', 'cdda', 'cddam', 'signification', 'définition'],
                    patterns: [/qu['']est-ce que (c['']est|signifie|veut dire) (cdda|cddam)/i, /c['']est quoi (cdda|cddam)/i, /que (signifie|veut dire) (cdda|cddam)/i, /(cdda|cddam) (c['']est|signifie|veut dire)/i, /(cdda|cddam) (qu['']est-ce que|que)/i, /(qu['']est-ce que|que) (cdda|cddam)/i]
                },
                activities: {
                    keywords: ['activités', 'activité', 'événements', 'networking', 'congrès', 'assemblées', 'forums', 'événement'],
                    patterns: [/quelles (sont|sont les) activités/i, /quels (sont|sont les) événements/i]
                },
                membership: {
                    keywords: ['adhésion', 'rejoindre', 'comment adhérer', 'packs adhésions', 's\'abonner', 'devenir membre'],
                    patterns: [/comment (adhérer|rejoindre|devenir membre)/i, /quels (sont|sont les) (packs|niveaux) (d[''])?adhésion/i]
                },
                contact: {
                    keywords: ['contact', 'nous contacter', 'email', 'téléphone', 'adresse', 'joindre'],
                    patterns: [/comment (vous )?contacter/i, /(informations|coordonnées) (de )?contact/i]
                },
                partners: {
                    keywords: ['partenaires', 'partenariat', 'partenaire'],
                    patterns: [/qui (sont|sont les) partenaires/i, /qu['']est-ce que (le )?partenariat/i]
                },
                commissions: {
                    keywords: ['commissions', 'commission'],
                    patterns: [/quelles (sont|sont les) commissions/i]
                },
                blog: {
                    keywords: ['blog', 'articles', 'actualités', 'article'],
                    patterns: [/qu['']est-ce que (le )?blog/i]
                },
                testimonials: {
                    keywords: ['témoignages', 'témoignage'],
                    patterns: [/quels (sont|sont les) témoignages/i]
                }
            };
        }
    };

    const getResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase().trim();
        const knowledgeBase = getKnowledgeBase();
        const lang = i18n.language;

        // Vérifier si la question est hors sujet
        const offTopicKeywords = lang === 'ar' 
            ? ['طقس', 'رياضة', 'سياسة', 'أخبار عامة', 'موسيقى', 'أفلام', 'طبخ', 'وصفة']
            : lang === 'en'
            ? ['weather', 'sports', 'politics', 'general news', 'music', 'movies', 'cooking', 'recipe', 'soccer', 'football']
            : ['météo', 'sport', 'politique', 'actualités générales', 'musique', 'cinéma', 'cuisine', 'recette', 'football', 'foot'];

        const isOffTopic = offTopicKeywords.some(keyword => lowerMessage.includes(keyword));
        
        if (isOffTopic) {
            return t('chatbot.offTopic');
        }

        // Vérifier si le message contient CDDA ou CDDAM (indicateur fort que c'est lié au projet)
        const hasCDDA = /cdda(m)?/i.test(userMessage);
        
        // Salutations
        if (knowledgeBase.greetings.some(greeting => lowerMessage.includes(greeting))) {
            // Si c'est juste une salutation sans question, répondre simplement
            if (lowerMessage.length < 20 && !hasCDDA) {
                return t('chatbot.greetingResponse');
            }
        }

        // À propos / Qui sommes-nous - Détection améliorée
        const aboutPatterns = knowledgeBase.about.patterns || [];
        const aboutMatches = aboutPatterns.some(pattern => pattern.test(userMessage)) ||
                            knowledgeBase.about.keywords.some(keyword => lowerMessage.includes(keyword)) ||
                            (hasCDDA && (lowerMessage.includes('quoi') || lowerMessage.includes('qu\'est') || lowerMessage.includes('que signifie') || lowerMessage.includes('que veut dire') || lowerMessage.includes('c\'est quoi') || lowerMessage.includes('what is') || lowerMessage.includes('what does') || lowerMessage.includes('meaning') || lowerMessage.includes('definition')));
        
        if (aboutMatches) {
            return t('chatbot.aboutResponse');
        }

        // Activités - Détection améliorée
        const activitiesPatterns = knowledgeBase.activities.patterns || [];
        const activitiesMatches = activitiesPatterns.some(pattern => pattern.test(userMessage)) ||
                                 knowledgeBase.activities.keywords.some(keyword => lowerMessage.includes(keyword));
        
        if (activitiesMatches) {
            return t('chatbot.activitiesResponse');
        }

        // Adhésion - Détection améliorée
        const membershipPatterns = knowledgeBase.membership.patterns || [];
        const membershipMatches = membershipPatterns.some(pattern => pattern.test(userMessage)) ||
                                 knowledgeBase.membership.keywords.some(keyword => lowerMessage.includes(keyword));
        
        if (membershipMatches) {
            return t('chatbot.membershipResponse');
        }

        // Contact - Détection améliorée
        const contactPatterns = knowledgeBase.contact.patterns || [];
        const contactMatches = contactPatterns.some(pattern => pattern.test(userMessage)) ||
                              knowledgeBase.contact.keywords.some(keyword => lowerMessage.includes(keyword));
        
        if (contactMatches) {
            return t('chatbot.contactResponse');
        }

        // Partenaires - Détection améliorée
        const partnersPatterns = knowledgeBase.partners.patterns || [];
        const partnersMatches = partnersPatterns.some(pattern => pattern.test(userMessage)) ||
                               knowledgeBase.partners.keywords.some(keyword => lowerMessage.includes(keyword));
        
        if (partnersMatches) {
            return t('chatbot.partnersResponse');
        }

        // Commissions - Détection améliorée
        const commissionsPatterns = knowledgeBase.commissions.patterns || [];
        const commissionsMatches = commissionsPatterns.some(pattern => pattern.test(userMessage)) ||
                                   knowledgeBase.commissions.keywords.some(keyword => lowerMessage.includes(keyword));
        
        if (commissionsMatches) {
            return t('chatbot.commissionsResponse');
        }

        // Blog - Détection améliorée
        const blogPatterns = knowledgeBase.blog.patterns || [];
        const blogMatches = blogPatterns.some(pattern => pattern.test(userMessage)) ||
                          knowledgeBase.blog.keywords.some(keyword => lowerMessage.includes(keyword));
        
        if (blogMatches) {
            return t('chatbot.blogResponse');
        }

        // Témoignages - Détection améliorée
        const testimonialsPatterns = knowledgeBase.testimonials.patterns || [];
        const testimonialsMatches = testimonialsPatterns.some(pattern => pattern.test(userMessage)) ||
                                   knowledgeBase.testimonials.keywords.some(keyword => lowerMessage.includes(keyword));
        
        if (testimonialsMatches) {
            return t('chatbot.testimonialsResponse');
        }

        // Si le message contient CDDA/CDDAM mais n'a pas été catégorisé, répondre sur le CDDAM
        if (hasCDDA) {
            return t('chatbot.aboutResponse');
        }

        // Réponse par défaut - mais seulement si vraiment pas de correspondance
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

