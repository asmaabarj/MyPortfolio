// Initialisation des particules
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    }
});

// Animation du texte
const typeWriter = new Typed('#typed-text', {
    strings: [
        'Développeuse Full Stack Java/Angular',
        'Spécialiste Spring Boot & Vue.js',
        'Passionnée par l\'Innovation Web',
        'Expert en Développement Cloud'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    cursorChar: '|',
    fadeOut: true
});

// Animation des barres de compétences
document.querySelectorAll('.skill-bar').forEach(bar => {
    const level = bar.dataset.level;
    bar.style.setProperty('--level', `${level}%`);
});

// Effet de parallaxe au défilement
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.parallax').style.transform = 
        `translate3d(0, ${scrolled * 0.5}px, 0)`;
});

// Animation des projets au survol
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
}); 