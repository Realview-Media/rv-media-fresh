/* Shared JavaScript for index.html and vi.html */
let viewer, rotationTimer;

// 1. Panorama Initialization with Safety Guard
window.addEventListener('load', function() {
    const panoElement = document.getElementById('panorama');
    
    // Check if both the element and the library exist
    if (panoElement && typeof pannellum !== 'undefined') {
        viewer = pannellum.viewer('panorama', { 
            "type": "equirectangular", 
            "panorama": "images/header.jpg", 
            "autoLoad": true, 
            "autoRotate": -2, 
            "showControls": false, 
            "mouseZoom": false, 
            "hfov": 120 
        });

        const restart = () => { if(viewer) viewer.startAutoRotate(-2); };
        
        panoElement.addEventListener('mouseup', () => { clearTimeout(rotationTimer); rotationTimer = setTimeout(restart, 4000); });
        panoElement.addEventListener('touchend', () => { clearTimeout(rotationTimer); rotationTimer = setTimeout(restart, 4000); });
    } else {
        console.warn("Pannellum library or panorama element not found.");
    }
});

// 2. Menu and Modal Logic
function toggleMobileMenu() { 
    const nav = document.getElementById('navLinks');
    if(nav) nav.classList.toggle('active'); 
}

function toggleMenu() { 
    const nav = document.getElementById('navLinks');
    if(nav) nav.classList.remove('active'); 
}

function openModal() { 
    const modal = document.getElementById('quoteModal');
    if(modal) modal.style.display = 'flex'; 
}

function closeModal() { 
    const modal = document.getElementById('quoteModal');
    if(modal) modal.style.display = 'none'; 
}

function openSuccessModal() { 
    const modal = document.getElementById('successModal');
    if(modal) modal.style.display = 'flex'; 
}

function closeSuccessModal() { 
    const modal = document.getElementById('successModal');
    if(modal) modal.style.display = 'none'; 
}

// 3. Optimized Scroll Logic
window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if(scrollBtn) {
        scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    }

    // Reveal elements on scroll
    document.querySelectorAll('.reveal').forEach(el => { 
        if(el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active'); 
        }
    });
});

// 4. Zalo Link Logic wrapped in DOM check
function updateZaloLinks() {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const zalo = document.getElementById('zalo-link');
    if(zalo) {
        zalo.href = isMobile ? "https://zalo.me/0966888782" : "zalo://conversation?phone=0966888782";
    }
}

// Run once DOM is ready
document.addEventListener('DOMContentLoaded', updateZaloLinks);

// 5. Counter Animation Logic
const counterSection = document.querySelector('.stats-container');
if(counterSection) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
        if (entries[0].isIntersecting) {
            const counters = document.querySelectorAll('.counter');
            const speed = 40; 
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                
                const updateCount = () => {
                    const inc = target / speed;
                    if (count < target) {
                        count += inc;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
            obs.unobserve(counterSection);
        }
    }, { threshold: 0.2 }); // Lowered threshold slightly for better mobile trigger
    counterObserver.observe(counterSection);
}