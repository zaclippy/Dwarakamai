// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initOpeningAnimation();
    initMobileMenu();
    initSmoothScrolling();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initParallaxEffects();
    initMenuAnimations();
});

// Opening Animation Sequence
function initOpeningAnimation() {
    const namasteGreeting = document.querySelector('.namaste-greeting');
    const heroContent = document.querySelector('.hero-content');
    
    // Ensure the namaste animation plays on page load
    if (namasteGreeting) {
        namasteGreeting.style.display = 'block';
        
        // Add a subtle entrance sound effect (optional)
        setTimeout(() => {
            // Add a gentle fade-in effect for the rest of the content
            const otherElements = heroContent.querySelectorAll('*:not(.namaste-greeting)');
            otherElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 3000);
    }
}

// Enhanced Parallax Effects
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const menuSection = document.querySelector('.menu-preview');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Floating elements in hero
        const decorativeElements = document.querySelectorAll('.hero-decorative::before, .hero-decorative::after');
        decorativeElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoadingScreen();
    initOpeningAnimation();
    initMobileMenu();
    initSmoothScrolling();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initParallaxEffects();
    initMenuAnimations();
    initScrollIndicator();
    initBackToTop();
    initSpiceParticles();
});

// Loading Screen
function initLoadingScreen() {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">
                <img src="dwarakamai-removebg.png" alt="Dwarakamai" class="logo-animation">
            </div>
            <div class="loading-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;
    document.body.appendChild(loadingOverlay);
    
    // Add loading screen styles
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loading-overlay.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .loading-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
        
        .loading-logo {
            position: relative;
        }
        
        .logo-animation {
            width: 200px;
            height: auto;
            animation: logoEntrance 2s ease-out;
            filter: drop-shadow(0 10px 30px rgba(0,0,0,0.3));
        }
        
        @keyframes logoEntrance {
            0% {
                transform: scale(0.3) rotate(-10deg);
                opacity: 0;
            }
            50% {
                transform: scale(1.1) rotate(2deg);
                opacity: 0.8;
            }
            100% {
                transform: scale(1) rotate(0deg);
                opacity: 1;
            }
        }
        
        .loading-dots {
            display: flex;
            gap: 8px;
        }
        
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: white;
            animation: dotPulse 1.5s infinite;
        }
        
        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes dotPulse {
            0%, 60%, 100% {
                transform: scale(1);
                opacity: 1;
            }
            30% {
                transform: scale(1.2);
                opacity: 0.7;
            }
        }
        
        @media (max-width: 768px) {
            .logo-animation {
                width: 150px;
            }
        }
    `;
    document.head.appendChild(loadingStyles);
    
    // Hide loading screen after 2.5 seconds
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
        setTimeout(() => {
            loadingOverlay.remove();
            loadingStyles.remove();
        }, 500);
    }, 2500);
}

// Opening Animation Sequence
function initOpeningAnimation() {
    const heroContent = document.querySelector('.hero-content');
    
    // Add a gentle fade-in effect for the hero content after loading screen
    if (heroContent) {
        // Initially hide hero content
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        // Show hero content after loading screen
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
            
            // Animate individual elements
            const elements = heroContent.querySelectorAll('h1, p, .traditional-blessing, .hero-buttons');
            elements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 2800); // Start animation just before loading screen ends
    }
}

// Scroll Progress Indicator
function initScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(scrollIndicator);
    
    const scrollProgress = scrollIndicator.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Spice Particles Effect
function initSpiceParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'spice-particles';
    hero.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'spice-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
}

// Enhanced Parallax Effects
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax effect for hero
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Parallax for other sections
        sections.forEach((section, index) => {
            const rate = scrolled * -0.2;
            const offset = index * 0.1;
            section.style.transform = `translateY(${rate * offset}px)`;
        });
    });
}

// Enhanced Menu Animations
function initMenuAnimations() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.classList.add('animate-in');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px) scale(0.95)';
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(item);
    });
    
    // Enhanced hover effects
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px) scale(1.02)';
            item.style.boxShadow = '0 20px 50px rgba(255,107,53,0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Background Change on Scroll
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'linear-gradient(135deg, rgba(255,107,53,0.95), rgba(255,140,66,0.95))';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, var(--primary-orange), var(--secondary-orange))';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Scroll Animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.feature, .menu-item, .contact-item, .hours-table');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Contact Form Handling (if needed in future)
function initContactForm() {
    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track phone clicks for analytics
            console.log('Phone number clicked:', this.getAttribute('href'));
        });
    });
}

// Current Time Display for Opening Hours
function updateCurrentTime() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    const openingHours = {
        0: { start: [12, 0], end: [22, 30] }, // Sunday
        1: { start: [12, 0], end: [15, 0], start2: [17, 0], end2: [23, 0] }, // Monday
        2: { start: [12, 0], end: [15, 0], start2: [17, 0], end2: [23, 0] }, // Tuesday
        3: { start: [12, 0], end: [15, 0], start2: [17, 0], end2: [23, 0] }, // Wednesday
        4: { start: [12, 0], end: [23, 0] }, // Thursday
        5: { start: [12, 0], end: [23, 0] }, // Friday
        6: { start: [12, 0], end: [23, 0] }  // Saturday
    };
    
    const todayHours = openingHours[day];
    const currentTime = hour * 60 + minute;
    
    let isOpen = false;
    
    if (todayHours) {
        const startTime = todayHours.start[0] * 60 + todayHours.start[1];
        const endTime = todayHours.end[0] * 60 + todayHours.end[1];
        
        if (todayHours.start2 && todayHours.end2) {
            const startTime2 = todayHours.start2[0] * 60 + todayHours.start2[1];
            const endTime2 = todayHours.end2[0] * 60 + todayHours.end2[1];
            
            isOpen = (currentTime >= startTime && currentTime <= todayHours.end[0] * 60 + todayHours.end[1]) ||
                     (currentTime >= startTime2 && currentTime <= endTime2);
        } else {
            isOpen = currentTime >= startTime && currentTime <= endTime;
        }
    }
    
    // Add status indicator to hours section
    const hoursSection = document.querySelector('.hours-content');
    if (hoursSection) {
        let statusElement = document.querySelector('.restaurant-status');
        if (!statusElement) {
            statusElement = document.createElement('div');
            statusElement.className = 'restaurant-status';
            statusElement.style.cssText = `
                text-align: center;
                padding: 1rem;
                margin-bottom: 2rem;
                border-radius: 10px;
                font-weight: 600;
                font-size: 1.1rem;
            `;
            hoursSection.insertBefore(statusElement, hoursSection.firstChild);
        }
        
        if (isOpen) {
            statusElement.textContent = '🟢 We are currently OPEN!';
            statusElement.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
            statusElement.style.color = 'white';
        } else {
            statusElement.textContent = '🔴 We are currently CLOSED';
            statusElement.style.background = 'linear-gradient(45deg, #f44336, #ff9800)';
            statusElement.style.color = 'white';
        }
    }
}

// Update time on page load and every minute
updateCurrentTime();
setInterval(updateCurrentTime, 60000);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Preload images for better performance
function preloadImages() {
    const images = [
        'dwarakamai.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effects to menu items
function initMenuHoverEffects() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize menu hover effects
initMenuHoverEffects();

// Add click to call functionality
function initClickToCall() {
    const phoneNumber = '07776778779';
    const callButtons = document.querySelectorAll('.btn-secondary');
    
    callButtons.forEach(button => {
        if (button.textContent.includes('Order Now')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = `tel:${phoneNumber}`;
            });
        }
    });
}

initClickToCall();

// Add map interaction
function initMapInteraction() {
    const mapContainer = document.querySelector('.contact-map');
    
    if (mapContainer) {
        mapContainer.addEventListener('click', function() {
            // Open Google Maps with restaurant location
            const address = '29 Augusta Pl, Leamington Spa, CV32 5EL';
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
            window.open(mapsUrl, '_blank');
        });
        
        mapContainer.style.cursor = 'pointer';
        mapContainer.title = 'Click to open in Google Maps';
    }
}

initMapInteraction();

// Add seasonal greetings or special offers
function addSeasonalContent() {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    
    // Add special messages for festivals or seasons
    let specialMessage = '';
    
    // Diwali (approximate - varies each year)
    if (month === 10 && day >= 1 && day <= 15) {
        specialMessage = '🪔 Happy Diwali! Celebrate with our special festive menu!';
    }
    // Christmas
    else if (month === 11 && day >= 20) {
        specialMessage = '🎄 Merry Christmas! Enjoy our special holiday menu!';
    }
    // New Year
    else if (month === 0 && day <= 7) {
        specialMessage = '🎉 Happy New Year! Start the year with authentic flavors!';
    }
    
    if (specialMessage) {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            const specialBanner = document.createElement('div');
            specialBanner.className = 'special-banner';
            specialBanner.innerHTML = specialMessage;
            specialBanner.style.cssText = `
                background: linear-gradient(45deg, var(--primary-yellow), var(--gold));
                color: var(--text-dark);
                padding: 1rem;
                border-radius: 10px;
                margin-top: 1rem;
                font-weight: 600;
                animation: pulse 2s infinite;
            `;
            heroSubtitle.parentNode.insertBefore(specialBanner, heroSubtitle.nextSibling);
        }
    }
}

addSeasonalContent();

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .loaded {
        opacity: 1;
    }
    
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);