// The Joyful Times - Interactive Elements

document.addEventListener('DOMContentLoaded', () => {
    console.log("The Joyful Times is hot off the press!");
    
    // Add a simple fade-in for the articles
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        article.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        
        setTimeout(() => {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, 100);
    });

    // Auto-trigger celebration on load
    setTimeout(() => {
        createConfetti();
    }, 1500);
});

function createConfetti() {
    const colors = ['#8b0000', '#2c2c2c', '#d4af37', '#e2d2a2', '#ffffff'];
    const container = document.body;
    
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        
        const size = Math.random() * 12 + 6;
        confetti.style.position = 'fixed';
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size * 0.6}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.zIndex = '5000';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = '1px';
        
        container.appendChild(confetti);

        const animation = confetti.animate([
            { 
                transform: 'translate3d(0,0,0) rotate(0deg)', 
                opacity: 1 
            },
            { 
                transform: `translate3d(${Math.random() * 400 - 200}px, 105vh, 0) rotate(${Math.random() * 1500}deg)`, 
                opacity: 0 
            }
        ], {
            duration: Math.random() * 4000 + 3000,
            easing: 'cubic-bezier(0, .8, .5, 1)',
            fill: 'forwards'
        });

        animation.onfinish = () => confetti.remove();
    }
}
