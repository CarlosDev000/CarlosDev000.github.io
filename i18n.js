/**
 * I18N SYSTEM - CARLOS RUBIANO PORTFOLIO
 * Detección automática de idioma + selector manual
 */

(function() {
    'use strict';

    // ===== CONFIGURACIÓN =====
    const CONFIG = {
        defaultLang: 'es',
        storageKey: 'portfolio-lang',
        supportedLangs: ['es', 'en']
    };

    // ===== TRADUCCIONES =====
    const translations = {
        es: {
            // Header
            'nav.about': 'SOBRE MÍ',
            'nav.projects': 'PROYECTOS',
            'nav.skills': 'HABILIDADES',
            'nav.experience': 'EXPERIENCIA',
            'nav.contact': 'CONTACTO',
            'header.subtitle': 'INGENIERO DE SOFTWARE | DESARROLLADOR BACKEND',
            'header.description': 'Ingeniero en Telemática con enfoque en desarrollo backend. Transformo requerimientos complejos en soluciones robustas usando Java (Spring Boot), Python y TypeScript, con una sólida base en infraestructura Linux.',
            
            // About
            'about.title': 'SOBRE MÍ',
            'about.text1': 'Ingeniero en Telemática y Tecnólogo en Sistematización de Datos, con enfoque en desarrollo backend y arquitectura de sistemas escalables. Me especializo en transformar requerimientos complejos en soluciones técnicas robustas utilizando Java (Spring Boot), Python y TypeScript, con una sólida base en administración de servidores Linux.',
            'about.highlights': 'Me destaco por:',
            'about.item1': 'Desarrollo backend con Java (Spring Boot), Python y TypeScript.',
            'about.item2': 'Administración de servidores Linux y optimización de plataformas empresariales.',
            'about.item3': 'Integración de APIs RESTful, automatización de flujos de trabajo y gestión de bases de datos relacionales.',
            'about.item4': 'Mentalidad analítica, aprendizaje continuo y enfoque en la seguridad y estabilidad de los sistemas.',
            
            // Projects
            'projects.title': 'PROYECTOS',
            'projects.demo': 'VER_DEMO',
            'projects.code': 'VER_CÓDIGO',
            'projects.fallback_title1': 'EXTRACCIÓN DE DATOS',
            'projects.fallback_desc1': 'Investigación y desarrollo de soluciones para extraer información de documentos en diversos formatos, aplicando técnicas de programación en Java.',
            'projects.fallback_tech1': 'JAVA',
            'projects.fallback_source1': 'Privada',
            'projects.fallback_result1': '+40% eficiencia',
            'projects.fallback_title2': 'OCR TESSERACT',
            'projects.fallback_desc2': 'Implementación de un sistema de digitalización de documentos mediante OCR, integrando Tesseract en entornos Java.',
            'projects.fallback_tech2': 'JAVA',
            'projects.fallback_source2': 'Privada',
            'projects.fallback_result2': '+25% conversión',
            'projects.fallback_title3': 'ANALIZADOR DE DATOS',
            'projects.fallback_desc3': 'Herramienta de análisis de datos para procesamiento de grandes volúmenes de información con visualizaciones interactivas y reportes automatizados.',
            'projects.fallback_tech3': 'PYTHON',
            'projects.fallback_source3': 'Uso interno',
            'projects.fallback_result3': 'Ahorro de 20h/semana',
            
            
            // Skills
            'skills.title': 'HABILIDADES TÉCNICAS',
            
            // Experience
            'experience.title': 'EXPERIENCIA PROFESIONAL',

            'experience.job1_title': 'INGENIERO DE SOFTWARE',
            'experience.job1_company': 'Bridgetech | Alfresco',
            'experience.job1_desc': 'Desarrollé e implementé módulos en Java (Spring Boot) con Tesseract OCR para extracción automatizada de información. Configuré y optimicé entornos Alfresco ECM sobre Linux CentOS 8, y colaboré en la migración de flujos de trabajo con integración de APIs RESTful de terceros.',
            'experience.job2_title': 'ASISTENTE TÉCNICO DE SISTEMAS',
            'experience.job2_company': 'Universidad Distrital Francisco José de Caldas',
            'experience.job2_desc': 'Ejecuté pruebas de concepto (PoC) para implementación de telefonía IP con Asterisk sobre Linux. Realicé mantenimiento preventivo de servidores y resolución de incidencias en redes IPv4/IPv6. Colaboré en la migración de la plataforma web institucional con HTML5 y JavaScript.',
            'experience.job3_title': 'ANALISTA DE DATOS Y AUTOMATIZACIÓN',
            'experience.job3_company': 'Atento',
            'experience.job3_desc': 'Desarrollé scripts y macros en VBA (Excel) para automatizar limpieza y consolidación de grandes volúmenes de datos. Normalicé y administré bases de datos operativas (Microsoft Access, AS/400) e implementé dashboards para seguimiento de KPIs.',

            
            // Contact
            'contact.title': 'CONTACTO',
            'contact.name': 'NOMBRE',
            'contact.name_placeholder': 'Ej: Carlos Rubiano',
            'contact.email': 'EMAIL',
            'contact.email_placeholder': 'Ej: carlos@ejemplo.com',
            'contact.message': 'MENSAJE',
            'contact.message_placeholder': 'Escribe tu mensaje aquí...',
            'contact.submit': 'ENVIAR MENSAJE',
            'contact.sending': 'ENVIANDO...',
            'contact.find_me': 'ENCUÉNTRAME EN:',
            'contact.footer_button': 'Contáctame',
            
            // Footer
            'footer.rights': 'Todos los derechos reservados.',
            'footer.privacy': 'Política de privacidad',
            'footer.terms': 'Términos de uso',
            'footer.sitemap': 'Mapa del sitio',
            
            // Feedback
            'feedback.success': 'Mensaje enviado correctamente. Te contactaré pronto.',
            'feedback.error_endpoint': 'Error: Debes configurar el endpoint de Formspree en el formulario.',
            'feedback.error_generic': 'Error: No se pudo enviar el mensaje. Intenta de nuevo.',
            'feedback.error_connection': 'Error de conexión. Por favor, intenta de nuevo más tarde.',
            
            // Language selector
            'lang.es': 'ES',
            'lang.en': 'EN'
        },
        
        en: {
            // Header
            'nav.about': 'ABOUT',
            'nav.projects': 'PROJECTS',
            'nav.skills': 'SKILLS',
            'nav.experience': 'EXPERIENCE',
            'nav.contact': 'CONTACT',
            'header.subtitle': 'SOFTWARE ENGINEER | BACKEND DEVELOPER',
            'header.description': 'Telematics Engineer focused on backend development. I transform complex requirements into robust solutions using Java (Spring Boot), Python, and TypeScript, with a solid foundation in Linux infrastructure.',
            
            // About
            'about.title': 'ABOUT ME',
            'about.text1': 'Telematics Engineer and Data Systems Technologist, with a focus on backend development and scalable systems architecture. I specialize in transforming complex requirements into robust technical solutions using Java (Spring Boot), Python, and TypeScript, with a solid foundation in Linux server administration.',
            'about.highlights': 'I stand out for:',
            'about.item1': 'Backend programming skills and database management.',
            'about.item2': 'Linux Server Administration and Enterprise Platform Optimization.',
            'about.item3': 'RESTful API integration, workflow automation, and relational database management.',
            'about.item4': 'An analytical mindset, continuous learning, and a focus on system security and stability.',
            
            // Projects
            'projects.title': 'PROJECTS',
            'projects.demo': 'VIEW_DEMO',
            'projects.code': 'VIEW_CODE',
            'projects.fallback_title1': 'DATA EXTRACTION',
            'projects.fallback_desc1': 'Research and development of solutions to extract information from documents in various formats, applying Java programming techniques.',
            'projects.fallback_tech1': 'JAVA',
            'projects.fallback_source1': 'Private',
            'projects.fallback_result1': '+40% efficiency',
            'projects.fallback_title2': 'OCR TESSERACT',
            'projects.fallback_desc2': 'Implementation of a document digitization system using OCR, integrating Tesseract in Java environments.',
            'projects.fallback_tech2': 'JAVA',
            'projects.fallback_source2': 'Private',
            'projects.fallback_result2': '+25% conversion',
            'projects.fallback_title3': 'DATA ANALYZER',
            'projects.fallback_desc3': 'Data analysis tool for processing large volumes of information with interactive visualizations and automated reports.',
            'projects.fallback_tech3': 'PYTHON',
            'projects.fallback_source3': 'Internal use',
            'projects.fallback_result3': '20h/week savings',
            
            
            // Skills
            'skills.title': 'TECHNICAL SKILLS',
            
            // Experience
            'experience.title': 'PROFESSIONAL EXPERIENCE',

            'experience.job1_title': 'SOFTWARE ENGINEER',
            'experience.job1_company': 'Bridgetech | Alfresco',
            'experience.job1_desc': 'I developed and implemented Java (Spring Boot) modules using Tesseract OCR for automated data extraction. I configured and optimized Alfresco ECM environments on Linux CentOS 8, and collaborated on the migration of workflows involving the integration of third-party RESTful APIs.',
            'experience.job2_title': 'SYSTEMS TECHNICAL ASSISTANT',
            'experience.job2_company': 'Universidad Distrital Francisco José de Caldas',
            'experience.job2_desc': 'I conducted proof-of-concept (PoC) tests for the implementation of IP telephony using Asterisk on Linux. I performed preventive maintenance on servers and resolved issues on IPv4/IPv6 networks. I helped migrate the institutional web platform to HTML5 and JavaScript.',
            'experience.job3_title': 'DATA AND AUTOMATION ANALYST',
            'experience.job3_company': 'Atento',
            'experience.job3_desc': 'I developed VBA (Excel) scripts and macros to automate the cleaning and consolidation of large volumes of data. I standardized and managed operational databases (Microsoft Access, AS/400) and implemented dashboards for tracking KPIs.',

            
            // Contact
            'contact.title': 'CONTACT',
            'contact.name': 'NAME',
            'contact.name_placeholder': 'Ex: John Doe',
            'contact.email': 'EMAIL',
            'contact.email_placeholder': 'Ex: john@example.com',
            'contact.message': 'MESSAGE',
            'contact.message_placeholder': 'Write your message here...',
            'contact.submit': 'SEND MESSAGE',
            'contact.sending': 'SENDING...',
            'contact.find_me': 'FIND ME ON:',
            'contact.footer_button': 'Contact me',
            
            // Footer
            'footer.rights': 'All rights reserved.',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Service',
            'footer.sitemap': 'Sitemap',
            
            // Feedback
            'feedback.success': 'Message sent successfully. I will contact you soon.',
            'feedback.error_endpoint': 'Error: You must configure the Formspree endpoint in the form.',
            'feedback.error_generic': 'Error: Could not send message. Please try again.',
            'feedback.error_connection': 'Connection error. Please try again later.',
            
            // Language selector
            'lang.es': 'ES',
            'lang.en': 'EN'
        }
    };

    // ===== ESTADO =====
    let currentLang = CONFIG.defaultLang;

    // ===== UTILIDADES =====
    function getStoredLang() {
        try {
            return localStorage.getItem(CONFIG.storageKey);
        } catch (e) {
            return null;
        }
    }

    function storeLang(lang) {
        try {
            localStorage.setItem(CONFIG.storageKey, lang);
        } catch (e) {
            // localStorage no disponible
        }
    }

    function detectBrowserLang() {
        const browserLang = navigator.language || navigator.userLanguage || 'es';
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        if (CONFIG.supportedLangs.includes(langCode)) {
            return langCode;
        }
        
        // Si el idioma del navegador no es soportado, usar español por defecto
        return CONFIG.defaultLang;
    }

    function initLang() {
        const stored = getStoredLang();
        if (stored && CONFIG.supportedLangs.includes(stored)) {
            currentLang = stored;
        } else {
            currentLang = detectBrowserLang();
            storeLang(currentLang);
        }
    }

    // ===== TRADUCCIÓN =====
    function t(key) {
        const langData = translations[currentLang] || translations[CONFIG.defaultLang];
        return langData[key] || key;
    }

    function applyTranslations() {
        // Elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = t(key);
            
            if (translation && translation !== key) {
                // Preservar elementos hijos si existen (como iconos)
                if (el.children.length > 0 && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                    // Solo actualizar el texto manteniendo los hijos
                    const firstChild = el.firstChild;
                    if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
                        firstChild.textContent = translation + ' ';
                    } else {
                        el.prepend(document.createTextNode(translation + ' '));
                    }
                } else {
                    el.textContent = translation;
                }
            }
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = t(key);
            if (translation && translation !== key) {
                el.setAttribute('placeholder', translation);
            }
        });

        // Actualizar botón de idioma
        updateLangButton();
        
        // Actualizar atributo lang del HTML
        document.documentElement.lang = currentLang;
    }

    function updateLangButton() {
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            const otherLang = currentLang === 'es' ? 'en' : 'es';
            langBtn.textContent = t(`lang.${otherLang}`);
            langBtn.setAttribute('aria-label', t('lang.toggle') || `Switch to ${otherLang === 'es' ? 'Spanish' : 'English'}`);
            langBtn.setAttribute('title', t('lang.toggle') || `Switch to ${otherLang === 'es' ? 'Spanish' : 'English'}`);
        }
    }

    function switchLang(newLang) {
        if (!CONFIG.supportedLangs.includes(newLang)) {
            newLang = CONFIG.defaultLang;
        }
        
        currentLang = newLang;
        storeLang(currentLang);
        applyTranslations();

        const grid = document.getElementById("projects-grid");
        if (grid) {
            grid.innerHTML = "";
        }
        
        // Re-renderizar proyectos si están cargados
        if (typeof window.loadProjects === 'function') {
            window.loadProjects();
        }
        
        // Re-inicializar efectos hover si existe
        if (typeof window.initHoverEffects === 'function') {
            window.initHoverEffects();
        }
    }

    // ===== UI COMPONENT =====
    function createLangButton() {
        const btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.className = 'lang-toggle';
        btn.setAttribute('aria-label', 'Switch language');
        btn.title = 'Switch language';
        
        const otherLang = currentLang === 'es' ? 'en' : 'es';
        btn.textContent = t(`lang.${otherLang}`);
        
        btn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            switchLang(newLang);
        });
        
        return btn;
    }

    function initLangButton() {
        // Remover botón existente si hay
        const existing = document.getElementById('lang-toggle');
        if (existing) existing.remove();
        
        const btn = createLangButton();
        
        // Insertar en el header
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            headerContent.appendChild(btn);
        }
    }

    // ===== INICIALIZACIÓN =====
    function init() {
        initLang();
        
        // Esperar a que el DOM esté listo si ya cargó
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                applyTranslations();
                initLangButton();
            });
        } else {
            applyTranslations();
            initLangButton();
        }
    }

    // Exponer funciones globalmente
    window.i18n = {
        t,
        switchLang,
        getCurrentLang: () => currentLang,
        getSupportedLangs: () => CONFIG.supportedLangs,
        applyTranslations,
        updateLangButton,
        translations
    };

    // Iniciar
    init();
})();

