# 📱 Integração com Redes Sociais

## Suas Redes: Facebook, Instagram, LinkedIn, TikTok, YouTube

Este guia explica como integrar suas redes sociais ao site.

---

## 📋 Passo 1: Criar Contas nas Redes Sociais

Se você ainda não tem, crie contas em:

| Rede | Link | Dica |
|------|------|------|
| **Facebook** | facebook.com | Use nome profissional |
| **Instagram** | instagram.com | Use @motivacao.ebooks |
| **LinkedIn** | linkedin.com | Use perfil profissional |
| **TikTok** | tiktok.com | Use @motivacaoebooks |
| **YouTube** | youtube.com | Use "Motivação para Todas as Idades" |

---

## 🔗 Passo 2: Adicionar Links no Site

### 2.1 Editar o Footer

Edite `src/pages/index.ejs` e adicione links de redes sociais no footer:

```html
<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <!-- ... conteúdo existente ... -->
      
      <div class="footer-section">
        <h4>Redes Sociais</h4>
        <div class="social-links">
          <a href="https://facebook.com/seu-perfil" target="_blank" class="social-link">
            📘 Facebook
          </a>
          <a href="https://instagram.com/seu-perfil" target="_blank" class="social-link">
            📷 Instagram
          </a>
          <a href="https://linkedin.com/company/seu-perfil" target="_blank" class="social-link">
            💼 LinkedIn
          </a>
          <a href="https://tiktok.com/@seu-perfil" target="_blank" class="social-link">
            🎵 TikTok
          </a>
          <a href="https://youtube.com/seu-canal" target="_blank" class="social-link">
            ▶️ YouTube
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
```

### 2.2 Adicionar CSS para Links Sociais

```css
.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
```

---

## 📤 Passo 3: Adicionar Botões de Compartilhamento

### 3.1 Adicionar Botões nas Páginas de E-books

Edite `src/pages/ebook-detail.ejs` e adicione:

```html
<!-- Share Buttons -->
<div class="share-section">
  <h3>Compartilhe Este E-book</h3>
  <div class="share-buttons">
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://motivacao-ebooks.com/ebook/<%= ebook.id %>" 
       target="_blank" class="share-btn facebook">
      📘 Compartilhar no Facebook
    </a>
    <a href="https://twitter.com/intent/tweet?url=https://motivacao-ebooks.com/ebook/<%= ebook.id %>&text=Confira este e-book sobre motivação!" 
       target="_blank" class="share-btn twitter">
      𝕏 Compartilhar no Twitter
    </a>
    <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://motivacao-ebooks.com/ebook/<%= ebook.id %>" 
       target="_blank" class="share-btn linkedin">
      💼 Compartilhar no LinkedIn
    </a>
    <a href="https://wa.me/?text=Confira este e-book sobre motivação: https://motivacao-ebooks.com/ebook/<%= ebook.id %>" 
       target="_blank" class="share-btn whatsapp">
      💬 Compartilhar no WhatsApp
    </a>
  </div>
</div>
```

### 3.2 Adicionar CSS para Botões

```css
.share-section {
  background-color: var(--bg-color);
  padding: 2rem;
  border-radius: 0.75rem;
  margin: 2rem 0;
}

.share-section h3 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.share-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.share-btn {
  display: block;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  color: white;
}

.share-btn.facebook {
  background-color: #1877F2;
}

.share-btn.facebook:hover {
  background-color: #0A66C2;
}

.share-btn.twitter {
  background-color: #000000;
}

.share-btn.twitter:hover {
  background-color: #333333;
}

.share-btn.linkedin {
  background-color: #0A66C2;
}

.share-btn.linkedin:hover {
  background-color: #004182;
}

.share-btn.whatsapp {
  background-color: #25D366;
}

.share-btn.whatsapp:hover {
  background-color: #1FAE51;
}
```

---

## 🎯 Passo 4: Estratégia de Conteúdo por Rede

### Facebook
- Compartilhe artigos sobre motivação
- Crie eventos para lançamentos
- Responda comentários e mensagens
- Frequência: 3-4 posts/semana

### Instagram
- Compartilhe citações inspiradoras
- Faça Reels com dicas de motivação
- Stories com bastidores
- Frequência: 5-7 posts/semana

