# 📊 Google Analytics - Acompanhe Seus Visitantes

## Seu Email: `vanildasouzasilveira@gmail.com`

Este guia explica como configurar Google Analytics para acompanhar visitantes do seu site.

---

## 📋 Passo 1: Criar Conta Google Analytics

1. Vá para [analytics.google.com](https://analytics.google.com)
2. Clique em **"Começar"** (ou "Get Started")
3. Faça login com sua conta Google (vanildasouzasilveira@gmail.com)
4. Se não tiver conta Google, crie uma em [accounts.google.com](https://accounts.google.com)

---

## 🎯 Passo 2: Criar Propriedade

1. Clique em **"Criar"** (ou "Create")
2. Selecione **"Propriedade"**
3. Preencha:
   - **Nome da propriedade:** Motivação para Todas as Idades
   - **Fuso horário:** (UTC-03:00) Brasília
   - **Moeda:** BRL (Real Brasileiro)
4. Clique em **"Próximo"**

---

## 📱 Passo 3: Criar Fluxo de Dados

1. Selecione **"Web"** como tipo de plataforma
2. Preencha:
   - **URL do site:** https://motivacao-ebooks.com
   - **Nome do fluxo:** Motivação eBbooks
3. Clique em **"Criar fluxo"**

---

## 🔑 Passo 4: Obter ID de Medição

1. Após criar o fluxo, você verá uma tela com:
   - **ID de medição:** G-XXXXXXXXXX
2. Copie este ID (você vai precisar)

---

## 💻 Passo 5: Adicionar Código ao Site

### 5.1 Adicionar ao Template HTML

Adicione este código no `<head>` de todas as páginas (ou no layout principal):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Substitua `G-XXXXXXXXXX` pelo seu ID de medição!**

### 5.2 Adicionar em Todas as Páginas EJS

Edite `src/pages/index.ejs` e adicione no `<head>`:

```html
<head>
  <!-- ... outros meta tags ... -->
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

Repita para:
- `ebook-detail.ejs`
- `about.ejs`
- `contact.ejs`
- `404.ejs`

---

## 🔄 Passo 6: Verificar Instalação

1. Volte para Google Analytics
2. Vá para **"Relatórios"** → **"Tempo real"**
3. Abra seu site em uma aba do navegador
4. Você deve ver sua visita em tempo real!

---

## 📊 Passo 7: Explorar Relatórios

### Relatórios Importantes:

| Relatório | O Que Mostra |
|-----------|-------------|
| **Tempo Real** | Visitantes agora |
| **Usuários** | Total de visitantes |
| **Engajamento** | Páginas mais visitadas |
| **Conversões** | Ações importantes |
| **Origem do Tráfego** | De onde vêm os visitantes |

### Como Acessar:

1. Vá para [analytics.google.com](https://analytics.google.com)
2. Selecione sua propriedade
3. Clique em **"Relatórios"** (menu esquerdo)
4. Escolha o relatório que quer ver

---

## 🎯 Passo 8: Configurar Eventos Personalizados

Para acompanhar ações específicas (como downloads de PDFs):

### 8.1 Adicionar Código JavaScript

```javascript
// Rastrear downloads
document.querySelectorAll('a[href*="/download/"]').forEach(link => {
  link.addEventListener('click', function() {
    gtag('event', 'download', {
      'file_name': this.href.split('/').pop(),
      'file_type': 'pdf'
    });
  });
});

// Rastrear inscrições em newsletter
document.getElementById('newsletter-form')?.addEventListener('submit', function() {
  gtag('event', 'newsletter_signup', {
    'method': 'email'
  });
});
```

### 8.2 Ver Eventos em Analytics

1. Vá para **"Relatórios"** → **"Engajamento"** → **"Eventos"**
2. Você verá todos os eventos rastreados

---

## 💡 Métricas Importantes

| Métrica | Significado |
|---------|-----------|
| **Usuários** | Pessoas únicas que visitaram |
| **Sessões** | Visitas (um usuário pode ter múltiplas) |
| **Taxa de rejeição** | % que saem sem interagir |
| **Duração média da sessão** | Quanto tempo fica no site |
| **Páginas por sessão** | Quantas páginas vê por visita |
| **Taxa de conversão** | % que fazem ação desejada |

---

## 🔔 Passo 9: Configurar Alertas

1. Vá para **"Administração"** → **"Alertas personalizados"**
2. Clique em **"Criar alerta"**
3. Configure para ser alertado se:
   - Visitantes caem muito
   - Taxa de rejeição sobe
   - Tráfego aumenta muito

---

## 📧 Passo 10: Receber Relatórios por Email

1. Vá para **"Relatórios"** → Escolha um relatório
2. Clique em **"Compartilhar"** (ícone de compartilhamento)
3. Selecione **"Agendar relatório"**
4. Configure para receber por email semanalmente

---

## 🆘 Troubleshooting

### "Analytics não mostra dados"
- Aguarde 24-48 horas para dados aparecerem
- Verifique se o ID de medição está correto
- Verifique se o código está no `<head>` da página
- Limpe cache do navegador

### "Mostra 0 visitantes"
- Verifique se está em "Tempo real"
- Tente acessar o site em outra aba
- Verifique se o código está instalado corretamente

### "Eventos não aparecem"
- Verifique se o código JavaScript está correto
- Aguarde alguns minutos
- Verifique o console do navegador para erros

---

## 📞 Suporte

- Google Analytics Help: support.google.com/analytics
- Email: vanildasouzasilveira@gmail.com

---

## 🎓 Próximos Passos

1. **Metas:** Configure metas para conversões
2. **Segmentação:** Crie segmentos de usuários
3. **Relatórios Personalizados:** Crie seus próprios relatórios
4. **Integração com Search Console:** Veja dados de busca

---

**Seu site está sendo rastreado!** 📊
