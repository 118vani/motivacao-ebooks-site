// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animação ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.ebook-card, .benefit-card, .testimonial-card, .feature').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Formulário de contato
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validação básica
    if (!name || !email || !subject || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    // Simular envio
    alert('Obrigado por sua mensagem! Responderemos em breve.');
    contactForm.reset();
  });
}

// Ativa link ativo na navegação
function updateActiveLink() {
  const currentPage = window.location.pathname;
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage || 
        (currentPage === '/' && link.getAttribute('href') === '/')) {
      link.classList.add('active');
    }
  });
}

updateActiveLink();

// Efeito de hover nos cards
document.querySelectorAll('.ebook-card, .benefit-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

console.log('Website carregado com sucesso!');
