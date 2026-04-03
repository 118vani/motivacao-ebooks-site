/**
 * Google Analytics GA4 - Rastreamento de Eventos Personalizados
 * Este arquivo rastreia ações importantes no site
 */

// Rastrear downloads de e-books
document.addEventListener('DOMContentLoaded', function() {
  // Rastrear cliques em botões de download
  document.querySelectorAll('a[href*="/download/"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const ebookName = this.closest('.ebook-card')?.querySelector('h3')?.textContent || 
                       this.closest('.detail-left')?.querySelector('h2')?.textContent || 
                       'Unknown';
      
      gtag('event', 'download_ebook', {
        'event_category': 'engagement',
        'event_label': ebookName,
        'file_name': this.href.split('/').pop(),
        'file_type': 'pdf'
      });
      
      console.log('📊 Analytics: Download rastreado -', ebookName);
    });
  });

  // Rastrear cliques em links de redes sociais
  document.querySelectorAll('a[href*="facebook.com"], a[href*="instagram.com"], a[href*="linkedin.com"], a[href*="tiktok.com"], a[href*="youtube.com"]').forEach(link => {
    link.addEventListener('click', function(e) {
      let socialNetwork = 'unknown';
      
      if (this.href.includes('facebook.com')) socialNetwork = 'facebook';
      else if (this.href.includes('instagram.com')) socialNetwork = 'instagram';
      else if (this.href.includes('linkedin.com')) socialNetwork = 'linkedin';
      else if (this.href.includes('tiktok.com')) socialNetwork = 'tiktok';
      else if (this.href.includes('youtube.com')) socialNetwork = 'youtube';
      
      gtag('event', 'social_click', {
        'event_category': 'engagement',
        'event_label': socialNetwork,
        'social_network': socialNetwork
      });
      
      console.log('📊 Analytics: Clique em rede social -', socialNetwork);
    });
  });

  // Rastrear inscrição em newsletter (se existir formulário)
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      gtag('event', 'newsletter_signup', {
        'event_category': 'conversion',
        'event_label': 'email_newsletter',
        'method': 'email'
      });
      
      console.log('📊 Analytics: Inscrição em newsletter rastreada');
    });
  }

  // Rastrear visualização de páginas de e-books
  document.querySelectorAll('a[href*="/ebook/"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const ebookId = this.href.split('/ebook/')[1];
      
      gtag('event', 'view_ebook', {
        'event_category': 'engagement',
        'event_label': ebookId,
        'ebook_id': ebookId
      });
      
      console.log('📊 Analytics: Visualização de e-book rastreada -', ebookId);
    });
  });

  // Rastrear tempo de permanência (a cada 30 segundos)
  let timeOnPage = 0;
  setInterval(function() {
    timeOnPage += 30;
    
    // Enviar evento a cada 2 minutos
    if (timeOnPage % 120 === 0) {
      gtag('event', 'page_engagement', {
        'event_category': 'engagement',
        'event_label': 'time_on_page',
        'time_seconds': timeOnPage,
        'page_title': document.title
      });
      
      console.log('📊 Analytics: Tempo na página -', timeOnPage, 'segundos');
    }
  }, 30000);

  // Rastrear scroll (quando usuário scrollou 50% e 100%)
  let scrollTracked50 = false;
  let scrollTracked100 = false;

  window.addEventListener('scroll', function() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    if (scrolled >= 50 && !scrollTracked50) {
      gtag('event', 'scroll_depth', {
        'event_category': 'engagement',
        'event_label': '50_percent',
        'scroll_depth': '50%'
      });
      scrollTracked50 = true;
      console.log('📊 Analytics: Scroll 50% rastreado');
    }

    if (scrolled >= 100 && !scrollTracked100) {
      gtag('event', 'scroll_depth', {
        'event_category': 'engagement',
        'event_label': '100_percent',
        'scroll_depth': '100%'
      });
      scrollTracked100 = true;
      console.log('📊 Analytics: Scroll 100% rastreado');
    }
  });

  // Rastrear cliques em botões CTA (Call to Action)
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
      gtag('event', 'button_click', {
        'event_category': 'engagement',
        'event_label': this.textContent.trim(),
        'button_type': this.className,
        'button_text': this.textContent.trim()
      });
      
      console.log('📊 Analytics: Clique em botão -', this.textContent.trim());
    });
  });

  // Rastrear erros de página (404, etc)
  if (document.title.includes('Não Encontrada') || document.title.includes('Not Found')) {
    gtag('event', 'page_error', {
      'event_category': 'error',
      'event_label': '404_not_found',
      'page_path': window.location.pathname
    });
    
    console.log('📊 Analytics: Erro 404 rastreado');
  }

  console.log('✅ Google Analytics GA4 - Rastreamento de eventos inicializado');
});

/**
 * Função auxiliar para rastrear eventos customizados
 * Uso: trackCustomEvent('meu_evento', { propriedade: 'valor' })
 */
function trackCustomEvent(eventName, eventData = {}) {
  gtag('event', eventName, {
    'event_category': eventData.category || 'custom',
    ...eventData
  });
  
  console.log('📊 Analytics: Evento customizado rastreado -', eventName, eventData);
}
