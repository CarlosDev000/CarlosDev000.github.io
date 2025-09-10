/**
 * PORTFOLIO SCRIPT - CARLOS RUBIANO
 * Optimizado y corregido - Diciembre 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== CONFIGURACIÓN GLOBAL =====
    const config = {
        hexSize: 100,
        scrollOffset: 20,
        resizeDebounce: 200
    };

    // ===== VARIABLES GLOBALES =====
    let hexagons = [];
    let animationFrameId = null;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // ===== SISTEMA DE HEXÁGONOS INTERACTIVOS =====
    const createHexGrid = () => {
        const container = document.getElementById('hexagon-bg');
        if (!container) return;
        
        // Limpiar hexágonos existentes
        container.innerHTML = '';
        hexagons = [];
        
        // Configuración de dimensiones
        const HEX_SIZE = config.hexSize;
        const HEX_WIDTH = HEX_SIZE * 2;
        const HEX_HEIGHT = Math.sqrt(3) * HEX_SIZE;
        
        // Calcular número de hexágonos necesarios
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const cols = Math.ceil(viewportWidth / (HEX_WIDTH * 0.75)) + 2;
        const rows = Math.ceil(viewportHeight / (HEX_HEIGHT * 0.5)) + 2;
        
        // Generar grid hexagonal
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const hexContainer = document.createElement('div');
                hexContainer.className = 'hexagon';
                
                // Posicionamiento con offset alternado
                const offsetX = (y % 2) * (HEX_WIDTH * 0.5);
                const posX = x * HEX_WIDTH * 0.75 - offsetX;
                const posY = y * HEX_HEIGHT * 0.5;
                
                // Establecer posición y tamaño
                hexContainer.style.setProperty('--x', `${posX}px`);
                hexContainer.style.setProperty('--y', `${posY}px`);
                hexContainer.style.setProperty('--size', `${HEX_SIZE}px`);
                
                // Capa de highlight
                const hexHighlight = document.createElement('div');
                hexHighlight.className = 'hexagon-highlight';
                hexContainer.appendChild(hexHighlight);
                
                // Añadir al DOM
                container.appendChild(hexContainer);
                
                // Guardar referencia para efectos
                hexagons.push({
                    element: hexHighlight,
                    x: posX + HEX_SIZE,
                    y: posY + HEX_HEIGHT * 0.5,
                    size: HEX_SIZE
                });
            }
        }
        
        updateHighlights();
    };

    const handleMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        animationFrameId = requestAnimationFrame(() => updateHighlights());
    };

    const updateHighlights = () => {
        hexagons.forEach(hex => {
            const dx = mouseX - hex.x;
            const dy = mouseY - hex.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            let intensity = 0;
            const maxDistance = hex.size * 1.5;
            
            if (distance < maxDistance) {
                intensity = 1 - (distance / maxDistance);
                intensity = Math.pow(intensity, 1.5);
                intensity = Math.min(1, intensity * 1.2);
            }
            
            hex.element.style.setProperty('--intensity', intensity);
        });
    };

    // ===== SISTEMA DE SCROLL SUAVE =====
    const initSmoothScroll = () => {
        // Solo para anclas internas (#)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            // Excluir enlaces del footer que no son anclas
            if (!anchor.closest('.footer-links') || anchor.getAttribute('href') === '#') {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    
                    if (targetId === '#') return;
                    
                    const target = document.querySelector(targetId);
                    if (!target) return;
                    
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - config.scrollOffset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar menú móvil si está abierto
                    closeMobileMenu();
                });
            }
        });
    };

    // ===== SISTEMA DE MENÚ MÓVIL =====
    const initMobileMenu = () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const headerNav = document.querySelector('.header-nav');
        
        if (menuToggle && headerNav) {
            menuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                headerNav.classList.toggle('active');
            });
            
            // Cerrar menú al hacer clic en enlaces
            document.querySelectorAll('.header-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        closeMobileMenu();
                    }
                });
            });
            
            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 768 && 
                    headerNav.classList.contains('active') && 
                    !headerNav.contains(e.target) && 
                    !menuToggle.contains(e.target)) {
                    closeMobileMenu();
                }
            });
        }
    };

    const closeMobileMenu = () => {
        const headerNav = document.querySelector('.header-nav');
        if (headerNav) {
            headerNav.classList.remove('active');
        }
    };

    // ===== EFECTOS DE INTERACCIÓN =====
    const initHoverEffects = () => {
        // Efecto hover para tarjetas de proyecto
        document.querySelectorAll('.project-card' && '.skill-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = '#00f0ff';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = '#9d00ff';
            });
        });
        
        // Efecto hover para botones neón
        document.querySelectorAll('.neon-button').forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.boxShadow = '0 0 10px var(--color-primary), 0 0 20px var(--color-primary)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.boxShadow = 'none';
            });
        });
    };

    // ===== SISTEMA DE RESPONSIVIDAD =====
    const initResponsiveHandlers = () => {
        let resizeTimeout;
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                createHexGrid();
            }, config.resizeDebounce);
        });
    };

    // ===== INICIALIZACIÓN =====
    const init = () => {
        createHexGrid();
        initSmoothScroll();
        initMobileMenu();
        initHoverEffects();
        initResponsiveHandlers();
        
        // Solo agregar eventos de mouse si no es dispositivo táctil
        if (!('ontouchstart' in window)) {
            document.addEventListener('mousemove', handleMouseMove);
        }
    };

    // ===== LIMPIEZA =====
    const cleanup = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };

    // Inicializar y configurar limpieza
    init();
    window.addEventListener('beforeunload', cleanup);

    // ===== FUNCIONALIDADES ADICIONALES =====
    
    // Efecto de escritura para títulos
    document.querySelectorAll('[data-text]').forEach(element => {
        const text = element.getAttribute('data-text');
        element.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    });
    
    // Copiar tag de Discord
    window.copyDiscordTag = function(event) {
        if (event) event.stopPropagation();
        const discordTag = "CarlosDev#0000";
        navigator.clipboard.writeText(discordTag);
        
        // Feedback visual
        const icon = event.currentTarget.querySelector('i');
        if (icon) {
            icon.classList.replace('fa-copy', 'fa-check');
            setTimeout(() => icon.classList.replace('fa-check', 'fa-copy'), 2000);
        }
    };
});

// ===== POLYFILLS Y COMPATIBILIDAD =====
// Asegurar compatibilidad con navegadores antiguos
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}