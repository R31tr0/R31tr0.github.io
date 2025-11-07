window.addEventListener('scroll', function() {
    const header = document.querySelector('.cyber-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('portal-search');
    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    const portalBtn = document.getElementById('portal-btn');
    const portalOverlay = document.getElementById('portal-overlay');
    const contactsection = document.getElementById('contact');
    
    const searchText = "поиск новых технологий...";
    let typingIndex = 0;
    let isTyping = false;
    
    function startTyping() {
        if (isTyping) return;
        isTyping = true;
        
        function type() {
            if (typingIndex < searchText.length) {
                typingText.textContent += searchText.charAt(typingIndex);
                typingIndex++;
                
                const textWidth = typingText.offsetWidth;
                cursor.style.left = (20 + textWidth) + 'px';
                
                setTimeout(type, 100);
            } else {
                isTyping = false;
                setTimeout(resetTyping, 3000);
            }
        }
        
        type();
    }
    
    function resetTyping() {
        typingText.textContent = '';
        typingIndex = 0;
        cursor.style.left = '20px';
        startTyping();
    }
    
    portalBtn.addEventListener('click', function() {
        this.classList.add('loading');
        
        setTimeout(() => {
            portalOverlay.classList.add('active');
           window.scrollTo(0, 0)
            setTimeout(() => {
                contactsection.removeAttribute('hidden'); 
                portalOverlay.classList.remove('active');
                portalBtn.classList.remove('loading');
                
            }, 5000);
            
        }, 1000);
    });
    
    startTyping();
});
function setupSmoothScroll(buttonSelector, targetSelector) {
    const button = document.querySelector(buttonSelector);
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(targetSelector);
        target.scrollIntoView({ behavior: 'smooth' });
    });
}
setupSmoothScroll('#aboutup','#about');
setupSmoothScroll('#homeup','#home');
setupSmoothScroll('#nav-home', '#home');
setupSmoothScroll('#nav-about', '#about');
setupSmoothScroll('#nav-portal', '#portal');