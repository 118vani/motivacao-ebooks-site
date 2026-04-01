# 🌐 Configuração do Domínio Personalizado

## Seu Domínio: `motivacao-ebooks.com`

Este guia explica como conectar seu domínio ao Railway.

---

## 📋 Passo 1: Comprar o Domínio

Se você ainda não tem o domínio, compre em uma destas plataformas:

| Plataforma | Preço | Link |
|-----------|-------|------|
| **Namecheap** | ~$8.88/ano | namecheap.com |
| **GoDaddy** | ~$12.99/ano | godaddy.com |
| **Registro.br** | ~R$40/ano | registro.br |
| **Google Domains** | ~$12/ano | domains.google.com |

**Recomendação:** Use Namecheap ou Registro.br (melhor para Brasil)

---

## 🔧 Passo 2: Configurar no Railway

### 2.1 Acesse o Railway
1. Vá para [railway.app](https://railway.app)
2. Faça login
3. Abra seu projeto `motivacao-ebooks-site`

### 2.2 Adicione o Domínio
1. Clique na aba **"Settings"**
2. Procure por **"Domains"**
3. Clique em **"Add Domain"**
4. Digite: `motivacao-ebooks.com`
5. Clique em **"Add"**

### 2.3 Copie os Registros DNS
O Railway vai mostrar dois registros DNS:
- Um registro **CNAME** ou **A**
- Copie estes valores

---

## 🔌 Passo 3: Configurar DNS no Registrador

### Se você usa **Namecheap:**

1. Faça login em namecheap.com
2. Vá para **"Domain List"**
3. Clique em **"Manage"** do seu domínio
4. Vá para aba **"Advanced DNS"**
5. Procure por registros existentes e **delete** (se houver)
6. Clique em **"Add Record"**
7. Preencha com os dados do Railway:
   - **Type:** CNAME (ou A, conforme Railway indicar)
   - **Host:** @ (ou www, conforme Railway indicar)
   - **Value:** Cole o valor que Railway forneceu
8. Clique em **"Save"**

### Se você usa **Registro.br:**

1. Faça login em registro.br
2. Vá para **"Meus Domínios"**
3. Clique no seu domínio
4. Vá para **"Editar Zona"**
5. Adicione os registros DNS do Railway
6. Clique em **"Salvar"**

### Se você usa **GoDaddy:**

1. Faça login em godaddy.com
2. Vá para **"My Domains"**
3. Clique em **"Manage DNS"**
4. Procure por **"Records"**
5. Adicione os registros do Railway
6. Clique em **"Save"**

---

## ⏳ Passo 4: Aguardar Propagação

- A mudança pode levar **15 minutos a 48 horas** para se propagar
- Você pode verificar em [whatsmydns.net](https://whatsmydns.net)
- Digite seu domínio e veja o status

---

## ✅ Passo 5: Verificar

Depois que a propagação terminar:

1. Abra seu navegador
2. Digite: `https://motivacao-ebooks.com`
3. Seu site deve carregar! 🎉

---

## 🔒 HTTPS Automático

O Railway configura HTTPS automaticamente com Let's Encrypt. Seu site será seguro!

---

## 🆘 Troubleshooting

### "Meu domínio não funciona"
- Aguarde mais tempo (até 48 horas)
- Verifique os registros DNS
- Limpe o cache do navegador (Ctrl+Shift+Del)

### "Erro 404 ou página em branco"
- Verifique se o Railway está rodando
- Verifique os logs no Railway
- Tente acessar via URL do Railway (sem domínio)

### "HTTPS não funciona"
- Aguarde alguns minutos
- Recarregue a página
- Verifique os certificados no Railway

---

## 📞 Suporte

Se tiver problemas:
- Contate o suporte do Railway: support@railway.app
- Contate o suporte do seu registrador de domínio
- Envie email: vanildasouzasilveira@gmail.com

---

**Seu domínio estará online em breve!** 🚀
