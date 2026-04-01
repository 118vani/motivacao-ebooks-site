# 📧 Integração Mailchimp - Email Marketing

## Seu Email: `vanildasouzasilveira@gmail.com`

Este guia explica como integrar Mailchimp ao seu site para capturar emails de visitantes.

---

## 📋 Passo 1: Criar Conta Mailchimp

1. Vá para [mailchimp.com](https://mailchimp.com)
2. Clique em **"Sign Up"**
3. Preencha:
   - **Email:** vanildasouzasilveira@gmail.com
   - **Password:** Crie uma senha forte
4. Clique em **"Create Account"**
5. Confirme seu email

---

## 🎯 Passo 2: Criar Lista de Emails

1. Após fazer login, vá para **"Audience"** (no menu esquerdo)
2. Clique em **"Create Audience"**
3. Preencha:
   - **Audience name:** Motivação para Todas as Idades
   - **Default from email:** vanildasouzasilveira@gmail.com
   - **Default from name:** Motivação para Todas as Idades
   - **Campaign permission:** Selecione "Explicit"
4. Clique em **"Create"**

---

## 🔑 Passo 3: Obter API Key

1. Clique na sua conta (canto superior direito)
2. Selecione **"Account & Billing"**
3. Vá para **"Extras"** → **"API Keys"**
4. Clique em **"Create A Key"**
5. Copie a chave gerada

---

## 🔗 Passo 4: Obter Audience ID

1. Vá para **"Audience"**
2. Clique na sua lista
3. Vá para **"Settings"** → **"Audience name and defaults"**
4. Procure por **"Audience ID"** (no final da página)
5. Copie o ID

---

## 💻 Passo 5: Integrar no Site

### 5.1 Instalar Dependência

```bash
cd /home/ubuntu/motivacao-ebooks-site
npm install mailchimp-api-v3
```

### 5.2 Adicionar Variáveis de Ambiente

No Railway, adicione:
```
MAILCHIMP_API_KEY=sua-api-key-aqui
MAILCHIMP_AUDIENCE_ID=seu-audience-id-aqui
```

### 5.3 Adicionar Rota no Servidor

No `server.js`, adicione:

```javascript
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us1', // Verifique seu servidor na API key
});

app.post('/subscribe', async (req, res) => {
  try {
    const { email, name } = req.body;
    
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'pending',
      merge_fields: {
        FNAME: name.split(' ')[0],
        LNAME: name.split(' ').slice(1).join(' ')
      }
    });
    
    res.json({ success: true, message: 'Email adicionado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
});
```

---

## 📝 Passo 6: Adicionar Formulário ao Site

Adicione este código ao seu template HTML (index.ejs):

```html
<!-- Newsletter Signup -->
<section class="newsletter-section">
  <div class="container">
    <h2>Receba Novidades e Dicas de Motivação</h2>
    <p>Inscreva-se em nossa newsletter para receber conteúdo exclusivo</p>
    
    <form id="newsletter-form" class="newsletter-form">
      <input 
        type="email" 
        id="newsletter-email" 
        placeholder="Seu email" 
        required
      >
      <input 
        type="text" 
        id="newsletter-name" 
        placeholder="Seu nome" 
        required
      >
      <button type="submit" class="btn btn-primary">Inscrever-se</button>
    </form>
    
    <div id="newsletter-message" style="display: none; margin-top: 1rem;"></div>
  </div>
</section>
```

---

## 🎨 Passo 7: Adicionar CSS

```css
.newsletter-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
  margin: 2rem 0;
}

.newsletter-section h2 {
  margin-bottom: 0.5rem;
}

.newsletter-section p {
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.newsletter-form input {
  flex: 1;
  min-width: 150px;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
}
```

---

## 🔧 Passo 8: Adicionar JavaScript

```javascript
// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('newsletter-email').value;
    const name = document.getElementById('newsletter-name').value;
    const messageDiv = document.getElementById('newsletter-message');
    
    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      });
      
      const data = await response.json();
      
      if (data.success) {
        messageDiv.style.display = 'block';
        messageDiv.style.color = '#4ADE80';
        messageDiv.textContent = '✓ Inscrição realizada com sucesso!';
        newsletterForm.reset();
      } else {
        messageDiv.style.display = 'block';
        messageDiv.style.color = '#FF6B6B';
        messageDiv.textContent = '✗ Erro: ' + data.error;
      }
    } catch (error) {
      messageDiv.style.display = 'block';
      messageDiv.style.color = '#FF6B6B';
      messageDiv.textContent = '✗ Erro ao inscrever';
    }
  });
}
```

---

## 📊 Passo 9: Gerenciar Inscritos

1. Vá para [mailchimp.com](https://mailchimp.com)
2. Acesse sua **Audience**
3. Veja todos os inscritos em **"Contacts"**
4. Crie campanhas de email em **"Campaigns"**

---

## 💡 Dicas

✅ **Automação:** Configure emails automáticos de boas-vindas  
✅ **Segmentação:** Divida inscritos por interesse  
✅ **Analytics:** Acompanhe taxa de abertura e cliques  
✅ **Templates:** Use templates prontos do Mailchimp  

---

## 🆘 Troubleshooting

### "Erro de API"
- Verifique se a API Key está correta
- Verifique se o Audience ID está correto
- Verifique se o servidor (us1, us2, etc.) está correto

### "Email já existe"
- Mailchimp não permite duplicatas por padrão
- Você pode mudar isso nas configurações

### "Não recebo confirmação"
- Verifique a pasta de spam
- Verifique se o email está correto

---

## 📞 Suporte

- Mailchimp Help: help.mailchimp.com
- Email: vanildasouzasilveira@gmail.com

---

**Sua newsletter está pronta!** 📧