### LinkedIn
- Compartilhe artigos profissionais
- Histórias de sucesso
- Dicas de desenvolvimento pessoal
- Frequência: 3-4 posts/semana

### TikTok
- Vídeos curtos de motivação
- Dicas rápidas
- Desafios de motivação
- Frequência: 5-7 vídeos/semana

### YouTube
- Vídeos longos sobre motivação
- Entrevistas com pessoas inspiradoras
- Tutoriais e guias
- Frequência: 1-2 vídeos/semana

---

## 📊 Passo 5: Adicionar Meta Tags para Redes Sociais

Edite `src/pages/index.ejs` e adicione:

```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Motivação para Todas as Idades">
<meta property="og:description" content="Série de e-books inspiradores sobre motivação">
<meta property="og:image" content="https://motivacao-ebooks.com/images/og-image.jpg">
<meta property="og:url" content="https://motivacao-ebooks.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Motivação para Todas as Idades">
<meta name="twitter:description" content="E-books gratuitos sobre motivação">
<meta name="twitter:image" content="https://motivacao-ebooks.com/images/twitter-image.jpg">
```

---

## 🔔 Passo 6: Configurar Notificações

### Facebook
1. Vá para sua página
2. Clique em **"Configurações"**
3. Ative notificações para comentários e mensagens

### Instagram
1. Vá para **"Configurações"** → **"Notificações"**
2. Ative notificações para comentários e DMs

### LinkedIn
1. Vá para **"Configurações"** → **"Notificações"**
2. Ative notificações para comentários

### TikTok
1. Vá para **"Configurações"** → **"Notificações"**
2. Ative notificações para comentários

### YouTube
1. Vá para **"Configurações"** → **"Notificações"**
2. Ative notificações para comentários

---

## 📈 Passo 7: Acompanhar Desempenho

### Ferramentas Recomendadas:

| Ferramenta | Função | Preço |
|-----------|--------|-------|
| **Buffer** | Agendar posts | Gratuito/Pago |
| **Later** | Planejar conteúdo | Gratuito/Pago |
| **Hootsuite** | Gerenciar múltiplas redes | Gratuito/Pago |
| **Sprout Social** | Analytics avançado | Pago |

---

## 💡 Dicas de Sucesso

✅ **Consistência:** Poste regularmente  
✅ **Engajamento:** Responda comentários rapidamente  
✅ **Qualidade:** Conteúdo de valor sempre  
✅ **Comunidade:** Construa relacionamentos  
✅ **Análise:** Acompanhe o que funciona  

---

## 🎬 Exemplo de Conteúdo

### Post para Facebook/Instagram:
```
🌟 "A motivação não é algo que você tem, é algo que você cultiva todos os dias!"

Descubra como manter sua motivação em qualquer idade com nossos e-books gratuitos.

📚 Baixe agora: [link]

#Motivação #Inspiração #Desenvolvimento
```

### Post para LinkedIn:
```
💼 Como Manter a Motivação em Sua Carreira

A motivação é fundamental para o sucesso profissional. Neste e-book, exploramos estratégias práticas para manter-se motivado em qualquer etapa da carreira.

Leia mais: [link]

#Carreira #Desenvolvimento #Motivação
```

### Vídeo para TikTok:
```
[Vídeo 15-30 segundos]
"Dica rápida de motivação: Comece seu dia com uma intenção clara!"

#Motivação #DicasDeVida #Inspiração
```

---

## 🆘 Troubleshooting

### "Meus posts não aparecem"
- Verifique se a conta está pública
- Aguarde alguns minutos
- Tente postar novamente

### "Botões de compartilhamento não funcionam"
- Verifique os URLs
- Teste em navegador diferente
- Limpe cache

### "Não estou recebendo notificações"
- Verifique configurações de notificações
- Ative notificações do navegador
- Verifique email de notificações

---

## 📞 Suporte

- Facebook Help: facebook.com/help
- Instagram Help: help.instagram.com
- LinkedIn Help: linkedin.com/help
- TikTok Help: support.tiktok.com
- YouTube Help: support.google.com/youtube

---

**Suas redes sociais estão integradas!** 📱
