// Contact form alert
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for your message! I will contact you soon.');
    form.reset();
});

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

